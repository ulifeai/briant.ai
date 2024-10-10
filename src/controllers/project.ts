import Project, { IProject } from '@/models/Project';
import logger from '@/lib/utils/logger'; // Optional: For enhanced logging
import { generateSitemap } from '@/lib/ai/invoke';
import { createPage } from './page';
import { Category, IPage } from '@/models/Page';

/**
 * Retrieve all projects for a specific user.
 * @param userId - The UUID of the user.
 * @returns An array of IProject objects.
 */
export async function getProjects(userId: string): Promise<IProject[]> {
    try {
        const projects = await Project.find({ user_id: userId }).sort([['createdAt', -1]]).lean().exec();
        return projects;
    } catch (error) {
        logger.error('Error loading projects:', error); // Optional: Enhanced logging
        throw new Error('Failed to load projects');
    }
}

/**
 * Retrieve a single project by its ID.
 * @param projectId - The UUID of the project.
 * @returns The IProject object or null if not found.
 */
export async function getProjectById(projectId: string): Promise<IProject | null> {
    try {
        const project = await Project.findOne({ _id: projectId }).lean().exec();
        return project;
    } catch (error) {
        logger.error('Error retrieving project:', error); // Optional: Enhanced logging
        throw new Error('Failed to retrieve project');
    }
}

/**
 * Create a new project.
 * @param data - The project data.
 * @returns The newly created IProject object.
 */
export async function createProject(data: {
    user_id: string;
    name: string;
    description?: string;
    customizations?: Record<string, any>;
}): Promise<{ project: IProject, pages: IPage[] }> {
    try {

        let endPages: any[] = [];
        let { user_id, name, description = '', customizations = {} } = data;
        const sitemapData = await generateSitemap(description);
        name = sitemapData.sitename
        // Optional: Check for duplicate project name for the user
        const existingProject = await Project.findOne({ user_id, name }).exec();
        if (existingProject) {
            throw new Error('Project name already exists for this user');
        }
        const newProject: IProject = new Project({
            user_id,
            name,
            description,
            customizations,
        });

        const savedProject = await newProject.save();
        logger.info('Project created successfully:', savedProject); // Optional: Enhanced logging
        // create blocks automagically

        if (savedProject) {
            const pages = sitemapData.pages;
            for (const key in pages) {
                if (Object.prototype.hasOwnProperty.call(pages, key)) {
                    const pageSection = pages[key];
                    for (let i = 0; i < pageSection.length; i++) {
                        const page = pageSection[i];
                        const createdPage = await createPage({
                            category: key as Category,
                            name: page.title,
                            description: page.description,
                            project_id: newProject._id as string
                        });
                        endPages.push(createdPage);
                    }
                }
            }

            // Additional backend data generation can be handled here
        }
        return { project: savedProject, pages: endPages };
    } catch (error: any) {
        logger.error('Error creating project:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to create project');
    }
}

/**
 * Update an existing project by its ID.
 * @param projectId - The UUID of the project.
 * @param data - The updated project data.
 * @returns The updated IProject object or null if not found.
 */
export async function updateProject(
    projectId: string,
    data: {
        name?: string;
        description?: string;
        customizations?: Record<string, any>;
    }
): Promise<IProject | null> {
    try {
        const updatedProject = await Project.findOneAndUpdate(
            { _id: projectId },
            { $set: data },
            { new: true, runValidators: true }
        ).exec();

        if (!updatedProject) {
            throw new Error('Project not found');
        }

        logger.info('Project updated successfully:', updatedProject); // Optional: Enhanced logging
        return updatedProject;
    } catch (error: any) {
        logger.error('Error updating project:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to update project');
    }
}

/**
 * Delete a project by its ID.
 * @param projectId - The UUID of the project.
 * @returns An object containing the deletedCount.
 */
export async function deleteProject(projectId: string): Promise<{ deletedCount?: number }> {
    try {
        const result = await Project.deleteOne({ _id: projectId }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Project not found');
        }
        logger.info('Project deleted successfully:', projectId); // Optional: Enhanced logging
        return result;
    } catch (error: any) {
        logger.error('Error deleting project:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to delete project');
    }
}

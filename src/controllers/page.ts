import Page, { Category, IPage } from '@/models/Page';
import Project, { IProject } from '@/models/Project';
import logger from '@/lib/utils/logger'; // Optional: For enhanced logging
import { getBlocks } from './block';

/**
 * Retrieve all pages for a specific project.
 * @param projectId - The UUID of the project.
 * @returns An array of IPage objects.
 */
export async function getPages(projectId: string): Promise<IPage[]> {
    try {
        const project = await Project.findOne({ _id: projectId }).exec();
        console.log(project)
        if (!project) {
            throw new Error('Project not found');
        }

        const pages = await Page.find({ project_id: project._id, }).lean().exec();
        const pagesWithBlocks = await Promise.all(pages.map(async (page: any) => {
            page.blocks = await getBlocks(page._id)
            return page
        }))
        return pagesWithBlocks;
    } catch (error) {
        logger.error('Error loading pages:', error); // Optional: Enhanced logging
        throw new Error('Failed to load pages');
    }
}

/**
 * Retrieve all pages for a specific project.
 * @param projectId - The UUID of the project.
 * @returns An array of IPage objects.
 */
export async function getPagesWithBlocksAndProject(projectId: string): Promise<{ pages: IPage[], project: IProject }> {
    try {
        const project = await Project.findOne({ _id: projectId }).exec();
        if (!project) {
            throw new Error('Project not found');
        }

        const pages = await Page.find({ project_id: project._id, }).lean().exec();
        const pagesWithBlocks = await Promise.all(pages.map(async (page: any) => {
            page.blocks = await getBlocks(page._id)
            return page
        }))
        return { pages: pagesWithBlocks, project };
    } catch (error) {
        logger.error('Error loading pages:', error); // Optional: Enhanced logging
        throw new Error('Failed to load pages');
    }
}

/**
 * Retrieve a single page by its ID. 
 * @param pageId - The UUID of the page.
 * @returns The IPage object or null if not found.
 */
export async function getPageById(pageId: string): Promise<IPage | null> {
    try {
        const page = await Page.findOne({ _id: pageId }).lean().exec();
        return page;
    } catch (error) {
        logger.error('Error retrieving page:', error); // Optional: Enhanced logging
        throw new Error('Failed to retrieve page');
    }
}

/**
 * Create a new page within a project.
 * @param data - The page data.
 * @returns The newly created IPage object.
 */
export async function createPage(data: {
    project_id: string; // UUID of the project
    name: string;
    path: string;
    description: string;
    category: Category
}): Promise<IPage> {
    try {
        const { project_id, name, path, category, description } = data;

        // Find the project by UUID
        const project = await Project.findOne({ _id: project_id }).exec();
        if (!project) {
            throw new Error('Project not found');
        }

        // Optional: Check for duplicate page name within the project
        const existingPage = await Page.findOne({ project_id: project._id, name }).exec();
        if (existingPage) {
            throw new Error('Page name already exists within this project');
        }

        const newPage: IPage = new Page({
            project_id: project._id,
            name,
            path,
            description,
            category
        });

        const savedPage = await newPage.save();
        logger.info('Page created successfully:', savedPage); // Optional: Enhanced logging
        return savedPage;
    } catch (error: any) {
        logger.error('Error creating page:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to create page');
    }
}


/**
 * Create a new page within a project.
 * @param data - The page data.
 * @returns The newly created IPage object.
 */
export async function createMultiplePages(data: {
    project_id: string; // UUID of the project
    name: string;
    path: string;
    description: string;
    category: string
}[]): Promise<IPage[]> {
    try {
        const savedPage = []
        for (let i = 0; i < data.length; i++) {
            const { project_id, name, path, category, description } = data[i];
            // Find the project by UUID
            const project = await Project.findOne({ _id: project_id }).exec();
            if (!project) {
                throw new Error('Project not found');
            }

            // Optional: Check for duplicate page name within the project
            const existingPage = await Page.findOne({ project_id: project._id, name }).exec();
            if (existingPage) {
                throw new Error('Page name already exists within this project');
            }

            const newPage: IPage = new Page({
                project_id: project._id,
                name,
                path,
                description,
                category
            });

            savedPage.push(await newPage.save());
            logger.info('Page created successfully:', savedPage); // Optional: Enhanced logging

        }

        return savedPage;
    } catch (error: any) {
        logger.error('Error creating page:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to create page');
    }
}

/**
 * Update an existing page by its ID.
 * @param pageId - The UUID of the page.
 * @param data - The updated page data.
 * @returns The updated IPage object or null if not found.
 */
export async function updatePage(
    pageId: string,
    data: any
): Promise<IPage | null> {
    try {
        const updatedPage = await Page.findOneAndUpdate(
            { _id: pageId },
            { $set: data },
            { new: true, runValidators: true }
        ).exec();

        if (!updatedPage) {
            throw new Error('Page not found');
        }

        logger.info('Page updated successfully:', updatedPage); // Optional: Enhanced logging
        return updatedPage;
    } catch (error: any) {
        logger.error('Error updating page:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to update page');
    }
}

/**
 * Delete a page by its ID.
 * @param pageId - The UUID of the page.
 * @returns An object containing the deletedCount.
 */
export async function deletePage(pageId: string): Promise<{ deletedCount?: number }> {
    try {
        const result = await Page.deleteOne({ _id: pageId }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Page not found');
        }
        logger.info('Page deleted successfully:', pageId); // Optional: Enhanced logging
        return result;
    } catch (error: any) {
        logger.error('Error deleting page:', error); // Optional: Enhanced logging
        throw new Error(error.message || 'Failed to delete page');
    }
}

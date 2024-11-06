// app/api/projects/[id].ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getProjectById, updateProject, deleteProject } from '@/controllers/project';
import { updateProjectSchema } from '@/validators/entities'; // Ensure this is a Zod schema
import { IProject } from '@/models/Project';
import { createResponse, ResponseData } from '@/lib/utils/response'; // Assuming these utilities exist
import { validateSchema } from '@/lib/utils/validate'; // Assuming this utility exists

/**
 * Handle GET request to retrieve a project by ID.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const projectId = params.id;

    if (!projectId) {
        return createResponse(
            { success: false, error: 'Project ID is required.' },
            400
        );
    }

    try {
        const project = await getProjectById(projectId);
        if (!project) {
            return createResponse(
                { success: false, error: 'Project not found.' },
                404
            );
        }
        return createResponse(
            { success: true, data: project },
            200
        );
    } catch (error: any) {
        console.error('GET /api/projects/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle PUT request to update a project.
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const projectId = params.id;

    if (!projectId) {
        return createResponse(
            { success: false, error: 'Project ID is required.' },
            400
        );
    }

    let body: unknown;

    try {
        body = await req.json();
    } catch (error: any) {
        console.error('PUT /api/projects/[id] - Invalid JSON:', error);
        return createResponse(
            { success: false, error: 'Invalid JSON payload.' },
            400
        );
    }

    // Validate using the utility function
    const validation = validateSchema(updateProjectSchema, body);

    if (!validation.success || !validation.data) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }

    const validatedData = validation.data;

    try {
        const updatedProject = await updateProject(projectId, validatedData);
        if (!updatedProject) {
            return createResponse(
                { success: false, error: 'Project not found.' },
                404
            );
        }
        return createResponse(
            { success: true, data: updatedProject },
            200
        );
    } catch (error: any) {
        console.error('PUT /api/projects/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle DELETE request to delete a project.
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const projectId = params.id;

    if (!projectId) {
        return createResponse(
            { success: false, error: 'Project ID is required.' },
            400
        );
    }

    try {
        const deleted = await deleteProject(projectId);
        if (!deleted) {
            return createResponse(
                { success: false, error: 'Project not found.' },
                404
            );
        }
        return createResponse(
            { success: true, message: 'Project deleted successfully.' },
            200
        );
    } catch (error: any) {
        console.error('DELETE /api/projects/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle OPTIONS request for CORS preflight.
 */
export async function OPTIONS(req: NextRequest, context: any) {
    return createResponse(
        { success: true, message: 'OK' },
        200
    );
}


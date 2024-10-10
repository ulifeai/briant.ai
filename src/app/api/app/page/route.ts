// app/api/pages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getPages, createPage, getPagesWithBlocksAndProject } from '@/controllers/page';
import { createPageSchema } from '@/validators/entities'; // Ensure this is a Zod schema
import { Category, IPage } from '@/models/Page';
import { createResponse, ResponseData } from '@/lib/utils/response'; // Assuming these utilities exist
import { validateSchema } from '@/lib/utils/validate'; // Assuming this utility exists

/**
 * Handle GET request to retrieve all pages for a project.
 */
export async function GET(req: NextRequest) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get('project_id');

    if (!projectId) {
        return createResponse(
            { success: false, error: 'project_id is required.' },
            400
        );
    }

    try {
        const pages = await getPagesWithBlocksAndProject(projectId);
        return createResponse({ success: true, data: pages }, 200);
    } catch (error: any) {
        console.error('GET /api/pages Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle POST request to create a new page.
 */
export async function POST(req: NextRequest) {
    await connectDB();

    let body: unknown;

    try {
        body = await req.json();
    } catch (error: any) {
        console.error('POST /api/pages - Invalid JSON:', error);
        return createResponse(
            { success: false, error: 'Invalid JSON payload.' },
            400
        );
    }

    // Validate using the utility function
    const validation = validateSchema(createPageSchema, body);

    if (!validation.success || !validation.data) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }

    const validatedData = validation.data;

    try {
        const newPage = await createPage({ ...validatedData, category: validatedData.category as Category ?? "static" });
        return createResponse({ success: true, data: newPage }, 201);
    } catch (error: any) {
        console.error('POST /api/pages Error:', error);
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

export const config = {
    api: {
        bodyParser: true,
    },
};

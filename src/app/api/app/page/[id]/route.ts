// app/api/pages/[id].ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getPageById, updatePage, deletePage } from '@/controllers/page';
import { updatePageSchema } from '@/validators/entities'; // Ensure this is a Zod schema
import { IPage } from '@/models/Page';
import { createResponse, ResponseData } from '@/lib/utils/response'; // Assuming these utilities exist
import { validateSchema } from '@/lib/utils/validate'; // Assuming this utility exists

/**
 * Handle GET request to retrieve a page by ID.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const pageId = params.id;

    if (!pageId) {
        return createResponse(
            { success: false, error: 'Page ID is required.' },
            400
        );
    }

    try {
        const page = await getPageById(pageId);
        if (!page) {
            return createResponse(
                { success: false, error: 'Page not found.' },
                404
            );
        }
        return createResponse(
            { success: true, data: page },
            200
        );
    } catch (error: any) {
        console.error('GET /api/pages/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle PUT request to update a page.
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const pageId = params.id;

    if (!pageId) {
        return createResponse(
            { success: false, error: 'Page ID is required.' },
            400
        );
    }

    let body: unknown;

    try {
        body = await req.json();
    } catch (error: any) {
        console.error('PUT /api/pages/[id] - Invalid JSON:', error);
        return createResponse(
            { success: false, error: 'Invalid JSON payload.' },
            400
        );
    }

    // Validate using the utility function
    const validation = validateSchema(updatePageSchema, body);

    if (!validation.success) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }

    const validatedData = validation.data;

    try {
        const updatedPage = await updatePage(pageId, validatedData);
        if (!updatedPage) {
            return createResponse(
                { success: false, error: 'Page not found.' },
                404
            );
        }
        return createResponse(
            { success: true, data: updatedPage },
            200
        );
    } catch (error: any) {
        console.error('PUT /api/pages/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle DELETE request to delete a page.
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const pageId = params.id;

    if (!pageId) {
        return createResponse(
            { success: false, error: 'Page ID is required.' },
            400
        );
    }

    try {
        const deleted = await deletePage(pageId);
        if (!deleted) {
            return createResponse(
                { success: false, error: 'Page not found.' },
                404
            );
        }
        return createResponse(
            { success: true, message: 'Page deleted successfully.' },
            200
        );
    } catch (error: any) {
        console.error('DELETE /api/pages/[id] Error:', error);
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


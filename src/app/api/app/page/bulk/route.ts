// app/api/pages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getPages, createPage, getPagesWithBlocksAndProject, createMultiplePages } from '@/controllers/page';
import { createBulkPageSchema, createPageSchema } from '@/validators/entities'; // Ensure this is a Zod schema
import { Category, IPage } from '@/models/Page';
import { createResponse, ResponseData } from '@/lib/utils/response'; // Assuming these utilities exist
import { validateSchema } from '@/lib/utils/validate'; // Assuming this utility exists



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
    const validation = validateSchema(createBulkPageSchema, body);

    if (!validation.success || !validation.data) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }

    const validatedData = validation.data;

    try {
        const newPage = await createMultiplePages(validatedData);
        return createResponse({ success: true, data: newPage }, 201);
    } catch (error: any) {
        console.error('POST /api/pages Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}



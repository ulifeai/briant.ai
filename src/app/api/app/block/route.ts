// app/api/blocks/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getBlocks, createBlock } from '@/controllers/block';
import { createBlockSchema } from '@/validators/entities';
import { IBlock } from '@/models/Block';
import { createResponse, ResponseData } from '@/lib/utils/response';
import { validateSchema } from '@/lib/utils/validate';

/**
 * Handle GET request to retrieve all blocks for a page.
 */
export async function GET(req: NextRequest) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const pageId = searchParams.get('page_id');

    if (!pageId) {
        return createResponse(
            { success: false, error: 'page_id is required.' },
            400
        );
    }

    try {
        const blocks = await getBlocks(pageId);
        return createResponse({ success: true, data: blocks }, 200);
    } catch (error: any) {
        console.error('GET /api/blocks Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle POST request to create a new block.
 */
export async function POST(req: NextRequest) {
    await connectDB();

    let body: unknown;

    try {
        body = await req.json();
    } catch (error: any) {
        console.error('POST /api/blocks - Invalid JSON:', error);
        return createResponse(
            { success: false, error: 'Invalid JSON payload.' },
            400
        );
    }

    // Validate using the utility function
    const validation = validateSchema(createBlockSchema, body);

    if (!validation.success) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }

    const validatedData = validation.data;

    if (!validatedData) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }


    try {
        const newBlock = await createBlock(validatedData);
        return createResponse({ success: true, data: newBlock }, 201);
    } catch (error: any) {
        console.error('POST /api/blocks Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle unsupported HTTP methods.
 */
export async function OPTIONS(req: NextRequest, context: any) {
    return createResponse(
        { success: true, message: 'OK' },
        200
    );
}


// src/routes/blocks/[id].ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getBlockById, updateBlock, deleteBlock } from '@/controllers/block';
import { updateBlockSchema } from '@/validators/entities';
import { createResponse, ResponseData } from '@/lib/utils/response';
import { validateSchema } from '@/lib/utils/validate';

/**
 * Handle GET request to retrieve a block by ID.
 */
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();

    const blockId = params.id;

    if (!blockId) {
        return createResponse(
            { success: false, error: 'Block ID is required.' },
            400
        );
    }

    try {
        const block = await getBlockById(blockId);
        if (!block) {
            return createResponse(
                { success: false, error: 'Block not found.' },
                404
            );
        }
        return createResponse({ success: true, data: block }, 200);
    } catch (error: any) {
        console.error('GET /blocks/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle PUT request to update a block.
 */
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();

    const blockId = params.id;

    if (!blockId) {
        return createResponse(
            { success: false, error: 'Block ID is required.' },
            400
        );
    }

    let body: unknown;

    try {
        body = await req.json();
    } catch (error: any) {
        console.error('PUT /blocks/[id] - Invalid JSON:', error);
        return createResponse(
            { success: false, error: 'Invalid JSON payload.' },
            400
        );
    }

    // Validate using the utility function
    const validation = validateSchema(updateBlockSchema, body);

    if (!validation.success) {
        return createResponse(
            { success: false, error: 'Validation Failed.', message: validation.errors },
            400
        );
    }

    const validatedData = validation.data;

    try {
        const updatedBlock = await updateBlock(blockId, validatedData ?? {});
        if (!updatedBlock) {
            return createResponse(
                { success: false, error: 'Block not found.' },
                404
            );
        }
        return createResponse({ success: true, data: updatedBlock }, 200);
    } catch (error: any) {
        console.error('PUT /blocks/[id] Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

/**
 * Handle DELETE request to delete a block.
 */
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();

    const blockId = params.id;

    if (!blockId) {
        return createResponse(
            { success: false, error: 'Block ID is required.' },
            400
        );
    }

    try {
        const deleted = await deleteBlock(blockId);
        if (!deleted) {
            return createResponse(
                { success: false, error: 'Block not found.' },
                404
            );
        }
        return createResponse(
            { success: true, message: 'Block deleted successfully.' },
            200
        );
    } catch (error: any) {
        console.error('DELETE /blocks/[id] Error:', error);
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
    return NextResponse.json(
        { success: true, message: 'OK' } as ResponseData,
        { status: 200 }
    );
}


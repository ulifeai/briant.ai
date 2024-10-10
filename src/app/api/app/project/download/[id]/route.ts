import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import { getAuth } from '@clerk/nextjs/server';
import { getPages } from '@/controllers/page';
import { createResponse } from '@/lib/utils/response'; // Assuming these utilities exist
import axios from 'axios'; // Removed node-fetch as it's not used
import { getBlocks } from '@/controllers/block';

/**
 * Handle GET request to retrieve all projects for a user.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    const expressServerUrl = `${process.env.EXPORTER_URL}/generate/project`;

    try {
        const { userId } = getAuth(req);

        if (!userId) {
            return createResponse(
                { success: false, error: 'user_id is required.' },
                400
            );
        }

        const projectId = params.id;
        const pages = await getPages(projectId);

        const pageData = await Promise.all(pages.map(async (page) => {
            const blocks = await getBlocks(page._id as string);
            const jsonStructure = blocks.map((block) => block.content);
            return {
                page: page.name.replaceAll(" ", "_"),
                type: page.category,
                data: jsonStructure
            };
        }));

        console.log(JSON.stringify(pageData))

        // Fetch the ZIP file from the Express server with correct responseType
        const response = await axios.post(expressServerUrl, {
            pages: pageData
        }, {
            responseType: 'arraybuffer', // Ensure binary data is handled correctly
        });

        if (response.status !== 200) {
            return NextResponse.json({ error: 'Failed to download ZIP file.' }, { status: response.status });
        }

        // Set headers appropriately
        const headers = new Headers();
        headers.set('Content-Type', response.headers['content-type'] || 'application/zip');
        headers.set('Content-Disposition', response.headers['content-disposition'] || 'attachment; filename=download.zip');
        headers.set('Content-Length', response.headers['content-length'] || response.data.byteLength.toString());

        // Create a buffer from the binary data
        const buffer = Buffer.from(response.data);

        // Return the binary data as a NextResponse
        return new NextResponse(buffer, { status: 200, headers });

    } catch (error: any) {
        console.error('GET /api/projects Error:', error);
        return createResponse(
            { success: false, error: 'Internal Server Error.' },
            500
        );
    }
}

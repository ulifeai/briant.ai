import {generateCopy, generateSitemap} from "@/lib/ai/invoke";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


// type ResponseData = {
//     html: string,
// }

type RequestData = {
    app_context: string,
}

export async function POST (req: NextRequest){
    const body: RequestData = await req.json()
    let data = await generateSitemap(body.app_context)
    return NextResponse.json({
        ...data,
    } as any)
}


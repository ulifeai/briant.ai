import { generateCopy } from "@/lib/ai/invoke";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


type ResponseData = any

type RequestData = {
    context_data: string,
    html_content: string
}

export async function POST (req: NextRequest){
    const body: RequestData = await req.json()
    let data: Record<string, any> = await generateCopy(body.html_content, body.context_data.toString())
    return NextResponse.json({
        ...data,
    })
}
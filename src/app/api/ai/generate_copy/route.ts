import {generateCopy} from "@/lib/ai/invoke";
import { extractSchema } from "@/lib/connectors/sql/postgres";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


type ResponseData = {
    html: string,
}

type RequestData = {
    context_data: string,
    html_content: string
}

export async function POST (req: NextRequest){
    const body: RequestData = await req.json()
    let data = await generateCopy(body.html_content, body.context_data.toString())
    return NextResponse.json({
        ...data,
    } as ResponseData)
}
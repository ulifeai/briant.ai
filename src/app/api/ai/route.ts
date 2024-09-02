import {generateLayout} from "@/lib/ai/invoke";
import { extractSchema } from "@/lib/connectors/sql/postgres";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


type ResponseData = {
    layout: {
        title: string,
        description: string
    }[]
}

type RequestData = {
    app_context: string
}

export async function POST (req: NextRequest){
    const body: RequestData = await req.json()
    let data = await generateLayout(body.app_context.toString())
    return NextResponse.json({
        layout: data,
    } as ResponseData)
}
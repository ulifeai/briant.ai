import {generateLayout, generatePageCode} from "@/lib/ai/invoke";
import { extractSchema } from "@/lib/connectors/sql/postgres";
import { WebPageConfig } from "@/types/webpageconfig";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


type ResponseData = {
    layout: {
        title: string,
        description: string
    }[],
    pageCode: WebPageConfig
}

type RequestData = {
    app_context: string,
    page_description: string

}

export async function POST (req: NextRequest){
    const body: RequestData = await req.json()
    let data = await generateLayout(body.app_context.toString(), body.page_description.toString())

    const pageCode = await  generatePageCode( JSON.stringify(data), body.page_description.toString())
    return NextResponse.json({
        layout: data,
        pageCode: pageCode  
    } as ResponseData)
}
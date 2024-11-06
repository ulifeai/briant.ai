import { generateLayout, generatePageCode } from "@/lib/ai/invoke";
import { WebPageConfig } from "@/types/webpageconfig";
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
    let t = Date.now()
    let data = await generateLayout(body.app_context.toString(), body.page_description.toString())
    console.log("FIRST : ", Date.now() - t)
    const pageCode = await  generatePageCode( JSON.stringify(data), body.page_description.toString())
    console.log("SECOND : ", Date.now() - t)
    return NextResponse.json({
        layout: data,
        pageCode: pageCode  
    } as ResponseData)
}
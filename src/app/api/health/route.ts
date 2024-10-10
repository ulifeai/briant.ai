import { NextRequest, NextResponse } from "next/server";


type ResponseData = {
    status: string
}


export async function GET(req: NextRequest) {
    return NextResponse.json({
        status: "UP",
    } as ResponseData)
}
import { NextRequest, NextResponse } from "next/server";
import { HumanMessage } from "@langchain/core/messages";
import app from "@/lib/ai/agenticModel/bootstrap";
import { generateUIComponents } from "@/lib/ai/agenticModel/agents/uiComposer";


type ResponseData = {
    content: any,
}

type RequestData = {
    context_data: string,
    app_description: string
}

export async function POST(req: NextRequest) {

    const a = {
        title: 'header',
        description: "Introduce Kawlo as Africa's top examination study partner, emphasizing its role in providing past papers and answers for Cameroon GCE, ECZ, UNEB, and NECTA exams. Mention the availability of resources for both Ordinary and Advanced level exams."
    };

    // const body: RequestData = await req.json()
    // const initialMessage = new HumanMessage(`
    //     ${body.app_description}
    // `);
    // const finalState = await app.invoke({
    //     messages: [initialMessage],
    // });

    const finalState = await generateUIComponents({
        "/": {
            "pageTitle": "Home",
            "sections": [
                {
                    "title": "navbar",
                    "description": "Navigation section for easy site-wide access."
                },
                {
                    "title": "header",
                    "description": "Welcome visitors with key benefits of SmartSite Creator."
                },
                {
                    "title": "feature",
                    "description": "Highlighting the most prominent features of the AI tool."
                },
                {
                    "title": "testimonial",
                    "description": "Show real user feedback to build trust."
                },
                {
                    "title": "cta",
                    "description": "Encourage users to get started or learn more."
                },
                {
                    "title": "footer",
                    "description": "Site-wide footer with additional links and information."
                }
            ]
        }
    }, "An edtech platform in cameroon")

    console.log(finalState)

    return NextResponse.json({
        content: finalState,
    } as ResponseData)
}
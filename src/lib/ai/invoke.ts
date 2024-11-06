import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { GENERATE_PAGE_SECTIONS_PROMPT, GENERATE_SITEMAP_PROMPT, PAGE_DETAILS_GENERATOR_PROMPT } from "./prompts";
import { Model } from "./model";
import { ZodArray, ZodObject } from "zod";
import { ComponentCopySchema, LayoutSchema, LayoutSchemaArray, SitemapSchema, WebPageConfigSchema } from "@/validators/modelOutput";


async function invoke(prompt_text: string, message: string, history: (HumanMessage & AIMessage)[] = [], schema: ZodObject<any> | ZodArray<any>) {
    const prompt = ChatPromptTemplate.fromTemplate(
        prompt_text + "\n{query}\n"
    );
    const model = Model.withStructuredOutput(schema)
    // @ts-ignore
    let chain = prompt.pipe(model);
    const response = await chain.invoke({query: message, string: ""});
    return response
}


export const generateSitemap = async (app_context: string, past_context: (HumanMessage & AIMessage)[] = [])=>{
    return await invoke(
        GENERATE_SITEMAP_PROMPT,
        `${app_context}`,
        past_context,
        SitemapSchema
    )
}


export const generateLayout = async (app_context: string, page_data: string, past_context: (HumanMessage & AIMessage)[] = [])=>{
    return await invoke(
        GENERATE_PAGE_SECTIONS_PROMPT,
        `${app_context}, ${page_data}`,

        past_context,
        LayoutSchemaArray
    )
}

export const generatePageCode = async (app_layout: string, page_data: string, past_context: (HumanMessage & AIMessage)[] = [])=>{
    return await invoke(
        PAGE_DETAILS_GENERATOR_PROMPT,
        `App layout: ${app_layout}, more data about the application: ${page_data}`,
        past_context,
        WebPageConfigSchema
    )
}



export const generateCopy = async (html_content: any, context_data: string, past_context: (HumanMessage & AIMessage)[] = [])=>{
    return await invoke(
        `
        You are an expert in html, css, tailwind and copywriting. You will receive an an object containing a description of the app, of each component and extracted text from these components to rewrite

        You should return the exact same code but with a new field for each texts properties which contains in the same order a copywright version of these texts adapted to the description. 
        You should rewrite the text content of the code to match the requirements and the context. Write as a professional copywriter. Don't be too vague. Be persuasive and write a concerting marketing content.

        Don't use generic format, write as understanable and good content as possible. Make sure everthing is coherent at the end.


        Respond with a valid JSON Object. 
        Don't add any explanations, just answer with the json output. You should add nothing else but the JSON output.

        Make sure the json output is correct, verify your response and make sure the json is correct. Make sure the base html css struture is exactly the same and only the text content has changed

        here is the context of your text: ${context_data}

        Please write the copywright content of this content:
        `,

        `${JSON.stringify(html_content)}`,

        past_context,
        ComponentCopySchema
    )
}


import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { Contact } from "lucide-react";

// Define your desired data structure. Only used for typing the parser output.
interface Layout {
    title: string;
    description: string;
}

export const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0
});

const parser_layout = new JsonOutputParser<Layout[]>();
const parser_copy = new JsonOutputParser<{component: string, updated_texts: string[]}[]>();


async function invoke(prompt_text: string, message: string, history: (HumanMessage & AIMessage)[] = [], parser: JsonOutputParser) {
    const prompt = ChatPromptTemplate.fromTemplate(
        prompt_text + "\n{query}\n"
    );
    const chain = prompt.pipe(model).pipe(parser);
    const response = await chain.invoke({query: message});
    return response
}

export const generateLayout = async (app_context: string, past_context: (HumanMessage & AIMessage)[] = [])=>{
    return await invoke(
        `
        Here is a list of possible sections of a landing page:
        
        Header navigations
        Header sections
        Features sections
        Pricing sections
        CTA sections
        Metrics sections
        Newsletter CTA sections
        Testimonial sections
        Social proof sections
        Blog sections
        Blog post sections
        Content & rich text sections
        Contact sections
        Team sections
        Careers sections
        FAQ sections
        Footers
        Banners

        You are an expert in layout design and landing page creation. Given a landing page creation usecase, you should carefully pick from these section the sections
        relevant for the given usecase and assemble them to form a landing page layout. for each section you should add a description. each description should be without visual details but functional details. It should be explicit enough for another AI generate the copyright of this component without other informations.
        
        Respond with a valid array of JSON object, containing two fields: 'title' and 'desciption'. with the following structure

       
        Don't add any explanations, just answer with the json output. You should add nothing else but the JSON output.

        Make sure the json output is correct, verify your response and make sure the json is correct.


        I want to generate a landing page for this usecase:
        `,

        `${app_context}`,

        past_context,
        parser_layout
    )
}

export const generateCopy = async (html_content: any, context_data: string, past_context: (HumanMessage & AIMessage)[] = [])=>{
    return await invoke(
        `
        You are an expert in html, css, tailwinf and copywriting. You will receive an an object containing a description of the app, of each component and extracted text from these components to rewrite

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
        parser_copy
    )
}


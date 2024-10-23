import { StateAnnotation } from "@/lib/types/agents";
import { stepGenerator } from "./base";
import { GENERATE_PAGE_SECTIONS_PROMPT2, GENERATE_SITEMAP_PROMPT } from "@/lib/ai/prompts";

export const projectDescriptionAgent = (state: typeof StateAnnotation.State) => stepGenerator(`
You are an expert software architect.

Parse the following project description and extract the following information:
- Project Name
- Short Description
- Key Features (as a list)
- Target Audience
- Industry
- Requirements (as a list)

Your output should be a **valid JSON object** with the specified fields.

Project Description:

`, state)

export const sitemapGeneratorAgent = (state: typeof StateAnnotation.State) => stepGenerator(`
    You are an expert software architect. Your objective is to create a website sitemap based on a project description.

    ${GENERATE_SITEMAP_PROMPT}

    Here is the website specification:
    
`, state)

export const pageLayoutPlannerAgent = (state: typeof StateAnnotation.State) => stepGenerator(`
    You are an expert in layout design and website page creation.

    For each page in the following sitemap, determine the types of sections needed to create a complete page layout.

    Your output should be a **valid JSON object** where each key is a page path, and the value is an object with 'pageTitle' and 'sections' (an array of section types in order).

    ${GENERATE_PAGE_SECTIONS_PROMPT2}

    Do not include any additional text.

    Sitemap:
    
`, state)

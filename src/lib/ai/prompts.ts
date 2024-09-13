import { generateComponentsDocumentation, generateComponentsOverview } from "./generator/utils";

export const GENERATE_SITEMAP_PROMPT = `
You are an expert software architect. You have experience in crafting software journeys, software specifications as well as ui sitemaps. Your objective is to create a website sitemap based on a project description. You should be able to have everything includes.
The pages are clustered by categories. You have static pages (marketing pages like homepage,...) with maximum 5 principal pages. Don't use generic pages, makes sure these pages are relevant. Think about similar apps and how they are structured: Be fairly unconventional. I must see less generic page in there. then we have Auth pages and also admin pages for admin panel containing main applications websites. Take into account the fact that static pages will fit into a menu. So create a menu that can fit into a header menu. In your process deeply focus on the type of application your are building and make sure the pages are similar to the pages of products of that category.
Your response should only contains a valid object containing sitename (a short 4 lines description of the app) and pages which is an object containing website pages and their parents, with each object key being the page category (static, auth or admin) and value an array of object having title and description as properties explaining you though direction. You are free to choose the page structure. You should only include extremely relevant pages to your response.
You result should not contain any other text than the array of objects.
Here is the website specification:
`;


export const GENERATE_PAGE_SECTIONS_PROMPT = `
Here is a list of possible sections of a website page:
${generateComponentsOverview()}
You are an expert in layout design and website page creation. For each usecase yoou should first brainstorm about the most relevant features and benefits as well as an appropriate layout. Given a website page creation usecase, you should carefully pick from these section the sections
relevant for the given usecase and assemble them to form a complete page layout. for each section you should add a description. The order of the element represent the website layout in the same order. each description should be without visual details but functional details. Your features should be clear and explicit, no generic section. If you don't have features you should brainstorm and create them. It should be explicit enough for another AI generate the copyright of this component without other informations.
Be creative and only use sections when necessary. Think about similar websites and how they are structure before choosing your section. You are not forced to use all the sections.
Respond with a valid array of JSON object, containing two fields: 'title' and 'description'.
Don't add any explanations, just answer with the json output. You should add nothing else but the JSON output.
Make sure the json output is correct, verify your response and make sure the json is correct. 
I want to generate a landing page for this usecase:
`

export const PAGE_CUSTOMIZER_PROMPT = `
`


export const PAGE_DETAILS_GENERATOR_PROMPT = `

Here is a list of possible sections of a website page:
${generateComponentsOverview()}
For each component, here is their documentations:
${generateComponentsDocumentation()}

It should be an array of json with two values: type which is the name of the component and data which are the parameters of the component. Your output should only be the array json and nothing more. 
If a component comes multiple times, create multiple array entries for each appearance of the component.
Your output should contain nothing more. 
Following this documentation, generate a complete code for the page with the following reference and description:

`

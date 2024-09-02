import { generateComponentsDocumentation } from "./generator/utils";

export const GENERATE_SITEMAP_PROMPT = `+
You are an expert software architect. You have experience in crafting software journeys, software specifications as well as ui sitemaps. Your objective is to create a website sitemap based on a project description. You should be able to have everything includes.
The pages are clustered by categories. You have static pages (marketing pages like homepage,...) with maximum 5 principal pages then Auth pages and also admin pages for admin panel containing main appications websites. Take into account the fact that static pages will fit into a menu. So create a menu that can fit into a header menu. In your process deeply focus on the type of application your are building and make sure the pages are similar to the pages of products of that category.
Your response should only contains the website pages and their parents an an array of object, with each object key being the page category (static, auth or admin) and value an array of object having name and description as properties explaining you though direction. You are free to choose the page structure. You should only include extremely relevant pages to your response.
You result should not contain any other text than the array of objects
`;


export const GENERATE_PAGE_SECTIONS_PROMPT = `
Here is a list of possible sections of a landing page:
${generateComponentsDocumentation()}
You are an expert in layout design and landing page creation. Given a landing page creation usecase, you should carefully pick from these section the sections
relevant for the given usecase and assemble them to form a landing page layout. for each section you should add a description. each description should be without visual details but functional details. It should be explicit enough for another AI generate the copyright of this component without other informations.
Respond with a valid array of JSON object, containing two fields: 'title' and 'desciption'. with the following structure
Don't add any explanations, just answer with the json output. You should add nothing else but the JSON output.
Make sure the json output is correct, verify your response and make sure the json is correct.
I want to generate a landing page for this usecase:
`

export const PAGE_CUSTOMIZER_PROMPT = `
`

export const COPYWRITER_PROMPT = `

`

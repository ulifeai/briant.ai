import { generateComponentsDocumentation, generateComponentsOverview } from "./prompt/utils";

export const GENERATE_SITEMAP_PROMPT = `
You are an expert software architect. You have experience in crafting software journeys, software specifications as well as ui sitemaps. Your objective is to create a website sitemap based on a project description. You should be able to have everything includes.
The pages are clustered by categories. You have static pages (marketing pages like homepage,...) with maximum 5 principal pages. Don't use generic pages, makes sure these pages are relevant. Think about similar apps and how they are structured: Be fairly unconventional. I must see less generic page in there. then we have Auth pages and also admin pages for admin panel containing main applications websites. Take into account the fact that static pages will fit into a menu. So create a menu that can fit into a header menu. In your process deeply focus on the type of application your are building and make sure the pages are similar to the pages of products of that category.
Your response should only contains a valid object containing sitename (a short 3 words name for the app) and pages which is an object containing website pages and their parents, with each object key being the page category (static, auth or admin) and value an array of object having title, path (the url path of the page) and description (explaining you though direction and why you choosed to include this page and what it should represent). You are free to choose the page structure. You should only include extremely relevant pages to your response.
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


export const PAGE_DETAILS_GENERATOR_PROMPT = 
`
Below is a list of possible sections for a website page:
${generateComponentsOverview()}

Each component is documented in detail:
${generateComponentsDocumentation()}

Your task is to generate a JSON array where each element has two properties:

- **type**: The name of the component.
- **data**: The parameters of the component as specified in the documentation.

**Guidelines:**

- **Purposeful Design for Any Domain**: Understand the type of website being created (e.g., online shop, medical business landing page, technology blog) and tailor the content to suit the specific industry. Ensure that the selected components and their arrangement effectively communicate the purpose and meet the needs of the target audience.

- **Capture Domain Nuances**: Incorporate industry-specific terminology, features, and user expectations. For example, a medical business might focus on services offered, patient testimonials, and contact information, while an online shop would emphasize product showcases, shopping cart functionality, and special offers.

- **Enhance Content Specificity**: Provide compelling and specific content that highlights the unique selling points of the business or service. Use persuasive, benefit-oriented language to engage the user and address their needs and pain points.

- **Diverse and Complementary Component Versions**: Use different versions of components to add variety and visual interest. Select versions that complement each other and enhance the overall design consistency. For example, choose appropriate 'feature' component versions that best showcase the offerings of the business.

- **Logical User Journey**: Arrange components in a logical order that guides the user through the website smoothly. Start with a strong header, introduce key features or services, build credibility with testimonials or case studies, present pricing or service details, and end with a compelling call-to-action.

- **Introduce Additional Depth**: Consider adding components like 'logo' for social proof (displaying partner or client logos), 'blog' for sharing insights and updates, or a 'contact' section for support information to provide more depth and engagement opportunities.

- **Avoid Repetition**: Ensure that each component and its content are unique and add value. Do not repeat the same component or version unless it serves a distinct purpose.

- **Rich and Detailed Content**: Provide meaningful content for each section. For sections without images, include at least **five sentences**. For sections with images, include at least **three sentences**. Focus on how each feature or aspect benefits the user and solves their problems.

- **Customized Calls to Action**: Use action-oriented and specific language in buttons and CTAs to encourage user engagement (e.g., "Schedule an Appointment," "Shop Now," "Download Free eBook"). Ensure consistency in button styles and variants.

- **Meaningful Imagery and Alt Text**: Even though all image paths are 'placeholder-image.svg', provide meaningful and descriptive 'alt' texts that match the content and context of the images.

- **Visual Consistency and Accessibility**: Maintain a cohesive visual theme throughout the website. Ensure high contrast between text and background colors, use readable font sizes, and follow accessibility best practices, including providing alt text for all images.

- **User Engagement**: Include elements that encourage user interaction, such as newsletter sign-ups, contact forms, appointment scheduling, or interactive features relevant to the domain.

- **Output Requirements**:

  - **JSON Only**: Your final output should be the JSON array only, without any additional text or explanations.
  - **Complete Component Data**: Include all necessary data for each component as specified in the documentation.
  - **Unique Multiple Appearances**: If a component appears multiple times (e.g., multiple feature sections), ensure each instance has unique content and serves a specific purpose in the user journey.

Using the provided documentation, generate the complete code for the page, ensuring it adheres to the above guidelines and effectively showcases the capabilities and offerings of the website's domain.

`
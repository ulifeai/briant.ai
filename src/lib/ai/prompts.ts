import { generateComponentsDocumentation, generateComponentsOverview } from "./prompt/utils";

export const GENERATE_SITEMAP_PROMPT = `
Generate a detailed sitemap for a website, ensuring pages are realistic and similar to conventional websites while addressing the project requirements.

You are an expert software architect. You have experience in crafting software journeys, software specifications, as well as UI sitemaps. Your objective is to create a website sitemap based on a project description, with realistic and relevant pages that resemble typical websites.

The pages are to be grouped by categories:
- public pages : Pages users can see without being logged in(e.g., Homepage, About Us, Product Overview, Specific feature pages, job list, free try of a product and many others) with a maximum of 4 main pages that are relevant and not generic. These pages are not necessarily static they can still contains dynamic contains. Make them as common as pages in the same directions
- Authorization pages (such as Login, Signup) If needed.
- Authenticated pages for managing the main aspects of the website If needed. It is the sections of the website that are accessible when you logged in. Don't restrict yourself. This is the heart of many applications. As as many pages as necessary. Consider that CRUD are a single page.

**Guidelines for Realism:**
- Pages should be as close as possible to what you typically see on popular sites of a similar category.
- Avoid creating unusual or unconventional structures that are not seen frequently on standard websites.
- Ensure the pages created can fit comfortably into a navigational menu/header bar.
- Use reasoning to determine the relevance of each category and page and explain it before reaching a conclusion.

Your response should only contain a JSON object representing the website structure.

# Output Format

- The response should be a valid JSON object structured as follows:
  - **sitename**: A short, three-word name for the application.
  - **pages**: An object containing website pages, categorized as **public**, **auth**, or **authenticated**:
    - Each category (public, auth, authenticated) should be an array of page objects:
      - **title**: The name of the page.
      - **path**: The URL path for the page.
      - **description**: Explain your reasoning for including this page and what it represents, ensuring it aligns with the type of website specified.

# Notes

Focus on creating pages that:
- Align with popular, conventional website page structures.
- Ensure clarity in their purpose and fit well in common web navigation.
- Are formed based on your deep understanding of the type of application being built.
- Avoid unconventional or rarely-used page titles unless absolutely necessary.

Here is the website specification:
`;


export const GENERATE_PAGE_SECTIONS_PROMPT =
  //`Compose a detailed webpage layout using the specified sections provided below to create a well-structured, consistent, and logically flowing page.

  // - Each section has its own intended purpose. You must select and arrange the sections that best fit the overall industry, type, and intended use case of the page.
  // - Ensure that the sections contribute to a logical story flow, effective presentation, and a coherent layout for the website.

  // Use the following sections:
  // ${generateComponentsOverview()}

  // # Output Format

  // Respond with a JSON array of objects, where each object contains:
  // - **title**: The section's name (e.g. "navbar", "header", etc.).
  // - **description**: A full description of what each section should include, its purpose in the design flow, and how users should interact with it.

  // The JSON should be well-structured, properly formatted, consisting of multiple section entries, and tailored to logically fit a suitable webpage.

  // # Examples:

  // ### Example for an eCommerce homepage:

  // [
  //     {{
  //         "title": "navbar",
  //         "description": "The navigation bar provides links to the main pages including Home, Shop, About Us, and Contact Us. It helps users easily navigate through the website to find key information."
  // }},
  //     {{
  //         "title": "header",
  //         "description": "The above-the-fold section is a hero area that displays a large, attractive image with a compelling headline. It introduces the core value proposition and draws the user's attention to what makes the store unique."
  // }},
  //     {{
  //         "title": "banners",
  //         "description": "A small header banner for a simple, time-sensitive announcement such as a discount code or free shipping offer to encourage user engagement immediately."
  // }},
  //     {{
  //         "title": "feature",
  //         "description": "A showcase of notable products, highlighting specific features, benefits, or differentiators of these offerings that would attract the customer's interest."
  // }},
  //     {{
  //         "title": "feature",
  //         "description": "A showcase of notable products, highlighting specific features, benefits, or differentiators of these offerings that would attract the customer's interest."
  // }},
  //     {{
  //         "title": "testimonial",
  //         "description": "Customer testimonials that build trust by showcasing user experiences and satisfaction with the store's products."
  // }},
  //     {{
  //         "title": "cta",
  //         "description": "A visually attractive call-to-action button that encourages users to browse the latest products or take advantage of a limited-time deal."
  // }},
  //     {{
  //         "title": "pricing",
  //         "description": "A section that provides an overview of pricing tiers or plans if relevant to the type of items sold, giving transparency on costs for customers."
  // }},
  //     {{
  //         "title": "FAQSection",
  //         "description": "Addresses common questions potential buyers may have, such as shipping information, return policies, and payment options to reduce uncertainties."
  // }},
  //     {{
  //         "title": "footer",
  //         "description": "Contains additional navigation links, contact information, social media handles, and essential legal links like Privacy Policy and Terms of Service."
  // }}
  // ]

  // ### Notes
  // - **Customization**: Ensure that the sections you choose fit the context of the intended page (e.g., an About Us page might benefit more from "testimonial" than "pricing").
  // - **Flow**: The order of sections must create a logical and consistent sequence that guides users through the page effectively.`


`You are a skilled expert in layout design and website page creation. For each website page creation use case given, follow these specific steps to generate a logical, consistent page that aligns with common industry standards:

Clearly define the flow and layout to ensure consistent, industry-specific page creation that makes sense to end users. Make pages as long as possible im your limitations

# Steps

## Step 1: Analyze Use Case and Industry Standards
- Thoroughly analyze the specific use case you're provided.
- Identify the core features and expectations typical for this kind of page.
- Refer to similar sites from the same industry to understand common layout structures and essential page elements.

## Step 2: Define and Select Appropriate Sections
- Choose relevant sections from the provided list that align with user expectations for that specific type of page.
- Ensure the page structure makes sense for the industry. For example, professional industry pages like 'law firms’ would have a more formal structure with limited features or visuals, whereas a travel agency might prioritize visual appeal with engaging imagery.
- Avoid random content. Select each section with clear logic to fit the context.

## Step 3: Ensure Logical and Reliable Page Flow
- Arrange the selected elements in a logical, industry-recognized order.
- Use a standard page structure logic to produce consistent results (e.g., 'navbar', followed by 'header', 'feature 1', 'feature 2', 'feature 3', and 'footer').
- Ensure coherency throughout and avoid arbitrary shifts in layout. Confirm that each chosen section serves a user-friendly purpose.

## Step 4: Provide Detailed Titles and Descriptions for Each Section
- Generate detailed and descriptive content specific to the use case.
- Avoid generic descriptions; include functional details that adapt to the context (e.g., what type of testimonials would best suit a law firm vs. a wellness center).

# Output Format

Respond with a valid JSON array containing objects with the following fields:
- **title**: The section's name.
- **description**: A full description of its content and intended purpose for the page.

Ensure that:
- Only appropriate sections are used to logically fit the industry and use case.
- The JSON is correctly formatted with no additional text.

# Example Sections Available

${generateComponentsOverview()}

# Notes
- Always strive for consistency and reliability in the layout, ensuring that outlined patterns and elements reflect standards for that specific industry.
- If needed, elaborate beyond the provided sections in a way that still makes logical sense for enhancing page coherency. Avoid any form of randomness; rely on real-world page flow and structure.
- A feature section represent a single or maxiimum 2 couples features that can be splitted into features items. So if a page has 5 features it should have at least 3 feature sections for example.
- A complete landing page should have enough sections. For example a page with a hero header, a cta section, a feature section, a testimonial section and a footer should have at least 5 sections.
`


export const GENERATE_PAGE_SECTIONS_PROMPT2 = `
Here is a list of possible sections of a website page:
${generateComponentsOverview()}
You are an expert in layout design and website page creation. For each usecase yoou should first brainstorm about the most relevant features and benefits as well as an appropriate layout. Given a website page creation usecase, you should carefully pick from these section the sections
relevant for the given usecase and assemble them to form a complete page layout. for each section you should add a description. The order of the element represent the website layout in the same order. each description should be without visual details but functional details. Your features should be clear and explicit, no generic section. If you don't have features you should brainstorm and create them. It should be explicit enough for another AI generate the copyright of this component without other informations.
Be creative and only use sections when necessary. Think about similar websites and how they are structure before choosing your section. You are not forced to use all the sections.
For each page Respond with a valid array of JSON object, containing two fields: 'title' and 'description'.
Don't add any explanations, just answer with the json output. You should add nothing else but the JSON output.
Make sure the json output is correct, verify your response and make sure the json is correct. 
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

- **Image sources**: all the images source should be a preloaded image with names 1 to 7 with the extension .jpg, like 1.jpg, ... Use nothing else as image source.

- **Meaningful Imagery and Alt Text**: Even though all image paths are one of the chosen images between 1 to 7 with the extension .jpg, provide meaningful and descriptive 'alt' texts that match the content and context of the images.

- **Visual Consistency and Accessibility**: Maintain a cohesive visual theme throughout the website. Ensure high contrast between text and background colors, use readable font sizes, and follow accessibility best practices, including providing alt text for all images.

- **User Engagement**: Include elements that encourage user interaction, such as newsletter sign-ups, contact forms, appointment scheduling, or interactive features relevant to the domain.

- **Output Requirements**:

  - **JSON Only**: Your final output should be the JSON array only, without any additional text or explanations.
  - **Complete Component Data**: Include all necessary data for each component as specified in the documentation.
  - **Unique Multiple Appearances**: If a component appears multiple times (e.g., multiple feature sections), ensure each instance has unique content and serves a specific purpose in the user journey.

- **Component Versions**: It happens  lot of times that you generated the exact same page on multiple different call. Fix that and use the range of versions that you have from components. Don't always use version 1 or 2 for everything when you have much more choices.

Using the provided documentation, generate the complete code for the page, ensuring it adheres to the above guidelines and effectively showcases the capabilities and offerings of the website's domain.

`
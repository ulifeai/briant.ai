import { ComponentAgent } from ".";

// BlogHeader Component
export const BLOGHEADER_PROMPT = `
Your task is to generate a JSON object for a **BlogHeader** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const BLOGHEADER_DOCUMENTATION = `
### BlogHeader Component Documentation

- **type**: "blogHeader"
- **data**: An object containing:
  - **version**: Number (1-2), determines the layout.
  - **tagline**: Optional string, tagline text.
  - **heading**: Optional string, main heading text.
  - **description**: Optional string, description text.
  - **contentCardHeader**: Optional object, content for the card header.
  - **blogPost**: Optional object, featured blog post.
  - **listCardleft**: Optional array of blog post objects displayed on the left.
  - **titleBlogPost**: Optional string, title for the featured post section.
  - **blogPosts**: Optional array of main blog post objects.
  - **titleBlogPosts**: Optional string, title for the main posts section.
  - **buttons**: Optional array of button objects.
    - **title**: String.
    - **variant**: String.
    - **size**: String.
`;

export async function BlogHeaderAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "blogHeader",
        promptTemplate: BLOGHEADER_PROMPT,
        documentation: BLOGHEADER_DOCUMENTATION,
    });
}

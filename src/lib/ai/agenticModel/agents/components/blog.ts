import { ComponentAgent } from ".";

// Blog Component
export const BLOG_PROMPT = `
Your task is to generate a JSON object for a **Blog** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const BLOG_DOCUMENTATION = `
### Blog Component Documentation

- **type**: "blog"
- **data**: An object containing:
  - **version**: Number (1-3), determines the layout.
  - **heading**: String, main heading text.
  - **tagline**: String, tagline above the heading.
  - **description**: String, description below the heading.
  - **blogPosts**: Array of blog post objects.
    - **title**: String, blog post title.
    - **excerpt**: String, blog post excerpt.
    - **image**: String, blog post image URL.
  - **linkBlog**: Object containing:
    - **href**: String, URL.
    - **title**: String, link text.
`;

export async function BlogAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "blog",
        promptTemplate: BLOG_PROMPT,
        documentation: BLOG_DOCUMENTATION,
    });
}

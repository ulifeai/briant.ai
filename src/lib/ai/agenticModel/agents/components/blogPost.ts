import { ComponentAgent } from ".";

// BlogPost Component
export const BLOGPOST_PROMPT = `
Your task is to generate a JSON object for a **BlogPost** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const BLOGPOST_DOCUMENTATION = `
### BlogPost Component Documentation

- **type**: "blogPost"
- **data**: An object containing:
  - **version**: Number (1-5), determines the layout.
  - **heading**: String, blog post heading.
  - **By**: Optional string, author indication.
  - **blog**: Optional object containing:
    - **href**: String, blog URL.
    - **text**: String, blog link text.
  - **category**: Object containing:
    - **href**: String, category URL.
    - **text**: String, category link text.
  - **indicationPost**: Optional object containing:
    - **href**: String, previous post URL.
    - **text**: String, previous post text.
  - **avatar**: Object containing:
    - **src**: String, avatar image URL.
    - **alt**: String, avatar alt text.
  - **socialMedias**: Array of social media objects.
    - **href**: String, social media URL.
    - **logo**: JSX.Element, social media icon.
  - **image**: Object containing:
    - **src**: String, main image URL.
    - **alt**: String, image alt text.
  - **fullName**: String, author's full name.
  - **date**: String, publication date.
  - **readTime**: String, estimated read time.
  - **footer**: Optional object containing:
    - **indicationPublished**: String, published text.
    - **date**: String, publication date in footer.
    - **indicationName**: String, author's name indication.
    - **fullName**: String, author's full name in footer.
`;

export async function BlogPostAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "blogPost",
        promptTemplate: BLOGPOST_PROMPT,
        documentation: BLOGPOST_DOCUMENTATION,
    });
}

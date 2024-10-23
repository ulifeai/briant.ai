import { ComponentAgent } from ".";

export const HEADER_PROMPT = `
Your task is to generate a JSON object for a **Header** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const HEADER_DOCUMENTATION = `
### Header Component Documentation

- **type**: "header"
- **data**: An object containing:
  - **version**: Number (1-44), determines the layout.
  - **tag**: Optional string.
  - **title**: String, main heading.
  - **description**: String, subheading or description.
  - **buttons**: Array of button objects.
    - **title**: String.
    - **variant**: String ("default", "secondary", etc.).
    - **size**: String ("default", "sm", etc.).
  - **images**: Optional array of image objects.
    - **src**: String (use '/img/placeholder-image.svg').
    - **alt**: String.
  - **form**: Optional object for forms.
    - **description**: String.
    - **placeholder**: String.
`;


// HeaderAgent.ts



export async function HeaderAgent(input: {
  projectDescription: string;
  pageName: string;
}) {
  return ComponentAgent({
    projectDescription: input.projectDescription,
    pageName: input.pageName,
    componentType: "header",
    promptTemplate: HEADER_PROMPT,
    documentation: HEADER_DOCUMENTATION,
  });
}

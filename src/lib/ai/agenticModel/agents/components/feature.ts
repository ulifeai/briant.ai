import { ComponentAgent } from ".";

// Feature Component
export const FEATURE_PROMPT = `
Your task is to generate a JSON object for a **Feature** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const FEATURE_DOCUMENTATION = `
### Feature Component Documentation

- **type**: "feature"
- **data**: An object containing:
  - **version**: Number (1-7), determines the layout.
  - **title**: String, main heading.
  - **description**: String, subheading or description.
  - **features**: Array of feature items.
    - **icon**: Optional string (icon name).
    - **title**: String.
    - **description**: String.
  - **image**: Optional image object.
    - **src**: String (use '/img/placeholder-image.svg').
    - **alt**: String.
  - **buttons**: Optional array of button objects.
    - **title**: String.
    - **variant**: String.
    - **size**: String.
`;

// Similarly, you can add prompts and documentation for other components like CTA, Footer, Navbar, etc.


export async function FeatureAgent(input: {
  projectDescription: string;
  pageName: string;
}) {
  return ComponentAgent({
    projectDescription: input.projectDescription,
    pageName: input.pageName,
    componentType: "feature",
    promptTemplate: FEATURE_PROMPT,
    documentation: FEATURE_DOCUMENTATION,
  });
}

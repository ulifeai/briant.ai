import { ComponentAgent } from ".";

// CTA Component
export const CTA_PROMPT = `
Your task is to generate a JSON object for a **CTA** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const CTA_DOCUMENTATION = `
### CTA Component Documentation

- **type**: "cta"
- **data**: An object containing:
  - **version**: Number, determines the layout.
  - **tag**: Optional string, tag text.
  - **title**: Optional string, CTA title.
  - **description**: Optional string, CTA description.
  - **buttons**: Array of button objects.
    - **title**: String.
    - **variant**: String.
    - **size**: String.
  - **btnNameInput**: Optional string, form button text.
  - **inputNamePlaceholder**: Optional string, input placeholder text.
  - **btnType**: Optional string, button layout type.
  - **colorText**: Optional string, text color ('white' or 'black').
  - **image**: Optional object containing:
    - **image**: Optional string, main image URL.
    - **imageOverlay**: Optional string, overlay image URL.
    - **imageOverlayVideo**: Optional string, overlay video image URL.
    - **imageBgOverlay**: Optional string, background overlay image URL.
    - **alt**: Optional string, image alt text.
`;

export async function CTA_Agent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "cta",
        promptTemplate: CTA_PROMPT,
        documentation: CTA_DOCUMENTATION,
    });
}

import { ComponentAgent } from ".";

// Navbar Component
export const NAVBAR_PROMPT = `
Your task is to generate a JSON object for a **Navbar** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const NAVBAR_DOCUMENTATION = `
### Navbar Component Documentation

- **type**: "navbar"
- **data**: An object containing:
  - **version**: Number (1-8), determines style and layout.
  - **logo**: String, URL to navigate to when the logo is clicked.
  - **navItems**: Array of navigation link objects.
    - **title**: String, title of the navigation link.
    - **url**: String, URL the link points to.
  - **buttons**: Array of button objects.
    - **title**: String.
    - **variant**: String.
    - **size**: String.
`;

export async function NavbarAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "navbar",
        promptTemplate: NAVBAR_PROMPT,
        documentation: NAVBAR_DOCUMENTATION,
    });
}

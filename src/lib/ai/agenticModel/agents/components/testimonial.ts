import { ComponentAgent } from ".";

// Testimonial Component
export const TESTIMONIAL_PROMPT = `
Your task is to generate a JSON object for a **Testimonial** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const TESTIMONIAL_DOCUMENTATION = `
### Testimonial Component Documentation

- **type**: "testimonial"
- **data**: An object containing:
  - **version**: Number, determines style and layout.
  - **title**: Optional string, main title of the testimonial section.
  - **description**: Optional string, description text below the title.
  - **testimonials**: Array of testimonial objects.
    - **image**: Optional object containing:
      - **src**: String, company logo image URL.
      - **alt**: String, alt text for the image.
    - **quote**: String, testimonial quote text.
    - **avatar**: Optional object containing:
      - **src**: String, person's avatar image URL.
      - **alt**: String, alt text for the avatar.
    - **name**: String, name of the person.
    - **position**: String, position or job title.
    - **companyName**: String, company name.
    - **location**: Optional string, location (used in Version 1).
    - **button**: Optional object containing:
      - **title**: String.
      - **variant**: String.
      - **size**: String.
`;

export async function TestimonialAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "testimonial",
        promptTemplate: TESTIMONIAL_PROMPT,
        documentation: TESTIMONIAL_DOCUMENTATION,
    });
}

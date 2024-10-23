import { ComponentAgent } from ".";

// Pricing Component
export const PRICING_PROMPT = `
Your task is to generate a JSON object for a **Pricing** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const PRICING_DOCUMENTATION = `
### Pricing Component Documentation

- **type**: "pricing"
- **data**: An object containing:
  - **version**: Number, determines style and layout.
  - **title**: String, main title of the pricing section.
  - **subtitle**: String, subtitle or description for the pricing section.
  - **plans**: Array of pricing plan objects.
    - **name**: String, name of the pricing plan.
    - **description**: String, description or summary of the plan.
    - **monthlyPrice**: Number, monthly pricing value.
    - **yearlyPrice**: Number, yearly pricing value.
    - **features**: Array of feature objects.
      - **text**: String, description of the feature.
`;

export async function PricingAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "pricing",
        promptTemplate: PRICING_PROMPT,
        documentation: PRICING_DOCUMENTATION,
    });
}

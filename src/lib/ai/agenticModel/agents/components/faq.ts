import { ComponentAgent } from ".";

// FAQSection Component
export const FAQSECTION_PROMPT = `
Your task is to generate a JSON object for a **FAQSection** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const FAQSECTION_DOCUMENTATION = `
### FAQSection Component Documentation

- **type**: "faqSection"
- **data**: An object containing:
  - **version**: Number (1-14), determines the layout.
  - **title**: String, main title of the FAQ block.
  - **description**: String, brief description or introduction text.
  - **cta_title**: String, call-to-action title.
  - **cta_description**: String, call-to-action description.
  - **questions**: Array of question objects.
    - **title**: String, question title.
    - **answer**: String, answer to the question.
  - **button**: Optional button object.
    - **title**: String.
    - **variant**: String.
    - **size**: String.
`;

export async function FAQSectionAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "faqSection",
        promptTemplate: FAQSECTION_PROMPT,
        documentation: FAQSECTION_DOCUMENTATION,
    });
}

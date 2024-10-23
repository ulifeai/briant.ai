import { ComponentAgent } from ".";

// Footer Component
export const FOOTER_PROMPT = `
Your task is to generate a JSON object for a **Footer** component.

Use the following documentation to understand the component's structure.

Generate only the JSON output without additional explanations.

Project Description:
{projectDescription}

Page Name:
{pageName}
`;

export const FOOTER_DOCUMENTATION = `
### Footer Component Documentation

- **type**: "footer"
- **data**: An object containing:
  - **version**: Number (1), determines layout and structure.
  - **variant**: String, style variant of the footer (e.g., 'subscribe').
  - **logo**: Object containing:
    - **image**: String, source URL of the logo image.
    - **alt**: String, alt text for the logo image.
  - **navLinks**: Array of navigation link objects.
    - **label**: String, text of the navigation link.
    - **href**: String, URL the link points to.
  - **subscribeText**: Optional string, text prompting users to subscribe.
  - **subscribeButtonText**: Optional string, text displayed on the subscription button.
  - **subscribePrivacyText**: Optional string, privacy notice text regarding subscriptions.
  - **socialLinks**: Optional array of social media link objects.
    - **platform**: String, social media platform (e.g., 'facebook', 'twitter').
    - **href**: String, URL of the social media profile.
  - **legalLinks**: Array of legal-related link objects.
    - **label**: String, text of the legal link.
    - **href**: String, URL the link points to.
  - **copyrightText**: String, text displayed at the bottom of the footer.
`;

export async function FooterAgent(input: {
    projectDescription: string;
    pageName: string;
}) {
    return ComponentAgent({
        projectDescription: input.projectDescription,
        pageName: input.pageName,
        componentType: "footer",
        promptTemplate: FOOTER_PROMPT,
        documentation: FOOTER_DOCUMENTATION,
    });
}

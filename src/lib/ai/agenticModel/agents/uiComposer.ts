import { StateAnnotation } from "@/lib/types/agents";

export async function UIComposerAgent(state: typeof StateAnnotation.State) {
    const pageLayouts: any = state.messages[state.messages.length - 1];
    const pages: { [pagePath: string]: { components: any[] } } = {};
    console.log(pageLayouts, pages);
    return { messages: pageLayouts, projectDescription: state.projectDescription };
    for (const pagePath in pageLayouts) {
        const pageLayout = pageLayouts[pagePath];
        const components: any[] = [];

        // Iterate over each section type in the page layout
        for (const sectionType of pageLayout.sections) {
            // Dynamically import and invoke the appropriate agent based on sectionType
            let componentAgent;

            switch (sectionType.toLowerCase()) {
                case "header":
                case "section":
                    componentAgent = await import("./components/header");
                    components.push(
                        await componentAgent.HeaderAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "feature":
                    componentAgent = await import("./components/feature");
                    components.push(
                        await componentAgent.FeatureAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "faqsection":
                case "faq_section":
                case "faq-section":
                    componentAgent = await import("./components/faq");
                    components.push(
                        await componentAgent.FAQSectionAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "blog":
                    componentAgent = await import("./components/blog");
                    components.push(
                        await componentAgent.BlogAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "blogheader":
                case "blog_header":
                case "blog-header":
                    componentAgent = await import("./components/blogHeader");
                    components.push(
                        await componentAgent.BlogHeaderAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "blogpost":
                case "blog_post":
                case "blog-post":
                    componentAgent = await import("./components/blogPost");
                    components.push(
                        await componentAgent.BlogPostAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "cta":
                    componentAgent = await import("./components/cta");
                    components.push(
                        await componentAgent.CTA_Agent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "navbar":
                    componentAgent = await import("./components/navbar");
                    components.push(
                        await componentAgent.NavbarAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "pricing":
                    componentAgent = await import("./components/pricing");
                    components.push(
                        await componentAgent.PricingAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "testimonial":
                    componentAgent = await import("./components/testimonial");
                    components.push(
                        await componentAgent.TestimonialAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "footer":
                    componentAgent = await import("./components/footer");
                    components.push(
                        await componentAgent.FooterAgent({
                            projectDescription: state.projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                default:
                    console.warn(`No agent found for section type: ${sectionType}`);
                    break;
            }
        }

        // Assign the assembled components to the corresponding page path
        pages[pagePath] = {
            components,
        };
    }

    // Return the assembled pages with components and project description
    return { messages: pages, projectDescription: state.projectDescription };
}

export const generateUIComponents = async (pageLayouts: any, projectDescription: string) => {
    for (const pagePath in pageLayouts) {
        const pageLayout = pageLayouts[pagePath];
        const components: any[] = [];

        // Iterate over each section type in the page layout
        for (const sectionType of pageLayout.sections) {
            // Dynamically import and invoke the appropriate agent based on sectionType
            let componentAgent;

            console.log(sectionType)

            switch (sectionType.title) {
                case "header":
                case "section":
                    componentAgent = await import("./components/header");
                    components.push(
                        await componentAgent.HeaderAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "feature":
                    componentAgent = await import("./components/feature");
                    components.push(
                        await componentAgent.FeatureAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "faqsection":
                case "faq_section":
                case "faq-section":
                    componentAgent = await import("./components/faq");
                    components.push(
                        await componentAgent.FAQSectionAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "blog":
                    componentAgent = await import("./components/blog");
                    components.push(
                        await componentAgent.BlogAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "blogheader":
                case "blog_header":
                case "blog-header":
                    componentAgent = await import("./components/blogHeader");
                    components.push(
                        await componentAgent.BlogHeaderAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "blogpost":
                case "blog_post":
                case "blog-post":
                    componentAgent = await import("./components/blogPost");
                    components.push(
                        await componentAgent.BlogPostAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "cta":
                    componentAgent = await import("./components/cta");
                    components.push(
                        await componentAgent.CTA_Agent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "navbar":
                    componentAgent = await import("./components/navbar");
                    components.push(
                        await componentAgent.NavbarAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "pricing":
                    componentAgent = await import("./components/pricing");
                    components.push(
                        await componentAgent.PricingAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "testimonial":
                    componentAgent = await import("./components/testimonial");
                    components.push(
                        await componentAgent.TestimonialAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                case "footer":
                    componentAgent = await import("./components/footer");
                    components.push(
                        await componentAgent.FooterAgent({
                            projectDescription: projectDescription,
                            pageName: pageLayout.pageTitle,
                        })
                    );
                    break;

                default:
                    console.warn(`No agent found for section type: ${sectionType}`);
                    break;
            }
        }

        // Assign the assembled components to the corresponding page path
        pages[pagePath] = {
            components,
        };
    }
}

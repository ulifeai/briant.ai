
import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";
import { pageLayoutPlannerAgent, projectDescriptionAgent, sitemapGeneratorAgent } from "./agents/steps";
import { UIComposerAgent } from "./agents/uiComposer";


const workflow = new StateGraph(MessagesAnnotation)
    .addNode("projectDescriptionAgent", projectDescriptionAgent)
    .addNode("sitemapGeneratorAgent", sitemapGeneratorAgent)
    .addNode("pageLayoutPlannerAgent", pageLayoutPlannerAgent)
    .addNode("UIComposer", UIComposerAgent)

    .addEdge("__start__", "projectDescriptionAgent")
    .addEdge("projectDescriptionAgent", "sitemapGeneratorAgent")
    .addEdge("sitemapGeneratorAgent", "pageLayoutPlannerAgent")
    .addEdge("pageLayoutPlannerAgent", "UIComposer")
    .addEdge("UIComposer", "__end__");

const app = workflow.compile();

export default app;
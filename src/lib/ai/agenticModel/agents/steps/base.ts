import { StateAnnotation } from "@/lib/types/agents";
import { HumanMessage } from "@langchain/core/messages";
import { Model } from "../../../model";

export async function stepGenerator(stepPrompt: string, state: typeof StateAnnotation.State) {
    const lastMessage = state.messages[state.messages.length - 1];
    const previous = lastMessage.content;

    const prompt = `
        ${stepPrompt}
        """
        ${previous}
        """
    `;

    const response = await Model.invoke([new HumanMessage(prompt)]);

    return { messages: [...state.messages, response], projectDescription: state.projectDescription };

}


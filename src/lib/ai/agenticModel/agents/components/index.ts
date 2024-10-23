// ComponentAgent.ts

import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import localModel from "./_model";

interface Component {
  type: string;
  data: object;
}

// Validator function
function validateComponent(data: any, componentType: string): data is Component {
  return (
    data.type === componentType &&
    typeof data.data === "object" &&
    data.data !== null
  );
}

// Agent function
export async function ComponentAgent(input: {
  projectDescription: string;
  pageName: string;
  componentType: string;
  promptTemplate: string;
  documentation: string;
}): Promise<Component> {
  let attempts = 0;
  const maxAttempts = 3;
  let lastError = "";

  while (attempts < maxAttempts) {
    let prompt = input.promptTemplate
      .replace("{projectDescription}", input.projectDescription)
      .replace("{pageName}", input.pageName);

    prompt += "\n" + input.documentation;

    if (attempts > 0) {
      prompt += `\nThe previous output was invalid due to the following error: ${lastError}. Please correct your output and ensure it is a valid JSON object as per the requirements.`;
    }

    const response = await localModel.invoke([new HumanMessage(prompt)]);
    const assistantResponse = response.toString().trim();

    // Attempt to parse and validate the JSON output
    try {
      const parsedOutput = JSON.parse(assistantResponse);
      if (validateComponent(parsedOutput, input.componentType)) {
        return parsedOutput;
      } else {
        throw new Error(`Validation failed for ${input.componentType} component.`);
      }
    } catch (error: any) {
      lastError = error.message;
      attempts++;
      console.error(`Attempt ${attempts} failed for ${input.componentType}: ${lastError}`);
    }
  }

  throw new Error(`Failed to obtain valid ${input.componentType} component after ${maxAttempts} attempts.`);
}



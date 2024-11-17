import { ChatOpenAI, AzureChatOpenAI } from "@langchain/openai";

export const Model = new AzureChatOpenAI({
  model: "gpt-4o",
  temperature: 1,
});

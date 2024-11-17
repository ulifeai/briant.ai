import { ChatOpenAI } from "@langchain/openai";

export const Model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 1,
});

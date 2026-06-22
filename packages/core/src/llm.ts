import OpenAI from "openai";

let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY ?? "dummy",
      baseURL: process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1",
    });
  }
  return client;
}

export type LLMMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function callModel(messages: LLMMessage[]): Promise<string> {
  const c = getClient();
  const model = process.env.MODEL_NAME ?? "gpt-4o";

  const response = await c.chat.completions.create({
    model,
    messages,
    temperature: 0.7,
    response_format: { type: "json_object" },
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("Empty response from model");
  }

  return content;
}

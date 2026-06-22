import type { RewriteInput, Scenario } from "./types";

const SAFETY_SYSTEM = `You are SayBetter, a communication rewriting assistant.
Your goal is to help users express their真实意图 (real intent) more clearly, respectfully, and effectively.
You MUST NOT help users manipulate, deceive, threaten, humiliate, PUA, or emotionally blackmail others.
If the user's original message is aggressive, preserve the legitimate concern but rewrite it into a respectful expression.
Always output valid JSON. Never output anything outside the JSON structure.`;

export function buildRewritePrompt(input: RewriteInput, scenario?: Scenario): { system: string; user: string } {
  let systemPrompt = SAFETY_SYSTEM;

  if (scenario) {
    systemPrompt += `\n\nCurrent scenario: ${scenario.name} — ${scenario.description}`;
    systemPrompt += `\n\nExpression principles:`;
    for (const p of scenario.principles) {
      systemPrompt += `\n- ${p}`;
    }
    systemPrompt += `\n\nAvoid:`;
    for (const a of scenario.avoid) {
      systemPrompt += `\n- ${a}`;
    }
  }

  systemPrompt += `\n\nOutput JSON format:
{
  "detected_intent": "string — what the user is trying to achieve",
  "risk_level": "low" | "medium" | "high",
  "rewrites": [
    { "label": "string — tone label", "text": "string — rewritten message", "best_for": "string — when to use this version" }
  ],
  "not_recommended": ["string — things to avoid saying"],
  "why": "string — why the rewrites are better",
  "recommended_index": 0
}

Generate 3-5 rewrites with different tones. Include a "not recommended" section and explain why.`;

  const userPrompt = `Original message: ${input.originalText}
${input.relationship ? `Relationship: ${input.relationship}` : ""}
${input.goal ? `Goal: ${input.goal}` : ""}
${input.tone ? `Desired tone: ${input.tone}` : ""}`;

  return { system: systemPrompt, user: userPrompt };
}

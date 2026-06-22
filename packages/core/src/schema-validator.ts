import type { RewriteResult } from "./types";

export function validateRewriteResult(raw: unknown): RewriteResult {
  if (!raw || typeof raw !== "object") {
    throw new Error("Invalid response: expected an object");
  }

  const obj = raw as Record<string, unknown>;

  const rewrites = Array.isArray(obj.rewrites) ? obj.rewrites : [];
  if (rewrites.length === 0) {
    throw new Error("Invalid response: no rewrites provided");
  }

  for (const r of rewrites) {
    if (!r || typeof r !== "object") throw new Error("Invalid rewrite entry");
    const entry = r as Record<string, unknown>;
    if (typeof entry.label !== "string" || typeof entry.text !== "string" || typeof entry.best_for !== "string") {
      throw new Error("Invalid rewrite entry: missing label, text, or best_for");
    }
  }

  const riskLevel = obj.risk_level;
  if (riskLevel !== "low" && riskLevel !== "medium" && riskLevel !== "high") {
    throw new Error("Invalid risk_level");
  }

  const notRecommended = Array.isArray(obj.not_recommended) ? obj.not_recommended.filter((x) => typeof x === "string") : [];

  return {
    detectedIntent: typeof obj.detected_intent === "string" ? obj.detected_intent : "",
    riskLevel,
    rewrites: rewrites.map((r) => {
      const entry = r as Record<string, string>;
      return { label: entry.label, text: entry.text, bestFor: entry.best_for };
    }),
    notRecommended,
    why: typeof obj.why === "string" ? obj.why : "",
    recommendedIndex: typeof obj.recommended_index === "number" ? obj.recommended_index : 0,
  };
}

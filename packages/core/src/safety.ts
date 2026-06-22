import type { RewriteInput } from "./types";

const UNSAFE_PATTERNS = [
  /操控|操纵|control\s+them|manipulate/i,
  /威胁|恐吓|threaten/i,
  /羞辱|侮辱|humiliate|insult/i,
  /报复|revenge|retaliate/i,
  /骚扰|stalk|harass/i,
  /骗|deceive|trick|scam/i,
  /情绪勒索|emotional\s+blackmail|guilt.?trip/i,
  /PUA/i,
  /冷暴力|silent\s+treatment/i,
];

export type SafetyCheckResult = {
  safe: boolean;
  reason?: string;
};

export function checkSafety(input: RewriteInput): SafetyCheckResult {
  const text = `${input.originalText} ${input.goal ?? ""}`;

  for (const pattern of UNSAFE_PATTERNS) {
    if (pattern.test(text)) {
      return {
        safe: false,
        reason: "This request appears to involve manipulation, harassment, or deception. SayBetter only helps with honest, respectful communication.",
      };
    }
  }

  return { safe: true };
}

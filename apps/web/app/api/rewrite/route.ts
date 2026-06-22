import { NextResponse } from "next/server";
import {
  checkSafety,
  loadScenario,
  buildRewritePrompt,
  callModel,
  validateRewriteResult,
  type RewriteInput,
} from "@saybetter/core";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const input = body.input as RewriteInput;

    if (!input?.originalText?.trim()) {
      return NextResponse.json({ success: false, error: "Please enter a message to rewrite." }, { status: 400 });
    }

    const safety = checkSafety(input);
    if (!safety.safe) {
      return NextResponse.json({ success: false, error: safety.reason }, { status: 400 });
    }

    const scenario = input.scenario ? loadScenario(input.scenario, input.language ?? "zh-CN") : undefined;
    const { system, user } = buildRewritePrompt(input, scenario);

    const raw = await callModel([
      { role: "system", content: system },
      { role: "user", content: user },
    ]);

    const parsed = JSON.parse(raw);
    const result = validateRewriteResult(parsed);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[rewrite]", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

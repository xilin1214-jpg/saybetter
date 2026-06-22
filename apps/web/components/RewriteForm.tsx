"use client";

import { useTranslation } from "@/lib/i18n";
import { useState } from "react";
import { ScenarioPicker } from "./ScenarioPicker";
import { ToneSelector } from "./ToneSelector";
import type { RewriteInput, RewriteResult } from "@saybetter/core";
import { ResultCard } from "./ResultCard";

const RELATIONSHIPS = ["friend", "colleague", "manager", "partner", "parent", "client", "stranger"];
const GOALS = ["decline", "remind", "apologize", "explain", "expressDissatisfaction", "makeRequest", "setBoundary"];

export function RewriteForm() {
  const { t } = useTranslation();
  const [originalText, setOriginalText] = useState("");
  const [relationship, setRelationship] = useState("");
  const [scenario, setScenario] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RewriteResult | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!originalText.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    const input: RewriteInput = {
      originalText: originalText.trim(),
      relationship: relationship || undefined,
      scenario: scenario || undefined,
      goal: goal || undefined,
      tone: tone || undefined,
    };

    try {
      const res = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const json = await res.json();

      if (!json.success) {
        setError(json.error ?? "Something went wrong");
      } else {
        setResult(json.data);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">{t("rewrite.originalLabel")}</label>
          <textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder={t("rewrite.originalPlaceholder")}
            rows={4}
            className="w-full rounded-card border border-border bg-surface-elevated px-5 py-4 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors"
          />
        </div>

        <ScenarioPicker value={scenario} onChange={setScenario} />

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">{t("rewrite.relationshipLabel")}</label>
          <div className="flex flex-wrap gap-2">
            {RELATIONSHIPS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRelationship(relationship === r ? "" : r)}
                className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                  relationship === r
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-border bg-surface-elevated text-ink-muted hover:border-ink-faint hover:text-ink"
                }`}
              >
                {t(`relationships.${r}`)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">{t("rewrite.goalLabel")}</label>
          <div className="flex flex-wrap gap-2">
            {GOALS.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGoal(goal === g ? "" : g)}
                className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                  goal === g
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-border bg-surface-elevated text-ink-muted hover:border-ink-faint hover:text-ink"
                }`}
              >
                {t(`goals.${g}`)}
              </button>
            ))}
          </div>
        </div>

        <ToneSelector value={tone} onChange={setTone} />

        <button
          type="submit"
          disabled={loading || !originalText.trim()}
          className="w-full rounded-card bg-accent py-4 text-base font-medium text-white transition-all hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100"
        >
          {loading ? t("rewrite.submitting") : t("rewrite.submit")}
        </button>
      </form>

      {error && (
        <div className="rounded-card border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && <ResultCard result={result} originalText={originalText} />}
    </div>
  );
}

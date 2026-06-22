"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import type { RewriteResult } from "@saybetter/core";

type Props = {
  result: RewriteResult;
  originalText: string;
};

export function ResultCard({ result, originalText }: Props) {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  async function copyText(text: string, index: number) {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-ink">{t("rewrite.resultTitle")}</h2>
        {result.riskLevel !== "low" && (
          <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
            {result.riskLevel} risk
          </span>
        )}
      </div>

      <div className="space-y-4">
        {result.rewrites.map((rewrite, i) => {
          const cardUrl = `/card?${new URLSearchParams({
            original: originalText,
            rewritten: rewrite.text,
            explanation: result.why,
          }).toString()}`;

          return (
            <div
              key={i}
              className={`rounded-card border bg-surface-elevated p-5 shadow-card transition-shadow hover:shadow-card-hover ${
                i === result.recommendedIndex ? "border-accent/40" : "border-border"
              }`}
            >
              {i === result.recommendedIndex && (
                <span className="mb-3 inline-block rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                  Recommended
                </span>
              )}
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">{rewrite.label}</span>
                <div className="flex gap-2">
                  <Link
                    href={cardUrl}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
                  >
                    {t("rewrite.shareCard")}
                  </Link>
                  <button
                    onClick={() => copyText(rewrite.text, i)}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
                  >
                    {copiedIndex === i ? t("rewrite.copied") : t("rewrite.copy")}
                  </button>
                </div>
              </div>
              <p className="text-ink leading-relaxed">{rewrite.text}</p>
              <p className="mt-3 text-xs text-ink-faint">{rewrite.bestFor}</p>
            </div>
          );
        })}
      </div>

      {result.notRecommended.length > 0 && (
        <div className="rounded-card border border-red-200 bg-red-50/50 p-5">
          <h3 className="mb-3 text-sm font-semibold text-red-700">{t("rewrite.notRecommended")}</h3>
          <ul className="space-y-2">
            {result.notRecommended.map((text, i) => (
              <li key={i} className="text-sm text-red-600 line-through decoration-red-300">
                "{text}"
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.why && (
        <div className="rounded-card border border-border bg-surface-muted p-5">
          <h3 className="mb-2 text-sm font-semibold text-ink">{t("rewrite.whyBetter")}</h3>
          <p className="text-sm text-ink-muted leading-relaxed">{result.why}</p>
        </div>
      )}
    </div>
  );
}

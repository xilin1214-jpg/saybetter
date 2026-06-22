"use client";

import { useTranslation } from "@/lib/i18n";

const TONES = ["gentle", "firm", "brief", "formal", "highEQ"];

type Props = {
  value: string;
  onChange: (tone: string) => void;
};

export function ToneSelector({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">{t("rewrite.toneLabel")}</label>
      <div className="flex flex-wrap gap-2">
        {TONES.map((tone) => (
          <button
            key={tone}
            type="button"
            onClick={() => onChange(value === tone ? "" : tone)}
            className={`rounded-lg border px-4 py-2 text-sm transition-all ${
              value === tone
                ? "border-accent bg-accent/10 text-accent font-medium"
                : "border-border bg-surface-elevated text-ink-muted hover:border-ink-faint hover:text-ink"
            }`}
          >
            {t(`tones.${tone}`)}
          </button>
        ))}
      </div>
    </div>
  );
}

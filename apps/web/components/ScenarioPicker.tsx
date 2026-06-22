"use client";

import { useTranslation } from "@/lib/i18n";

const SCENARIOS = [
  { id: "rejection", icon: "✋" },
  { id: "reminder", icon: "⏰" },
  { id: "apology", icon: "🙏" },
  { id: "dissatisfaction", icon: "💬" },
  { id: "boundary", icon: "🚧" },
  { id: "leader-communication", icon: "👔" },
  { id: "colleague-communication", icon: "🤝" },
  { id: "relationship-communication", icon: "💕" },
  { id: "parent-communication", icon: "🏠" },
  { id: "money", icon: "💰" },
  { id: "complaint", icon: "📞" },
  { id: "salary-resignation", icon: "📋" },
];

type Props = {
  value: string;
  onChange: (id: string) => void;
};

export function ScenarioPicker({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">{t("rewrite.scenarioLabel")}</label>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange("")}
          className={`rounded-lg border px-4 py-2 text-sm transition-all ${
            value === ""
              ? "border-accent bg-accent/10 text-accent font-medium"
              : "border-border bg-surface-elevated text-ink-muted hover:border-ink-faint hover:text-ink"
          }`}
        >
          {t("rewrite.scenarioAuto")}
        </button>
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange(value === s.id ? "" : s.id)}
            className={`rounded-lg border px-4 py-2 text-sm transition-all ${
              value === s.id
                ? "border-accent bg-accent/10 text-accent font-medium"
                : "border-border bg-surface-elevated text-ink-muted hover:border-ink-faint hover:text-ink"
            }`}
          >
            <span className="mr-1.5">{s.icon}</span>
            {s.id}
          </button>
        ))}
      </div>
    </div>
  );
}

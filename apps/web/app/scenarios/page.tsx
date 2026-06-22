"use client";

import Link from "next/link";
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

export default function ScenariosPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-6xl px-6 py-section">
      <div className="text-center">
        <h1 className="font-display text-display-lg font-semibold text-ink">
          {t("scenarios.title")}
        </h1>
        <p className="mt-3 text-body-lg text-ink-muted">{t("scenarios.subtitle")}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SCENARIOS.map((s) => (
          <Link
            key={s.id}
            href={`/scenarios/${s.id}`}
            className="group flex items-start gap-4 rounded-card border border-border bg-surface-elevated p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
          >
            <span className="text-3xl">{s.icon}</span>
            <div>
              <h2 className="font-semibold text-ink group-hover:text-accent transition-colors">
                {s.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Click to use this scenario
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

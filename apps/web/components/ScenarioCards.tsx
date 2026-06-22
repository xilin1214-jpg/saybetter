"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

const SCENARIOS = [
  { id: "rejection", icon: "✋" },
  { id: "reminder", icon: "⏰" },
  { id: "apology", icon: "🙏" },
  { id: "dissatisfaction", icon: "💬" },
  { id: "boundary", icon: "🚧" },
  { id: "workplace", icon: "💼" },
];

export function ScenarioCards() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-6 py-section">
      <div className="text-center">
        <h2 className="font-display text-display-lg font-semibold text-ink">
          {t("home.scenariosTitle")}
        </h2>
        <p className="mt-3 text-ink-muted">{t("home.scenariosSubtitle")}</p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {SCENARIOS.map((s) => (
          <Link
            key={s.id}
            href={`/scenarios/${s.id}`}
            className="group flex flex-col items-center gap-3 rounded-card border border-border bg-surface-elevated p-6 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
          >
            <span className="text-3xl">{s.icon}</span>
            <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
              {s.id}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

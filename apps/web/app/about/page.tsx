"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-3xl px-6 py-section">
      <h1 className="font-display text-display-lg font-semibold text-ink">
        {t("about.title")}
      </h1>

      <p className="mt-6 text-body-lg text-ink-muted">
        {t("about.description")}
      </p>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("about.whatIsTitle")}
          </h2>
          <p className="mt-3 text-ink-muted leading-relaxed">
            {t("about.whatIsBody")}
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("about.featuresTitle")}
          </h2>
          <ul className="mt-4 space-y-2">
            {(["feature1", "feature2", "feature3", "feature4", "feature5", "feature6"] as const).map((key) => (
              <li key={key} className="flex items-start gap-3 text-ink-muted">
                <span className="mt-0.5 text-accent">&#10003;</span>
                <span>{t(`about.${key}`)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("about.boundariesTitle")}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-green-200 bg-green-50/50 p-5">
              <h3 className="text-sm font-semibold text-green-800">{t("about.allowedTitle")}</h3>
              <ul className="mt-3 space-y-1.5">
                {(["allowed1", "allowed2", "allowed3", "allowed4", "allowed5"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-green-700">
                    <span className="mt-0.5">&#10003;</span>
                    <span>{t(`about.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-red-200 bg-red-50/50 p-5">
              <h3 className="text-sm font-semibold text-red-800">{t("about.notAllowedTitle")}</h3>
              <ul className="mt-3 space-y-1.5">
                {(["notAllowed1", "notAllowed2", "notAllowed3", "notAllowed4", "notAllowed5"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-red-700">
                    <span className="mt-0.5">&#10007;</span>
                    <span>{t(`about.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("about.privacyTitle")}
          </h2>
          <ul className="mt-4 space-y-2">
            {(["privacy1", "privacy2", "privacy3"] as const).map((key) => (
              <li key={key} className="flex items-start gap-3 text-ink-muted">
                <span className="mt-0.5 text-accent">&#9679;</span>
                <span>{t(`about.${key}`)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("about.openSourceTitle")}
          </h2>
          <p className="mt-3 text-ink-muted leading-relaxed">
            {t("about.openSourceBody")}
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="https://github.com/xilin1214-jpg/saybetter"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-all hover:brightness-125"
            >
              GitHub
            </Link>
            <Link
              href="/scenarios"
              className="rounded-lg border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {t("about.browseScenarios")}
            </Link>
          </div>
        </section>

        <div className="rounded-card border border-border bg-surface-muted p-6 text-center">
          <p className="font-display text-lg font-medium text-ink italic">
            {t("about.slogan")}
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-3xl px-6 py-section">
      <h1 className="font-display text-display-lg font-semibold text-ink">
        {t("about.title")}
      </h1>
      <p className="mt-6 text-body-lg text-ink-muted">{t("about.description")}</p>
    </div>
  );
}

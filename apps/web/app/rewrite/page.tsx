"use client";

import { useTranslation } from "@/lib/i18n";
import { RewriteForm } from "@/components/RewriteForm";

export default function RewritePage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-4xl px-6 py-section">
      <h1 className="font-display text-display-lg font-semibold text-ink">
        {t("rewrite.title")}
      </h1>
      <p className="mt-3 text-ink-muted">{t("home.heroSubtitle")}</p>
      <div className="mt-10">
        <RewriteForm />
      </div>
    </div>
  );
}

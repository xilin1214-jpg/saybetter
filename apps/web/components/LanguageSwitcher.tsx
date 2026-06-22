"use client";

import { useTranslation } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center rounded-lg border border-border bg-surface-elevated p-0.5">
      <button
        onClick={() => setLocale("en")}
        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
          locale === "en"
            ? "bg-ink text-surface shadow-sm"
            : "text-ink-muted hover:text-ink"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh-CN")}
        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
          locale === "zh-CN"
            ? "bg-ink text-surface shadow-sm"
            : "text-ink-muted hover:text-ink"
        }`}
      >
        中文
      </button>
    </div>
  );
}

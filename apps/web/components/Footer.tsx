"use client";

import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-faint">
          {t("site.tagline")}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/xilin1214-jpg/saybetter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-faint transition-colors hover:text-ink-muted"
          >
            GitHub
          </a>
          <a
            href="/about"
            className="text-sm text-ink-faint transition-colors hover:text-ink-muted"
          >
            {t("nav.about")}
          </a>
        </div>
      </div>
    </footer>
  );
}

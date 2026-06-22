"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold">
            S
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            SayBetter
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/rewrite"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {t("nav.rewrite")}
          </Link>
          <Link
            href="/scenarios"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {t("nav.scenarios")}
          </Link>
          <Link
            href="/examples"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {t("nav.examples")}
          </Link>
          <Link
            href="/about"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {t("nav.about")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

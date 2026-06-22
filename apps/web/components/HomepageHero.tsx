"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

export function HomepageHero() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim()) {
      router.push(`/rewrite?q=${encodeURIComponent(text.trim())}`);
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent-soft),_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 pt-section pb-16 text-center">
        <h1 className="font-display text-display-xl font-bold tracking-tight text-ink">
          {t("home.heroTitle")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-ink-muted">
          {t("home.heroSubtitle")}
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
          <div className="group relative rounded-2xl border border-border bg-surface-elevated shadow-card transition-shadow focus-within:shadow-card-hover">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t("home.heroPlaceholder")}
              rows={3}
              className="w-full resize-none rounded-2xl bg-transparent px-6 py-5 text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <div className="flex items-center justify-between border-t border-border px-6 py-3">
              <span className="text-xs text-ink-faint">
                {text.length > 0 ? `${text.length} chars` : ""}
              </span>
              <button
                type="submit"
                disabled={!text.trim()}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100"
              >
                {t("home.heroCta")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

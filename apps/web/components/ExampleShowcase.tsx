"use client";

import { useTranslation } from "@/lib/i18n";

const DEMOS = [
  {
    original: "你怎么又拖到现在？",
    better: "这个事项今天需要有个明确结论，不然会影响后续进度。麻烦你今天下班前给我一个反馈。",
  },
  {
    original: "我不想借钱给你。",
    better: "我最近手头也有一些安排，可能没办法帮你周转。希望你能理解，不是针对你，只是我现在确实不太方便。",
  },
  {
    original: "你能不能别烦我？",
    better: "我现在状态不太适合继续聊这个，想先自己安静一下。晚点我整理好再跟你说。",
  },
];

export function ExampleShowcase() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-muted py-section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-display-lg font-semibold text-ink">
            {t("home.examplesTitle")}
          </h2>
          <p className="mt-3 text-ink-muted">{t("home.examplesSubtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEMOS.map((demo, i) => (
            <div
              key={i}
              className="rounded-card border border-border bg-surface-elevated p-6 shadow-card"
            >
              <div className="mb-4">
                <span className="inline-block rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                  Original
                </span>
                <p className="mt-3 text-ink-muted line-through decoration-ink-faint/40">
                  {demo.original}
                </p>
              </div>
              <div>
                <span className="inline-block rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700">
                  SayBetter
                </span>
                <p className="mt-3 text-ink">{demo.better}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

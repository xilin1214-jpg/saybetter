"use client";

import { forwardRef } from "react";

type Props = {
  original: string;
  rewritten: string;
  explanation?: string;
};

export const ShareCard = forwardRef<HTMLDivElement, Props>(function ShareCard(
  { original, rewritten, explanation },
  ref,
) {
  return (
    <div
      ref={ref}
      className="relative flex w-[400px] flex-col overflow-hidden rounded-2xl bg-surface-elevated shadow-lg"
    >
      <div className="bg-accent px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-xs font-bold text-white">
            S
          </div>
          <span className="text-sm font-semibold text-white">SayBetter</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-6 py-6">
        <div>
          <span className="mb-2 inline-block rounded bg-ink/5 px-2 py-0.5 text-xs font-medium text-ink-faint">
            Instead of
          </span>
          <p className="text-ink-muted line-through decoration-ink-faint/40 leading-relaxed">
            {original}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-ink-faint">SayBetter</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div>
          <span className="mb-2 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
            Try saying
          </span>
          <p className="text-ink leading-relaxed">{rewritten}</p>
        </div>

        {explanation && (
          <p className="border-t border-border pt-4 text-xs text-ink-faint italic">
            {explanation}
          </p>
        )}
      </div>

      <div className="border-t border-border px-6 py-3">
        <p className="text-center text-xs text-ink-faint">
          把不好说的话，好好说出来。 · saybetter.app
        </p>
      </div>
    </div>
  );
});

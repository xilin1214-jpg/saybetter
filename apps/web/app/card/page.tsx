"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CardExporter } from "@/components/CardExporter";

function CardContent() {
  const searchParams = useSearchParams();
  const original = searchParams.get("original") ?? "Original text";
  const rewritten = searchParams.get("rewritten") ?? "Rewritten text";
  const explanation = searchParams.get("explanation") ?? undefined;

  return <CardExporter original={original} rewritten={rewritten} explanation={explanation} />;
}

export default function CardPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-section">
      <h1 className="mb-8 font-display text-display-lg font-semibold text-ink">Share Card</h1>
      <Suspense fallback={<div className="text-ink-muted">Loading...</div>}>
        <CardContent />
      </Suspense>
    </div>
  );
}

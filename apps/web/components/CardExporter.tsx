"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { ShareCard } from "./ShareCard";

type Props = {
  original: string;
  rewritten: string;
  explanation?: string;
};

export function CardExporter({ original, rewritten, explanation }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleDownload() {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `saybetter-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export card:", err);
    } finally {
      setExporting(false);
    }
  }

  async function handleCopy() {
    if (!cardRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy card:", err);
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="space-y-4">
      <ShareCard ref={cardRef} original={original} rewritten={rewritten} explanation={explanation} />
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={exporting}
          className="rounded-lg border border-border bg-surface-elevated px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink disabled:opacity-50"
        >
          {exporting ? "Exporting..." : "Download PNG"}
        </button>
        <button
          onClick={handleCopy}
          disabled={exporting}
          className="rounded-lg border border-border bg-surface-elevated px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy image"}
        </button>
      </div>
    </div>
  );
}

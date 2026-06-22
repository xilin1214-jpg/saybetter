"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import en from "@/messages/en.json";
import zhCN from "@/messages/zh-CN.json";

type Locale = "en" | "zh-CN";

const translations: Record<Locale, Record<string, unknown>> = { en, "zh-CN": zhCN };

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useCallback(
    (key: string) => getNestedValue(translations[locale] as Record<string, unknown>, key),
    [locale],
  );

  return <I18nContext value={{ locale, setLocale, t }}>{children}</I18nContext>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useTranslation must be used within I18nProvider");
  return context;
}

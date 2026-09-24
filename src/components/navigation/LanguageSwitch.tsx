"use client";

import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/lib/i18n/locale";
import { replacePathLocale } from "@/lib/i18n/locale";

import styles from "./LanguageSwitch.module.css";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
  spanishLabel: string;
  englishLabel: string;
};

export function LanguageSwitch({
  locale,
  label,
  spanishLabel,
  englishLabel,
}: LanguageSwitchProps) {
  const pathname = usePathname();
  const router = useRouter();

  const selectLocale = (nextLocale: Locale) => {
    window.localStorage.setItem("portfolio-locale", nextLocale);
    router.push(replacePathLocale(pathname, nextLocale));
  };

  return (
    <div className={styles.switcher} aria-label={label}>
      <button
        className={locale === "es" ? styles.active : undefined}
        type="button"
        onClick={() => selectLocale("es")}
        aria-pressed={locale === "es"}
      >
        {spanishLabel}
      </button>
      <span aria-hidden="true">/</span>
      <button
        className={locale === "en" ? styles.active : undefined}
        type="button"
        onClick={() => selectLocale("en")}
        aria-pressed={locale === "en"}
      >
        {englishLabel}
      </button>
    </div>
  );
}

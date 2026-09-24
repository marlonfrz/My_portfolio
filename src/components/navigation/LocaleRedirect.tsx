"use client";

import { useEffect } from "react";

import { isLocale, resolveDeviceLocale } from "@/lib/i18n/locale";

import styles from "./LocaleRedirect.module.css";

const localeStorageKey = "portfolio-locale";

export function LocaleRedirect() {
  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);
    const locale =
      savedLocale && isLocale(savedLocale)
        ? savedLocale
        : resolveDeviceLocale(window.navigator.language);

    window.location.replace(`/${locale}/`);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.mark} aria-hidden="true">
        MF
      </div>
      <p>Seleccionando idioma · Selecting language</p>
    </main>
  );
}

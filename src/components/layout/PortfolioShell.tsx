import Link from "next/link";

import type { SiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/locale";

import { LanguageSwitch } from "../navigation/LanguageSwitch";
import { SectionNavigation } from "../navigation/SectionNavigation";
import styles from "./PortfolioShell.module.css";

type PortfolioShellProps = {
  children: React.ReactNode;
  content: SiteContent;
  locale: Locale;
};

export function PortfolioShell({
  children,
  content,
  locale,
}: PortfolioShellProps) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <Link className={styles.brand} href={`/${locale}/`}>
          <span>MF</span>
          <span className={styles.brandText}>
            Marlon Farizo
            <small>Software Developer</small>
          </span>
        </Link>

        <SectionNavigation
          label={content.navigation.menu}
          items={content.navigation.sections}
          projects={content.projectsData}
          locale={locale}
          language={content.language}
        />

        <div className={styles.sidebarFooter}>
          <LanguageSwitch
            locale={locale}
            label={content.language.label}
            spanishLabel={content.language.spanish}
            englishLabel={content.language.english}
          />
          <span className={styles.coordinates}>28.46° N · 16.25° W</span>
        </div>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}

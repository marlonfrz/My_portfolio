import Link from "next/link";

import type { SiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/locale";

import { LanguageSwitch } from "../navigation/LanguageSwitch";
import { ProjectCard } from "../projects/ProjectCard";
import styles from "./ProjectPages.module.css";

type ProjectCatalogueProps = {
  content: SiteContent;
  locale: Locale;
};

export function ProjectCatalogue({ content, locale }: ProjectCatalogueProps) {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href={`/${locale}/`}>MF · Marlon Farizo</Link>
        <LanguageSwitch
          locale={locale}
          label={content.language.label}
          spanishLabel={content.language.spanish}
          englishLabel={content.language.english}
        />
      </header>

      <div className={styles.heading}>
        <p>Projects · 001—{String(content.projectsData.length).padStart(3, "0")}</p>
        <h1>{content.projects.catalogueTitle}</h1>
        <p>{content.projects.catalogueDescription}</p>
      </div>

      <div className={styles.catalogueGrid}>
        {content.projectsData.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            viewProjectLabel={content.projects.viewProject}
            demoSoonLabel={content.projects.demoSoon}
          />
        ))}
      </div>

      <Link className={styles.backLink} href={`/${locale}/#projects`}>
        ← {content.projects.backHome}
      </Link>
    </main>
  );
}

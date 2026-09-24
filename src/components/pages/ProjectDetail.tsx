import Link from "next/link";

import type { Project, SiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/locale";

import { LanguageSwitch } from "../navigation/LanguageSwitch";
import styles from "./ProjectPages.module.css";

type ProjectDetailProps = {
  content: SiteContent;
  locale: Locale;
  project: Project;
};

export function ProjectDetail({
  content,
  locale,
  project,
}: ProjectDetailProps) {
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

      <article className={styles.caseStudy}>
        <header className={styles.caseHero}>
          <div className={styles.caseMeta}>
            <span>{project.index}</span>
            <span>{project.category}</span>
            <span>{project.status}</span>
          </div>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
          <ul className={styles.techList} aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </header>

        <section className={styles.caseSection}>
          <h2>{content.projects.overview}</h2>
          <p>{project.description}</p>
        </section>

        <section className={styles.caseColumns}>
          <div>
            <h2>{content.projects.capabilities}</h2>
            <ol>
              {project.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2>{content.projects.architecture}</h2>
            <ol>
              {project.architecture.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ol>
          </div>
        </section>

        <div className={styles.demoBanner}>
          <span>{content.projects.demoSoon}</span>
          <span aria-hidden="true">↗</span>
        </div>
      </article>

      <Link className={styles.backLink} href={`/${locale}/#projects`}>
        ← {content.projects.backHome}
      </Link>
    </main>
  );
}

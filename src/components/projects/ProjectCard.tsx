import Link from "next/link";

import type { Project } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/locale";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  viewProjectLabel: string;
  demoSoonLabel: string;
};

export function ProjectCard({
  project,
  locale,
  viewProjectLabel,
  demoSoonLabel,
}: ProjectCardProps) {
  return (
    <article className={styles.card} id={project.slug}>
      <header className={styles.header}>
        <span className={styles.index}>{project.index}</span>
        <span className={styles.status}>{project.status}</span>
      </header>

      <div className={styles.body}>
        <p className={styles.category}>{project.category}</p>
        <h3>{project.name}</h3>
        <p className={styles.summary}>{project.summary}</p>
      </div>

      <ul className={styles.technologies} aria-label="Technologies">
        {project.technologies.slice(0, 6).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <Link href={`/${locale}/projects/${project.slug}/`}>
          {viewProjectLabel}
          <span aria-hidden="true">↗</span>
        </Link>
        <span className={styles.demoDisabled}>{demoSoonLabel}</span>
      </footer>
    </article>
  );
}

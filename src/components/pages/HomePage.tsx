import Link from "next/link";

import type { SiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/locale";

import { PortfolioShell } from "../layout/PortfolioShell";
import { Reveal } from "../motion/Reveal";
import { ProjectCard } from "../projects/ProjectCard";
import styles from "./HomePage.module.css";

type HomePageProps = {
  content: SiteContent;
  locale: Locale;
};

const primaryStack = [
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "TypeScript",
  "Applied AI",
  "Docker",
  "CI/CD",
];

export function HomePage({ content, locale }: HomePageProps) {
  return (
    <PortfolioShell content={content} locale={locale}>
      <section className={`${styles.section} ${styles.hero}`} id="introduction">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroTopline}>
          <span>{content.hero.eyebrow}</span>
          <span className={styles.availability}>
            <i /> {content.hero.availability}
          </span>
        </div>

        <Reveal className={styles.heroContent}>
          <p className={styles.role}>{content.hero.subtitle}</p>
          <h1>{content.hero.title}</h1>
          <p className={styles.heroDescription}>{content.hero.description}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#projects">
              {content.hero.projectsCta}
              <span aria-hidden="true">↓</span>
            </a>
            <a className={styles.textLink} href="#contact">
              {content.hero.contactCta}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <div className={styles.stackRail} aria-label="Primary technologies">
          <span className={styles.stackRailLabel}>{content.experience.stackTitle}</span>
          <div className={styles.stackRailTechnologies}>
            {primaryStack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutSection}`} id="about">
        <Reveal>
          <p className={styles.eyebrow}>{content.about.eyebrow}</p>
          <div className={styles.splitHeading}>
            <h2>{content.about.title}</h2>
            <div className={styles.bodyCopy}>
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.principles} delay={0.08}>
          {content.about.principles.map((principle) => (
            <div key={principle.label}>
              <span>{principle.label}</span>
              <strong>{principle.value}</strong>
            </div>
          ))}
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.projectsSection}`} id="projects">
        <Reveal className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{content.projects.eyebrow}</p>
          <h2>{content.projects.title}</h2>
          <p>{content.projects.description}</p>
        </Reveal>

        <div className={styles.projectGrid}>
          {content.projectsData.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard
                project={project}
                locale={locale}
                viewProjectLabel={content.projects.viewProject}
                demoSoonLabel={content.projects.demoSoon}
              />
            </Reveal>
          ))}
        </div>

        <Link className={styles.catalogueLink} href={`/${locale}/projects/`}>
          {content.projects.viewAll}
          <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className={styles.section} id="experience">
        <Reveal className={styles.sectionIntro}>
          <p className={styles.eyebrow}>{content.experience.eyebrow}</p>
          <h2>{content.experience.title}</h2>
          <p>{content.experience.description}</p>
        </Reveal>

        <Reveal className={styles.metrics} delay={0.08}>
          {content.experience.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.stackBlock} delay={0.12}>
          <span>{content.experience.stackTitle}</span>
          <div>
            {primaryStack.map((technology) => (
              <strong key={technology}>{technology}</strong>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.section} ${styles.contact}`} id="contact">
        <Reveal>
          <p className={styles.eyebrow}>{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.description}</p>
          <div className={styles.contactLinks}>
            <a href="mailto:marlonvfh@gmail.com">{content.contact.email}</a>
            <a href="https://github.com/marlonfrz" target="_blank" rel="noreferrer">
              {content.contact.github}
            </a>
            <a
              href="https://www.linkedin.com/in/marlon-valentino-farizo-hergueta-192b52224/"
              target="_blank"
              rel="noreferrer"
            >
              {content.contact.linkedin}
            </a>
          </div>
        </Reveal>
        <footer className={styles.footer}>
          <span>{content.footer}</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </PortfolioShell>
  );
}

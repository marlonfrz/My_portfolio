"use client";

import { useEffect, useMemo, useState } from "react";

import type { Project } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/locale";

import { LanguageSwitch } from "./LanguageSwitch";
import styles from "./SectionNavigation.module.css";

type NavigationItem = {
  id: string;
  label: string;
};

type SectionNavigationProps = {
  label: string;
  items: NavigationItem[];
  projects: Project[];
  locale: Locale;
  language: {
    label: string;
    spanish: string;
    english: string;
  };
};

export function SectionNavigation({
  label,
  items,
  projects,
  locale,
  language,
}: SectionNavigationProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "introduction");
  const [isOpen, setIsOpen] = useState(false);
  const observedItems = useMemo(
    () => [
      ...items,
      ...projects.map((project) => ({
        id: project.slug,
        label: project.name,
      })),
    ],
    [items, projects],
  );

  useEffect(() => {
    const elements = observedItems
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-28% 0px -58%", threshold: [0, 0.2, 0.6] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [observedItems]);

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setIsOpen(false);
  };

  const currentLabel =
    observedItems.find((item) => item.id === activeId)?.label ?? items[0]?.label;

  return (
    <nav className={styles.navigation} aria-label={label}>
      <button
        className={styles.mobileToggle}
        type="button"
        aria-expanded={isOpen}
        aria-controls="section-navigation-list"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.mobileCurrent}>{currentLabel}</span>
        <span aria-hidden="true">{isOpen ? "×" : "＋"}</span>
      </button>

      <ol
        className={`${styles.list} ${isOpen ? styles.listOpen : ""}`}
        id="section-navigation-list"
      >
        {items.map((item, index) => {
          const isProjectsItem = item.id === "projects";
          const projectIsActive = projects.some(
            (project) => project.slug === activeId,
          );
          const isActive =
            item.id === activeId || (isProjectsItem && projectIsActive);

          return (
            <li key={item.id} className={styles.item}>
              <button
                className={isActive ? styles.active : undefined}
                type="button"
                onClick={() => navigateTo(item.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </button>

              {isProjectsItem ? (
                <ol className={styles.sublist}>
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <button
                        className={
                          activeId === project.slug ? styles.activeSubitem : undefined
                        }
                        type="button"
                        onClick={() => navigateTo(project.slug)}
                      >
                        {project.name}
                      </button>
                    </li>
                  ))}
                </ol>
              ) : null}
            </li>
          );
        })}
        <li className={styles.mobileLanguage}>
          <LanguageSwitch
            locale={locale}
            label={language.label}
            spanishLabel={language.spanish}
            englishLabel={language.english}
          />
        </li>
      </ol>
    </nav>
  );
}

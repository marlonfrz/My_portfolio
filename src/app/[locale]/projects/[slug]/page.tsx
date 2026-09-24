import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/pages/ProjectDetail";
import { getProject, getSiteContent } from "@/content/site-content";
import { isLocale, locales } from "@/lib/i18n/locale";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSiteContent(locale).projectsData.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const project = getProject(locale, slug);

  return project
    ? {
        title: `${project.name} — Marlon Farizo`,
        description: project.summary,
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const project = getProject(locale, slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail content={content} locale={locale} project={project} />;
}

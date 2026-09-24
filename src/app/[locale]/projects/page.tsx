import { notFound } from "next/navigation";

import { ProjectCatalogue } from "@/components/pages/ProjectCatalogue";
import { getSiteContent } from "@/content/site-content";
import { isLocale } from "@/lib/i18n/locale";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ProjectCatalogue content={getSiteContent(locale)} locale={locale} />;
}

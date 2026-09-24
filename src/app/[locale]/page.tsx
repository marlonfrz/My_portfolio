import { notFound } from "next/navigation";

import { HomePage } from "@/components/pages/HomePage";
import { getSiteContent } from "@/content/site-content";
import { isLocale } from "@/lib/i18n/locale";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage content={getSiteContent(locale)} locale={locale} />;
}

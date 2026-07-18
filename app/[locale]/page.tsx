import type { Metadata } from "next";
import { Brands } from "@/components/sections/Brands";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Reseller } from "@/components/sections/Reseller";
import { Sectors } from "@/components/sections/Sectors";
import { getDictionary, isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        fr: `${siteUrl}/fr`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/fr`,
      },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Pillars dict={dict} />
      <Brands dict={dict} />
      <Sectors dict={dict} />
      <Reseller dict={dict} />
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}

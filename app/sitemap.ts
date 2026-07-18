import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/contact", "/mentions-legales", "/politique-de-confidentialite", "/cookies"];
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.3,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${siteUrl}/${alt}${route}`]),
        ),
      },
    })),
  );
}

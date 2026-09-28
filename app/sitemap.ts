import { MetadataRoute } from "next";
import getAllPageSlugs from "@/src/api/page/getAllPageSlugs";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const pages = await getAllPageSlugs();

  return pages.map(({ slug, lang, updatedAt }) => {
    // slug z Sanity ma leading slash, np. "/" lub "/cennik"
    const path = slug === "/" ? "" : slug;

    return {
      url: `${baseUrl}/${lang}${path}`,
      lastModified: updatedAt ? new Date(updatedAt) : new Date(),
      changeFrequency: slug === "/" ? "daily" : "weekly",
      priority: slug === "/" ? 1.0 : 0.8,
    };
  });
}

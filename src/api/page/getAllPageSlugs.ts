import { sanityClient } from "@/sanity/lib/client";
import { MODELS } from "@/src/types/schemas";
import { LANGS } from "@/src/types/langs";

interface PageSlugEntry {
  slug: string;
  lang: LANGS;
  updatedAt: string;
}

const getAllPageSlugs = async (): Promise<PageSlugEntry[]> => {
  const pages = await sanityClient.fetch<PageSlugEntry[]>(
    `*[_type == $type && defined(slug.current)] {
      "slug": slug.current,
      "lang": language,
      "updatedAt": _updatedAt
    }`,
    { type: MODELS.PAGE },
    { next: { revalidate: false } },
  );

  return pages ?? [];
};

export default getAllPageSlugs;

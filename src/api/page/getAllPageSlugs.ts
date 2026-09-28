import { sanityClient } from "@/sanity/lib/client";
import { MODELS } from "@/src/types/schemas";

interface PageSlugEntry {
  slug: string;
  updatedAt: string;
}

const getAllPageSlugs = async (): Promise<PageSlugEntry[]> => {
  const pages = await sanityClient.fetch<PageSlugEntry[]>(
    `*[_type == $type && defined(slug.current)] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }`,
    { type: MODELS.PAGE },
    { next: { revalidate: false } },
  );

  return pages ?? [];
};

export default getAllPageSlugs;

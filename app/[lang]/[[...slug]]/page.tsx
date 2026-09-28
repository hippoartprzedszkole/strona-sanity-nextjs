import PageBuilder from "@/src/components/PageBuilder";
import { notFound } from "next/navigation";
import getPage from "@/src/api/page/getPage";
import getAllPageSlugs from "@/src/api/page/getAllPageSlugs";
import generateMetadataObj from "@/src/utils/generateMetadataObj";
import { LANGS } from "@/src/types/langs";
import { Metadata } from "next";

export const revalidate = false;

export async function generateStaticParams() {
  const pages = await getAllPageSlugs();

  return pages.map(({ slug, lang }) => {
    const segments = slug === "/" ? [] : slug.replace(/^\//, "").split("/");
    return { lang, slug: segments };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[]; lang: LANGS }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const pathName = `/${(slug || []).join("/")}`;
  const page = await getPage({ slug: pathName, lang });
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const path = pathName === "/" ? "" : pathName;
  const canonicalUrl = `${baseUrl}/${lang}${path}`;

  if (!page) {
    return {
      title: "Strona nie znaleziona",
      robots: { index: false, follow: false },
    };
  }

  return {
    ...generateMetadataObj({
      title: page.title,
      description:
        page.seo?.description ??
        "Shoppin'go – dietetyk i lista zakupów w kieszeni.",
      canonical: canonicalUrl,
      locale: lang === LANGS.POLISH ? "pl_PL" : "en_US",
      ogTitle: page.seo?.ogTitle,
      ogImage: page.seo?.ogImage ?? "/assets/logo/logo-vector-2.png",
    }),
    alternates: {
      canonical: canonicalUrl,
      languages: Object.values(LANGS).reduce<Record<string, string>>(
        (acc, l) => {
          acc[l] = `${baseUrl}/${l}${path}`;
          return acc;
        },
        { "x-default": `${baseUrl}/${LANGS.POLISH}${path}` },
      ),
    },
  };
}

export default async function Slug(props: {
  params: Promise<{ slug: string[]; lang: LANGS }>;
}) {
  const { lang, slug } = await props.params;
  const pathName = `/${(slug || []).join("/")}`;
  const page = await getPage({ slug: pathName, lang });

  if (!page) {
    return notFound();
  }

  return <PageBuilder page={page} />;
}

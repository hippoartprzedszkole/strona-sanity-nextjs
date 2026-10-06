import PageBuilder from "@/src/components/PageBuilder";
import { notFound } from "next/navigation";
import getPage from "@/src/api/page/getPage";
import getAllPageSlugs from "@/src/api/page/getAllPageSlugs";
import generateMetadataObj from "@/src/utils/generateMetadataObj";
import { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_SEO_DESCRIPTION,
} from "@/src/utils/seoDefaults";

export const revalidate = 30;

export async function generateStaticParams() {
  const pages = await getAllPageSlugs();

  return pages.map(({ slug }) => {
    const segments = slug === "/" ? [] : slug.replace(/^\//, "").split("/");
    return { slug: segments };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pathName = `/${(slug || []).join("/")}`;
  const page = await getPage({ slug: pathName });
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const path = pathName === "/" ? "" : pathName;
  const canonicalUrl = `${baseUrl}${path}`;

  if (!page) {
    return {
      title: "Strona nie znaleziona",
      robots: { index: false, follow: false },
    };
  }

  return {
    ...generateMetadataObj({
      title: page.title,
      description: page.seo?.description ?? DEFAULT_SEO_DESCRIPTION,
      canonical: canonicalUrl,
      locale: "pl_PL",
      ogTitle: page.seo?.ogTitle,
      ogImage: page.seo?.ogImage ?? DEFAULT_OG_IMAGE,
    }),
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Slug(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;
  const pathName = `/${(slug || []).join("/")}`;
  const page = await getPage({ slug: pathName });

  if (!page) {
    return notFound();
  }

  return <PageBuilder page={page} />;
}

import { IMetadata } from "../types/metadata";
import { Metadata } from "next";

export default function generateMetadataObj(seo: IMetadata): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: seo.siteName ?? "Przedszkole HippoArt",
      locale: seo.locale,
      type: "website",
      ...(seo.ogImage && {
        images: [{ url: seo.ogImage }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.description,
      ...(seo.ogImage && { images: [seo.ogImage] }),
    },
  };
}

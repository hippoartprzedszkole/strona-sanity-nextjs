import Layout from "@/features/layout/Layout";
import getCommonComponents from "@/src/api/commonComponents/getCommonComponents";
import { Fredoka, Outfit } from "next/font/google";
import clsx from "clsx";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const commonComponents = await getCommonComponents();

  if (!commonComponents) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "";

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: "Przedszkole HippoArt",
        description:
          "Niepubliczne Przedszkole Artystyczno-Językowe HippoArt w Wieliczce.",
        inLanguage: "pl-PL",
      },
      {
        "@type": ["Preschool", "LocalBusiness"],
        "@id": `${baseUrl}/#organization`,
        name: "Niepubliczne Przedszkole Artystyczno-Językowe HippoArt",
        alternateName: "Przedszkole HippoArt",
        url: `${baseUrl}/`,
        telephone: ["+48504922276", "+48537450805"],
        email: "hippo-art@wp.pl",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Różana 39",
          postalCode: "32-020",
          addressLocality: "Wieliczka",
          addressCountry: "PL",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "07:00",
          closes: "18:00",
        },
        sameAs: [
          "https://www.facebook.com/Przedszkole-Artystyczno-J%C4%99zykowe-Hippo-Art-124175564353810/",
        ],
      },
    ],
  };

  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={clsx(fredoka.variable, outfit.variable, "antialiased")}>
        <Layout commonComponents={commonComponents}>{children}</Layout>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

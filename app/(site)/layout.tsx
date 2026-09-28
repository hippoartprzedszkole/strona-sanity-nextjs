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
        name: "Shoppin'go",
        alternateName: "Shoppingo",
        description:
          "Inteligentna lista zakupów, planer posiłków i dieta – aplikacja mobilna Shoppingo na iOS i Android.",
        inLanguage: "pl-PL",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/#app`,
        name: "Shoppin'go",
        alternateName: "Shoppingo",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS, Android",
        description:
          "Shoppin'go to inteligentna aplikacja mobilna: lista zakupów, planer posiłków i asystent diety w jednym miejscu.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PLN",
        },
        url: `${baseUrl}/`,
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Shoppin'go",
        alternateName: "Shoppingo",
        url: `${baseUrl}/`,
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
      <body
        className={clsx(fredoka.variable, outfit.variable, "antialiased")}
      >
        <Layout commonComponents={commonComponents}>{children}</Layout>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

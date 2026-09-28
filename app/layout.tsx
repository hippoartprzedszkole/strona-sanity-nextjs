import "./globals.css";
import Layout from "@/features/layout/Layout";
import getCommonComponents from "@/src/api/commonComponents/getCommonComponents";
import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import clsx from "clsx";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL!),
  title: {
    default: "Shoppin'go – lista zakupów i planer posiłków",
    template: "%s | Shoppin'go",
  },
  description:
    "Shoppin'go – inteligentna aplikacja mobilna: lista zakupów, planer posiłków i asystent diety w jednym miejscu. Pobierz na iOS i Android.",
  keywords: [
    "shoppin'go",
    "shoppingo",
    "lista zakupów",
    "planer posiłków",
    "aplikacja dietetyczna",
    "asystent diety",
    "zakupy spożywcze",
    "meal planner",
    "shopping list app",
  ],
  openGraph: {
    siteName: "Shoppin'go",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const commonComponents = await getCommonComponents();

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
        className={clsx(
          poppins.variable,
          montserrat.variable,
          playfairDisplay.variable,
          "antialiased",
        )}
      >
        <Layout commonComponents={commonComponents}>{children}</Layout>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

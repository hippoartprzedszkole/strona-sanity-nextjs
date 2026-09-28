import "./globals.css";
import { Metadata } from "next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

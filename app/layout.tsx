import "./globals.css";
import { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_SEO_DESCRIPTION,
} from "@/src/utils/seoDefaults";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL!),
  title: {
    default: "Przedszkole HippoArt – Artystyczno-Językowe w Wieliczce",
    template: "%s | Przedszkole HippoArt",
  },
  description: DEFAULT_SEO_DESCRIPTION,
  keywords: [
    "przedszkole HippoArt",
    "Hippo Art",
    "przedszkole Wieliczka",
    "przedszkole artystyczne",
    "przedszkole językowe",
    "niepubliczne przedszkole Wieliczka",
    "zapisy do przedszkola Wieliczka",
    "przedszkole artystyczno-językowe",
  ],
  openGraph: {
    siteName: "Przedszkole HippoArt",
    type: "website",
    locale: "pl_PL",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
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

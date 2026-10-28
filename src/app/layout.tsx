import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickContactFloating } from "@/components/common/QuickContactFloating";
import { JsonLd, getLegalServiceSchema, getWebSiteSchema } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Strategic Corporate Counsel & Trial Attorneys`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Strategic Corporate Counsel & Trial Attorneys`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Premier Law Firm`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Strategic Corporate Counsel & Trial Attorneys`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@legalvertex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-50 text-slate-900 antialiased">
      <head>
        <JsonLd data={getLegalServiceSchema()} />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-900 bg-slate-50 text-slate-800">
        <Navbar />
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
        <Footer />
        <QuickContactFloating />
      </body>
    </html>
  );
}

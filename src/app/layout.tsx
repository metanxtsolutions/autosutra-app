import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { BackToTop } from "@/components/layout/back-to-top";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/shared/json-ld";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "automobile marketing agency India",
    "car dealership leads India",
    "verified buyer leads",
    "dealer digital marketing India",
    "automotive Google Ads agency",
    "EV dealer marketing India",
    "car dealership digital marketing Mumbai",
    "car dealership digital marketing Delhi",
    "car dealership digital marketing Bangalore",
    "used car dealer leads India",
    "bike dealership marketing India",
    "dealer CRM software India",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-IN": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-background text-foreground font-sans`}
      >
        <JsonLd data={organizationSchema()} />
        <SmoothScrollProvider>
          <Header />
          <main className="pb-20 lg:pb-0">{children}</main>
          <Footer />
          <StickyMobileCta />
          <BackToTop />
        </SmoothScrollProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

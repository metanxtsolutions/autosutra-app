import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

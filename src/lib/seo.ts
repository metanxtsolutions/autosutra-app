import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

const MAX_DESCRIPTION_LENGTH = 160;

// Templated descriptions (service x city, solution x city, etc.) combine
// variable-length real fields and can exceed Google's ~160 character
// snippet guideline. Truncate at the last full word before the limit
// rather than mid-word.
function truncateDescription(description: string): string {
  if (description.length <= MAX_DESCRIPTION_LENGTH) return description;
  const truncated = description.slice(0, MAX_DESCRIPTION_LENGTH - 3);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace)}...`;
}

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
  const safeDescription = truncateDescription(description);

  return {
    title,
    description: safeDescription,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
      },
    },
    openGraph: {
      title: socialTitle,
      description: safeDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: safeDescription,
    },
  };
}

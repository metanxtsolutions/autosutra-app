import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

const MAX_DESCRIPTION_LENGTH = 160;

// Every page gets a social preview image. Next.js merges `openGraph` as a
// whole object rather than field by field, so a page that sets its own
// openGraph (which every page here does via this helper) silently drops the
// root layout's file-based opengraph-image and shares with no image at all.
// Routes that ship their own opengraph-image.tsx (services, resources, case
// studies) pass `ownSocialImage: true` so this default is left out and the
// route's file-based image is used; an explicit `images` entry here would
// otherwise take precedence over it.
const defaultSocialImage = {
  url: `${siteConfig.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: siteConfig.name,
};

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
  ownSocialImage = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ownSocialImage?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = `${title} | ${siteConfig.name}`;
  const safeDescription = truncateDescription(description);
  // Spread in only when set: an `images: undefined` key still counts as
  // "images provided" to Next's metadata merge and blocks the file-based one.
  const images = ownSocialImage ? {} : { images: [defaultSocialImage] };

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
      ...images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: safeDescription,
      ...images,
    },
  };
}

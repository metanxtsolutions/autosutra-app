import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";
import { siteConfig } from "@/data/site-config";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = siteConfig.name;

export default async function Image() {
  return renderOgImage({
    eyebrow: "India's Dealer Growth Agency",
    title: siteConfig.tagline,
  });
}

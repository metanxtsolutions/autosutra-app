import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal-only surfaces: the lead tracker (auth-gated, redirects to
      // /login) and the NextAuth API. Nothing here is meant to be crawled.
      // /login stays crawlable so its noindex tag can be read.
      disallow: ["/api/", "/leads"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site-config";
import { resources } from "@/data/resources";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const sorted = [...resources].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );

  const items = sorted
    .map((resource) => {
      const url = `${siteConfig.url}/resources/${resource.slug}`;
      const pubDate = new Date(resource.publishedDate).toUTCString();
      return `
    <item>
      <title>${escapeXml(resource.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(resource.excerpt)}</description>
      <category>${escapeXml(resource.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AutoSutra Resources</title>
    <link>${siteConfig.url}/resources</link>
    <description>Dealer growth guides, articles, and downloads from AutoSutra for the Indian automotive market.</description>
    <language>en-in</language>
    <atom:link href="${siteConfig.url}/resources/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

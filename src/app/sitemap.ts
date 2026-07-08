import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { caseStudyTeasers } from "@/data/case-studies";
import { resources } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudyTeasers.map(
    (study) => ({
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${siteConfig.url}/resources/${resource.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...resourceRoutes,
  ];
}

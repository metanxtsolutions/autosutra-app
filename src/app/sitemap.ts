import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { caseStudyTeasers } from "@/data/case-studies";
import { resources } from "@/data/resources";
import { cityProfiles } from "@/data/city-content";
import { districtProfiles } from "@/data/wb-districts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/city", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/resources/sitemap", priority: 0.3, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/book-a-demo", priority: 0.9, changeFrequency: "monthly" as const },
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

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${siteConfig.url}/solutions/${solution.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map(
    (industry) => ({
      url: `${siteConfig.url}/industries/${industry.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const cityRoutes: MetadataRoute.Sitemap = cityProfiles.map((city) => ({
    url: `${siteConfig.url}/city/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const districtRoutes: MetadataRoute.Sitemap = districtProfiles.map(
    (district) => ({
      url: `${siteConfig.url}/city/${district.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

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
    lastModified: new Date(resource.updatedDate),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const resourceCategories = Array.from(
    new Set(resources.map((resource) => resource.category)),
  );
  const resourceCategoryRoutes: MetadataRoute.Sitemap = resourceCategories.map(
    (category) => ({
      url: `${siteConfig.url}/resources/category/${category.toLowerCase()}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    }),
  );

  const resourceTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags)),
  );
  const resourceTagRoutes: MetadataRoute.Sitemap = resourceTags.map((tag) => ({
    url: `${siteConfig.url}/resources/tag/${tag}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const serviceCityRoutes: MetadataRoute.Sitemap = services.flatMap(
    (service) =>
      cityProfiles.map((city) => ({
        url: `${siteConfig.url}/services/${service.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
  );

  const solutionCityRoutes: MetadataRoute.Sitemap = solutions.flatMap(
    (solution) =>
      cityProfiles.map((city) => ({
        url: `${siteConfig.url}/solutions/${solution.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
  );

  const industryServiceRoutes: MetadataRoute.Sitemap = industries.flatMap(
    (industry) =>
      services.map((service) => ({
        url: `${siteConfig.url}/industries/${industry.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...cityRoutes,
    ...districtRoutes,
    ...caseStudyRoutes,
    ...resourceRoutes,
    ...resourceCategoryRoutes,
    ...resourceTagRoutes,
    ...serviceCityRoutes,
    ...solutionCityRoutes,
    ...industryServiceRoutes,
  ];
}

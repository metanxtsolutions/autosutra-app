import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { caseStudyTeasers } from "@/data/case-studies";
import { resources } from "@/data/resources";
import { cityProfiles } from "@/data/city-content";
import { states } from "@/data/states";

// Real per-page "last modified" dates instead of a shared build timestamp:
// this reads each data/page file's actual last commit date from git history,
// so lastmod reflects when that content genuinely last changed rather than
// when the sitemap happened to be generated. Falls back to build time if git
// history isn't available (e.g. a shallow clone with no history for a file).
const gitDateCache = new Map<string, Date>();

function gitLastModified(relativeFilePath: string): Date {
  const cached = gitDateCache.get(relativeFilePath);
  if (cached) return cached;

  let result = new Date();
  try {
    const output = execSync(
      `git log -1 --format=%aI -- "${relativeFilePath}"`,
      { cwd: process.cwd(), encoding: "utf-8" },
    ).trim();
    if (output) result = new Date(output);
  } catch {
    // No git history available at build time; keep the build-time fallback.
  }

  gitDateCache.set(relativeFilePath, result);
  return result;
}

// Every district/state page is generated from one file per state, so that
// file's git history is a true freshness signal for all districts in it.
const stateSourceFile: Record<string, string> = {
  "west-bengal": "src/data/wb-districts.ts",
  "andhra-pradesh": "src/data/ap-districts.ts",
  "arunachal-pradesh": "src/data/ar-districts.ts",
  assam: "src/data/assam-districts.ts",
  bihar: "src/data/bihar-districts.ts",
  chhattisgarh: "src/data/chhattisgarh-districts.ts",
  goa: "src/data/goa-districts.ts",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticFileByPath: Record<string, string> = {
    "": "src/app/page.tsx",
    "/pricing": "src/app/pricing/page.tsx",
    "/services": "src/app/services/page.tsx",
    "/solutions": "src/app/solutions/page.tsx",
    "/industries": "src/app/industries/page.tsx",
    "/city": "src/app/city/page.tsx",
    "/case-studies": "src/app/case-studies/page.tsx",
    "/about": "src/app/about/page.tsx",
    "/resources": "src/app/resources/page.tsx",
    "/resources/sitemap": "src/app/resources/sitemap/page.tsx",
    "/contact": "src/app/contact/page.tsx",
    "/book-a-demo": "src/app/book-a-demo/page.tsx",
  };

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
    lastModified: gitLastModified(staticFileByPath[path]),
    changeFrequency,
    priority,
  }));

  const servicesLastModified = gitLastModified("src/data/services.ts");
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: servicesLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const solutionsLastModified = gitLastModified("src/data/solutions.ts");
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${siteConfig.url}/solutions/${solution.slug}`,
    lastModified: solutionsLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industriesLastModified = gitLastModified("src/data/industries.ts");
  const industryRoutes: MetadataRoute.Sitemap = industries.map(
    (industry) => ({
      url: `${siteConfig.url}/industries/${industry.slug}`,
      lastModified: industriesLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const cityLastModified = gitLastModified("src/data/city-content.ts");
  const cityRoutes: MetadataRoute.Sitemap = cityProfiles.map((city) => ({
    url: `${siteConfig.url}/city/${city.slug}`,
    lastModified: cityLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const indiaRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/india`,
      lastModified: gitLastModified("src/data/states.ts"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const stateRoutes: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${siteConfig.url}/india/${state.slug}`,
    lastModified: gitLastModified(stateSourceFile[state.slug]),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const districtRoutes: MetadataRoute.Sitemap = states.flatMap((state) => {
    const lastModified = gitLastModified(stateSourceFile[state.slug]);
    return state.districts.map((district) => ({
      url: `${siteConfig.url}/india/${state.slug}/${district.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  });

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudyTeasers.map(
    (study) => ({
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      lastModified: new Date(study.updatedDate),
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
    (category) => {
      const mostRecent = resources
        .filter((resource) => resource.category === category)
        .reduce(
          (latest, resource) =>
            new Date(resource.updatedDate) > latest
              ? new Date(resource.updatedDate)
              : latest,
          new Date(0),
        );
      return {
        url: `${siteConfig.url}/resources/category/${category.toLowerCase()}`,
        lastModified: mostRecent,
        changeFrequency: "weekly",
        priority: 0.5,
      };
    },
  );

  const resourceTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags)),
  );
  const resourceTagRoutes: MetadataRoute.Sitemap = resourceTags.map((tag) => {
    const mostRecent = resources
      .filter((resource) => resource.tags.includes(tag))
      .reduce(
        (latest, resource) =>
          new Date(resource.updatedDate) > latest
            ? new Date(resource.updatedDate)
            : latest,
        new Date(0),
      );
    return {
      url: `${siteConfig.url}/resources/tag/${tag}`,
      lastModified: mostRecent,
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });

  const serviceCityRoutes: MetadataRoute.Sitemap = services.flatMap(
    (service) =>
      cityProfiles.map((city) => ({
        url: `${siteConfig.url}/services/${service.slug}/${city.slug}`,
        lastModified:
          servicesLastModified > cityLastModified
            ? servicesLastModified
            : cityLastModified,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
  );

  const solutionCityRoutes: MetadataRoute.Sitemap = solutions.flatMap(
    (solution) =>
      cityProfiles.map((city) => ({
        url: `${siteConfig.url}/solutions/${solution.slug}/${city.slug}`,
        lastModified:
          solutionsLastModified > cityLastModified
            ? solutionsLastModified
            : cityLastModified,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
  );

  const industryServiceRoutes: MetadataRoute.Sitemap = industries.flatMap(
    (industry) =>
      services.map((service) => ({
        url: `${siteConfig.url}/industries/${industry.slug}/${service.slug}`,
        lastModified:
          industriesLastModified > servicesLastModified
            ? industriesLastModified
            : servicesLastModified,
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
    ...indiaRoute,
    ...stateRoutes,
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

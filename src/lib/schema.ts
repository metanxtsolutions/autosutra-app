import { siteConfig } from "@/data/site-config";
import { targetCities } from "@/data/locations";
import type { Faq } from "@/data/faq";
import type { Service } from "@/data/services";
import type { Resource } from "@/data/resources";

const areaServed = [
  { "@type": "Country", name: "India" },
  ...targetCities.map((city) => ({ "@type": "City", name: city })),
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SDF Building, GP Block, Sector V, Bidhannagar",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700091",
      addressCountry: "IN",
    },
    areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneDisplay,
      email: siteConfig.contact.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed,
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

const RESOURCES_PUBLISHED_DATE = "2026-07-08";

export function articleSchema(resource: Resource) {
  return {
    "@context": "https://schema.org",
    "@type": resource.category === "Blog" ? "BlogPosting" : "Article",
    headline: resource.title,
    description: resource.excerpt,
    datePublished: RESOURCES_PUBLISHED_DATE,
    dateModified: RESOURCES_PUBLISHED_DATE,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/resources/${resource.slug}`,
    mainEntityOfPage: `${siteConfig.url}/resources/${resource.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

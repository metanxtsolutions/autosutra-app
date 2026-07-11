import { siteConfig } from "@/data/site-config";
import { targetCities } from "@/data/locations";
import type { Faq } from "@/data/faq";
import type { Service } from "@/data/services";
import type { Resource } from "@/data/resources";
import type { PricingTier } from "@/data/pricing";

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

export function articleSchema(resource: Resource) {
  return {
    "@context": "https://schema.org",
    "@type": resource.category === "Blog" ? "BlogPosting" : "Article",
    headline: resource.title,
    description: resource.excerpt,
    keywords: [resource.primaryKeyword, ...resource.secondaryKeywords].join(", "),
    datePublished: resource.publishedDate,
    dateModified: resource.updatedDate,
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

export function pricingSchema(tiers: PricingTier[]) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${siteConfig.name} pricing plans`,
    itemListElement: tiers.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      description: tier.description,
      price: tier.price,
      priceCurrency: "INR",
      url: `${siteConfig.url}/pricing`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: tier.price,
        priceCurrency: "INR",
        billingIncrement: 1,
        unitCode: "MON",
      },
      itemOffered: {
        "@type": "Service",
        name: `${tier.name} plan`,
        description: tier.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    })),
  };
}

export function combinationServiceSchema({
  name,
  description,
  path,
  areaServedName,
}: {
  name: string;
  description: string;
  path: string;
  areaServedName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: areaServedName
      ? { "@type": "City", name: areaServedName }
      : areaServed,
    url: `${siteConfig.url}${path}`,
  };
}

// Represents AutoSutra as a ProfessionalService (a LocalBusiness subtype)
// serving the named area, using our real HQ address rather than a
// fabricated branch office, since we don't have physical locations in
// every city or district this schema is used for.
export function localBusinessSchema({
  name,
  description,
  path,
  areaServedName,
}: {
  name: string;
  description: string;
  path: string;
  areaServedName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SDF Building, GP Block, Sector V, Bidhannagar",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700091",
      addressCountry: "IN",
    },
    areaServed: { "@type": "AdministrativeArea", name: areaServedName },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
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

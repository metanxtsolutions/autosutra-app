import { siteConfig } from "@/data/site-config";
import { targetCities } from "@/data/locations";
import type { Faq } from "@/data/faq";
import type { Service } from "@/data/services";
import type { Resource } from "@/data/resources";
import type { PricingTier } from "@/data/pricing";
import type { CaseStudyTeaser } from "@/data/case-studies";

const areaServed = [
  { "@type": "Country", name: "India" },
  ...targetCities.map((city) => ({ "@type": "City", name: city })),
];

// Stable node identifiers so every page's structured data points back at
// the one Organization and WebSite declared on the root layout / homepage,
// instead of each page describing a fresh anonymous "AutoSutra" entity.
export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

const logo = {
  "@type": "ImageObject",
  url: `${siteConfig.url}/brand/autosutra-logo.png`,
  width: 2560,
  height: 605,
};

// Compact reference used wherever another entity points at AutoSutra
// (Service.provider, Article.publisher, WebPage.isPartOf.publisher, ...).
const organizationRef = {
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.name,
  url: siteConfig.url,
};

const websiteRef = {
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  url: siteConfig.url,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo,
    description: siteConfig.description,
    // Topics the site demonstrably covers (its service lines), stated in
    // plain terms so answer engines can place the entity without inference.
    knowsAbout: [
      "Automotive dealership marketing in India",
      "Verified buyer lead generation for car, bike, EV, and used-car dealers",
      "Performance marketing (Google Ads, Meta Ads) for dealerships",
      "Local SEO and Google Business Profile for dealerships",
      "WhatsApp, SMS, and RCS communication for dealerships",
      "Dealer CRM and SaaS platforms",
    ],
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

// Rendered on the homepage only, per Google's site-name guidance. Carries
// no SearchAction because the site has no search results page.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    ...websiteRef,
    inLanguage: "en-IN",
    publisher: organizationRef,
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
    provider: organizationRef,
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
    articleSection: resource.category,
    keywords: [resource.primaryKeyword, ...resource.secondaryKeywords].join(", "),
    datePublished: resource.publishedDate,
    dateModified: resource.updatedDate,
    // The same generated cover the page shows above the article body.
    image: `${siteConfig.url}/resources/cover/${resource.slug}`,
    inLanguage: "en-IN",
    author: organizationRef,
    publisher: { ...organizationRef, logo },
    isPartOf: websiteRef,
    url: `${siteConfig.url}/resources/${resource.slug}`,
    mainEntityOfPage: `${siteConfig.url}/resources/${resource.slug}`,
  };
}

export function caseStudySchema(study: CaseStudyTeaser) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    description: `${study.dealership}: ${study.category}. ${study.headline}.`,
    about: study.dealership,
    datePublished: study.publishedDate,
    dateModified: study.updatedDate,
    image: `${siteConfig.url}/case-studies/${study.slug}/opengraph-image`,
    inLanguage: "en-IN",
    author: organizationRef,
    publisher: { ...organizationRef, logo },
    isPartOf: websiteRef,
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    mainEntityOfPage: `${siteConfig.url}/case-studies/${study.slug}`,
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
        provider: organizationRef,
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
    provider: organizationRef,
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
    parentOrganization: organizationRef,
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
    inLanguage: "en-IN",
    isPartOf: websiteRef,
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

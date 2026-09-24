import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { TrustedByMarquee } from "@/components/home/trusted-by-marquee";
import { About } from "@/components/home/about";
import { WhyAutoSutra } from "@/components/home/why-autosutra";
import { ServicesGrid } from "@/components/home/services-grid";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { CaseStudyTeaser } from "@/components/home/case-study-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { Faq } from "@/components/home/faq";
import { ContactCta } from "@/components/home/contact-cta";
import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema, websiteSchema } from "@/lib/schema";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/site-config";

// Title, description, and Open Graph fields are inherited from the root
// layout; only the canonical is homepage-specific (see the note in layout.tsx).
export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-IN": siteConfig.url,
    },
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqPageSchema(faqs)} />
      <Hero />
      <Stats />
      <TrustedByMarquee />
      <About />
      <WhyAutoSutra />
      <ServicesGrid />
      <ProcessTimeline />
      <CaseStudyTeaser />
      <Testimonials />
      <PricingTeaser />
      <Faq />
      <ContactCta />
    </>
  );
}

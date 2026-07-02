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

export default function Home() {
  return (
    <>
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

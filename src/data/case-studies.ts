// Illustrative example case studies in AutoSutra's voice — no real client
// results were supplied yet. Replace with verified, client-approved case
// studies (real dealership name, metrics, and permission to publish) before
// launch, and expand each into a full /case-studies/[slug] page.
export type CaseStudyTeaser = {
  slug: string;
  dealership: string;
  industry:
    | "Car Dealerships"
    | "Bike Dealerships"
    | "EV Dealers"
    | "Used Car Dealers"
    | "OEMs";
  category: string;
  headline: string;
  metric: { value: string; label: string };
};

export const caseStudyTeasers: CaseStudyTeaser[] = [
  {
    slug: "multi-brand-dealership-lead-growth",
    dealership: "Multi-Brand Dealership Network",
    industry: "Car Dealerships",
    category: "Verified Buyer Leads + Google Ads",
    headline: "Doubling qualified showroom footfall in one quarter",
    metric: { value: "2.1x", label: "Increase in qualified footfall" },
  },
  {
    slug: "used-car-dealer-cost-per-lead",
    dealership: "Regional Used Car Dealer",
    industry: "Used Car Dealers",
    category: "Meta Ads + WhatsApp Marketing",
    headline: "Cutting cost-per-lead while scaling monthly volume",
    metric: { value: "-42%", label: "Lower cost per verified lead" },
  },
  {
    slug: "ev-dealership-digital-launch",
    dealership: "EV Dealership Launch",
    industry: "EV Dealers",
    category: "Digital Marketing + CRM Solutions",
    headline: "Taking a new EV showroom from zero to booked-out test drives",
    metric: { value: "700+", label: "Test drives booked in 90 days" },
  },
  {
    slug: "bike-dealership-local-seo",
    dealership: "City-Wide Bike Dealership",
    industry: "Bike Dealerships",
    category: "Local SEO + Content Creation",
    headline: "Winning the 'near me' search across every showroom",
    metric: { value: "3.4x", label: "Increase in Google Business calls" },
  },
  {
    slug: "oem-network-rollout",
    dealership: "Regional OEM Dealer Network",
    industry: "OEMs",
    category: "SaaS Platform + Dealer Data Services",
    headline: "Standardizing lead quality across 40+ dealer outlets",
    metric: { value: "40+", label: "Dealer outlets onboarded" },
  },
  {
    slug: "used-car-chain-crm-rollout",
    dealership: "Multi-City Used Car Chain",
    industry: "Used Car Dealers",
    category: "CRM Solutions + Digital Marketing",
    headline: "Replacing spreadsheets with a single source of truth",
    metric: { value: "5x", label: "Faster lead response time" },
  },
];

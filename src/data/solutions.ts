export type Solution = {
  slug: string;
  name: string;
  outcome: string;
  description: string;
  serviceSlugs: string[];
  icon: "target" | "megaphone" | "messageCircle" | "camera" | "cloud";
};

export const solutions: Solution[] = [
  {
    slug: "verified-lead-generation",
    name: "Verified Lead Generation",
    outcome: "Fill your pipeline with buyers, not browsers",
    description:
      "Phone-verified leads matched to your exact make, model, and city, backed by clean dealer data so your sales team follows up faster and smarter.",
    serviceSlugs: ["verified-buyer-leads", "dealer-data-services"],
    icon: "target",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    outcome: "Turn ad spend into showroom footfall",
    description:
      "Search, social, and local campaigns engineered for cost-per-lead, not vanity impressions, across every channel your buyers actually use.",
    serviceSlugs: ["google-ads", "meta-ads", "local-seo", "digital-marketing"],
    icon: "megaphone",
  },
  {
    slug: "customer-engagement",
    name: "Customer Engagement & CRM",
    outcome: "Never lose a lead to a slow follow-up",
    description:
      "Automated WhatsApp journeys and a purpose-built CRM that tracks every enquiry from first message to closed sale.",
    serviceSlugs: ["whatsapp-marketing", "crm-solutions"],
    icon: "messageCircle",
  },
  {
    slug: "content-and-creative",
    name: "Content & Creative",
    outcome: "Make every listing and post look premium",
    description:
      "Showroom photography, walkaround videos, and scroll-stopping content produced for automotive buying journeys, not generic templates.",
    serviceSlugs: ["content-creation", "photography", "videography"],
    icon: "camera",
  },
  {
    slug: "growth-technology",
    name: "Growth Technology",
    outcome: "See your entire funnel in one dashboard",
    description:
      "AutoSutra's SaaS platform brings leads, campaigns, and analytics together, so you always know what's working and what to scale.",
    serviceSlugs: ["saas-platform"],
    icon: "cloud",
  },
];

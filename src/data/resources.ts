export type Resource = {
  slug: string;
  title: string;
  category: "Guide" | "Blog" | "Download";
  excerpt: string;
  readTime: string;
};

export const resources: Resource[] = [
  {
    slug: "dealers-guide-to-verified-buyer-leads",
    title: "The Dealer's Guide to Verified Buyer Leads",
    category: "Guide",
    excerpt:
      "What makes a lead 'verified,' how to qualify buyers faster, and how to structure your sales floor around lead quality instead of volume.",
    readTime: "8 min read",
  },
  {
    slug: "google-ads-benchmarks-for-indian-dealerships",
    title: "Google Ads Benchmarks for Indian Dealerships",
    category: "Guide",
    excerpt:
      "Cost-per-lead ranges by vehicle category and city tier, and how to know if your campaigns are underperforming.",
    readTime: "6 min read",
  },
  {
    slug: "why-whatsapp-is-the-highest-converting-channel",
    title: "Why WhatsApp Is the Highest-Converting Channel for Dealers",
    category: "Blog",
    excerpt:
      "A breakdown of response-time data and why WhatsApp automation consistently outperforms email and SMS for automotive leads.",
    readTime: "5 min read",
  },
  {
    slug: "local-seo-checklist-for-multi-location-dealerships",
    title: "Local SEO Checklist for Multi-Location Dealerships",
    category: "Guide",
    excerpt:
      "A step-by-step checklist for Google Business Profile, reviews, and local search visibility across every showroom location.",
    readTime: "7 min read",
  },
  {
    slug: "ev-dealership-launch-playbook",
    title: "EV Dealership Launch Playbook",
    category: "Download",
    excerpt:
      "A planning template for taking a new EV showroom from zero to consistent test-drive bookings in the first 90 days.",
    readTime: "Template",
  },
  {
    slug: "dealer-crm-comparison-worksheet",
    title: "Dealer CRM Comparison Worksheet",
    category: "Download",
    excerpt:
      "A worksheet to compare CRM options against the metrics that actually matter for dealership sales teams.",
    readTime: "Template",
  },
  {
    slug: "how-used-car-dealers-can-cut-cost-per-lead",
    title: "How Used Car Dealers Can Cut Cost-Per-Lead",
    category: "Blog",
    excerpt:
      "Practical levers, from creative to targeting and follow-up speed, that move cost-per-lead without cutting corners on quality.",
    readTime: "6 min read",
  },
  {
    slug: "reading-a-dealer-performance-report",
    title: "Reading a Dealer Performance Report",
    category: "Guide",
    excerpt:
      "How to interpret lead quality, conversion, and ROI metrics so you can make faster decisions about where to spend next.",
    readTime: "5 min read",
  },
];

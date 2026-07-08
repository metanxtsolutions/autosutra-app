// Planned content topics, honestly framed as upcoming. No articles are
// published yet. Wire each up to a real MDX post/guide as content ships.
export type Resource = {
  title: string;
  category: "Guide" | "Blog" | "Download";
  excerpt: string;
  readTime: string;
};

export const resources: Resource[] = [
  {
    title: "The Dealer's Guide to Verified Buyer Leads",
    category: "Guide",
    excerpt:
      "What makes a lead 'verified,' how to qualify buyers faster, and how to structure your sales floor around lead quality instead of volume.",
    readTime: "8 min read",
  },
  {
    title: "Google Ads Benchmarks for Indian Dealerships",
    category: "Guide",
    excerpt:
      "Cost-per-lead ranges by vehicle category and city tier, and how to know if your campaigns are underperforming.",
    readTime: "6 min read",
  },
  {
    title: "Why WhatsApp Is the Highest-Converting Channel for Dealers",
    category: "Blog",
    excerpt:
      "A breakdown of response-time data and why WhatsApp automation consistently outperforms email and SMS for automotive leads.",
    readTime: "5 min read",
  },
  {
    title: "Local SEO Checklist for Multi-Location Dealerships",
    category: "Guide",
    excerpt:
      "A step-by-step checklist for Google Business Profile, reviews, and local search visibility across every showroom location.",
    readTime: "7 min read",
  },
  {
    title: "EV Dealership Launch Playbook",
    category: "Download",
    excerpt:
      "A planning template for taking a new EV showroom from zero to consistent test-drive bookings in the first 90 days.",
    readTime: "Template",
  },
  {
    title: "Dealer CRM Comparison Worksheet",
    category: "Download",
    excerpt:
      "A worksheet to compare CRM options against the metrics that actually matter for dealership sales teams.",
    readTime: "Template",
  },
  {
    title: "How Used Car Dealers Can Cut Cost-Per-Lead",
    category: "Blog",
    excerpt:
      "Practical levers, from creative to targeting and follow-up speed, that move cost-per-lead without cutting corners on quality.",
    readTime: "6 min read",
  },
  {
    title: "Reading a Dealer Performance Report",
    category: "Guide",
    excerpt:
      "How to interpret lead quality, conversion, and ROI metrics so you can make faster decisions about where to spend next.",
    readTime: "5 min read",
  },
];

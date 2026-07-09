export type CoverCluster =
  | "leads"
  | "crm"
  | "local"
  | "whatsapp"
  | "ads"
  | "ai"
  | "retention";

export type Resource = {
  slug: string;
  title: string;
  category: "Guide" | "Blog" | "Download";
  excerpt: string;
  readTime: string;
  tags: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishedDate: string;
  updatedDate: string;
  featured?: boolean;
  coverCluster: CoverCluster;
};

export const resources: Resource[] = [
  {
    slug: "dealers-guide-to-verified-buyer-leads",
    title: "The Dealer's Guide to Verified Buyer Leads",
    category: "Guide",
    excerpt:
      "What makes a lead 'verified,' how to qualify buyers faster, and how to structure your sales floor around lead quality instead of volume.",
    readTime: "8 min read",
    tags: ["lead-generation", "sales-funnel"],
    primaryKeyword: "verified buyer leads for car dealerships",
    secondaryKeywords: [
      "qualified leads car dealership India",
      "how to verify car buyer leads",
    ],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    featured: true,
    coverCluster: "leads",
  },
  {
    slug: "google-ads-benchmarks-for-indian-dealerships",
    title: "Google Ads Benchmarks for Indian Dealerships",
    category: "Guide",
    excerpt:
      "Cost-per-lead ranges by vehicle category and city tier, and how to know if your campaigns are underperforming.",
    readTime: "6 min read",
    tags: ["google-ads", "digital-marketing"],
    primaryKeyword: "Google Ads cost per lead car dealership India",
    secondaryKeywords: [
      "Google Ads benchmarks automotive India",
      "car dealership PPC India",
    ],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    coverCluster: "ads",
  },
  {
    slug: "why-whatsapp-is-the-highest-converting-channel",
    title: "Why WhatsApp Is the Highest-Converting Channel for Dealers",
    category: "Blog",
    excerpt:
      "A breakdown of response-time data and why WhatsApp automation consistently outperforms email and SMS for automotive leads.",
    readTime: "5 min read",
    tags: ["whatsapp-marketing", "lead-generation"],
    primaryKeyword: "WhatsApp marketing for car dealerships",
    secondaryKeywords: [
      "WhatsApp automation automotive leads",
      "best channel for dealership leads India",
    ],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    featured: true,
    coverCluster: "whatsapp",
  },
  {
    slug: "local-seo-checklist-for-multi-location-dealerships",
    title: "Local SEO Checklist for Multi-Location Dealerships",
    category: "Guide",
    excerpt:
      "A step-by-step checklist for Google Business Profile, reviews, and local search visibility across every showroom location.",
    readTime: "7 min read",
    tags: ["local-seo", "google-business-profile"],
    primaryKeyword: "local SEO checklist car dealership",
    secondaryKeywords: [
      "multi-location dealership SEO India",
      "Google Business Profile dealership",
    ],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    coverCluster: "local",
  },
  {
    slug: "ev-dealership-launch-playbook",
    title: "EV Dealership Launch Playbook",
    category: "Download",
    excerpt:
      "A planning template for taking a new EV showroom from zero to consistent test-drive bookings in the first 90 days.",
    readTime: "Template",
    tags: ["dealer-growth", "ev-dealers"],
    primaryKeyword: "EV dealership launch plan India",
    secondaryKeywords: ["how to launch an EV showroom", "EV dealer marketing plan"],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    coverCluster: "leads",
  },
  {
    slug: "dealer-crm-comparison-worksheet",
    title: "Dealer CRM Comparison Worksheet",
    category: "Download",
    excerpt:
      "A worksheet to compare CRM options against the metrics that actually matter for dealership sales teams.",
    readTime: "Template",
    tags: ["crm", "sales-funnel"],
    primaryKeyword: "automotive CRM comparison",
    secondaryKeywords: ["dealer CRM software India", "best CRM for car dealers"],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    coverCluster: "crm",
  },
  {
    slug: "how-used-car-dealers-can-cut-cost-per-lead",
    title: "How Used Car Dealers Can Cut Cost-Per-Lead",
    category: "Blog",
    excerpt:
      "Practical levers, from creative to targeting and follow-up speed, that move cost-per-lead without cutting corners on quality.",
    readTime: "6 min read",
    tags: ["digital-marketing", "used-cars"],
    primaryKeyword: "reduce cost per lead used car dealer",
    secondaryKeywords: [
      "used car dealer marketing India",
      "lower cost per lead automotive",
    ],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    coverCluster: "ads",
  },
  {
    slug: "reading-a-dealer-performance-report",
    title: "Reading a Dealer Performance Report",
    category: "Guide",
    excerpt:
      "How to interpret lead quality, conversion, and ROI metrics so you can make faster decisions about where to spend next.",
    readTime: "5 min read",
    tags: ["analytics", "sales-funnel"],
    primaryKeyword: "dealership performance report metrics",
    secondaryKeywords: [
      "automotive marketing analytics India",
      "dealer ROI reporting",
    ],
    publishedDate: "2026-07-08",
    updatedDate: "2026-07-08",
    coverCluster: "ai",
  },
  {
    slug: "automotive-crm-features-that-actually-matter",
    title: "Automotive CRM Features That Actually Matter",
    category: "Guide",
    excerpt:
      "Beyond the feature checklist: which CRM capabilities genuinely change sales outcomes for dealerships, and which are noise.",
    readTime: "9 min read",
    tags: ["crm", "sales-funnel"],
    primaryKeyword: "automotive CRM features",
    secondaryKeywords: [
      "best CRM features for car dealers",
      "dealer CRM software India",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    featured: true,
    coverCluster: "crm",
  },
  {
    slug: "google-business-profile-setup-guide-for-dealerships",
    title: "Google Business Profile Setup Guide for Dealerships",
    category: "Guide",
    excerpt:
      "A complete walkthrough for setting up and optimizing Google Business Profile for a car, bike, or EV dealership in India.",
    readTime: "8 min read",
    tags: ["google-business-profile", "local-seo"],
    primaryKeyword: "Google Business Profile for car dealership",
    secondaryKeywords: [
      "GBP setup automotive dealer",
      "Google Maps dealership listing India",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "local",
  },
  {
    slug: "meta-ads-creative-that-converts-for-dealerships",
    title: "Meta Ads Creative That Converts for Dealerships",
    category: "Guide",
    excerpt:
      "What separates Instagram and Facebook ad creative that drives showroom visits from creative that just gets likes.",
    readTime: "7 min read",
    tags: ["meta-ads", "digital-marketing"],
    primaryKeyword: "Meta ads for car dealerships",
    secondaryKeywords: [
      "Facebook ads automotive India",
      "Instagram ads car dealership",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "ads",
  },
  {
    slug: "ai-for-dealerships-practical-use-cases",
    title: "AI for Dealerships: Practical Use Cases, Not Hype",
    category: "Blog",
    excerpt:
      "Where AI genuinely helps dealership marketing and operations today, and where it's still not worth the investment.",
    readTime: "7 min read",
    tags: ["ai", "analytics"],
    primaryKeyword: "AI for car dealerships",
    secondaryKeywords: [
      "artificial intelligence automotive marketing",
      "AI tools for dealers India",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    featured: true,
    coverCluster: "ai",
  },
  {
    slug: "customer-retention-playbook-for-dealerships",
    title: "The Customer Retention Playbook for Dealerships",
    category: "Guide",
    excerpt:
      "How dealerships keep buyers coming back for service, accessories, and their next vehicle, instead of losing them after the sale.",
    readTime: "8 min read",
    tags: ["customer-retention", "dealer-growth"],
    primaryKeyword: "customer retention for car dealerships",
    secondaryKeywords: [
      "dealership customer loyalty India",
      "repeat customers automotive",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "retention",
  },
  {
    slug: "reputation-management-guide-for-dealerships",
    title: "Reputation Management Guide for Dealerships",
    category: "Guide",
    excerpt:
      "How to build a review generation system, respond to negative feedback, and protect your dealership's reputation online.",
    readTime: "7 min read",
    tags: ["reputation-management", "local-seo"],
    primaryKeyword: "reputation management car dealership",
    secondaryKeywords: [
      "dealership online reviews India",
      "how to respond to negative reviews dealership",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "local",
  },
  {
    slug: "marketing-automation-for-automotive-dealers",
    title: "Marketing Automation for Automotive Dealers",
    category: "Guide",
    excerpt:
      "Which parts of dealership marketing are worth automating first, and how to do it without losing the personal touch buyers expect.",
    readTime: "7 min read",
    tags: ["marketing-automation", "crm"],
    primaryKeyword: "marketing automation for car dealers",
    secondaryKeywords: [
      "automotive marketing automation India",
      "dealer follow-up automation",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "crm",
  },
  {
    slug: "automotive-analytics-metrics-that-matter",
    title: "Automotive Analytics: The Metrics That Actually Matter",
    category: "Guide",
    excerpt:
      "Cut through vanity metrics. The specific numbers dealership owners should track weekly to know if marketing is working.",
    readTime: "6 min read",
    tags: ["analytics", "sales-funnel"],
    primaryKeyword: "automotive marketing metrics",
    secondaryKeywords: [
      "dealership KPI tracking India",
      "car dealer marketing analytics",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "ai",
  },
  {
    slug: "sales-funnel-optimization-for-dealerships",
    title: "Sales Funnel Optimization for Dealerships",
    category: "Guide",
    excerpt:
      "Mapping the real dealership buying journey, and where most dealers leak buyers between enquiry and delivery.",
    readTime: "8 min read",
    tags: ["sales-funnel", "lead-generation"],
    primaryKeyword: "sales funnel for car dealerships",
    secondaryKeywords: [
      "automotive sales funnel optimization",
      "dealership conversion rate India",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "leads",
  },
  {
    slug: "dealership-growth-strategies-for-2026",
    title: "Dealership Growth Strategies for 2026",
    category: "Blog",
    excerpt:
      "The growth levers worth prioritizing this year for Indian dealerships, from verified leads to WhatsApp-first follow-up.",
    readTime: "7 min read",
    tags: ["dealer-growth", "lead-generation"],
    primaryKeyword: "dealership growth strategies India",
    secondaryKeywords: [
      "how to grow a car dealership",
      "automotive dealer marketing trends India",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "leads",
  },
  {
    slug: "whatsapp-business-api-vs-whatsapp-business-app",
    title: "WhatsApp Business API vs. WhatsApp Business App for Dealers",
    category: "Guide",
    excerpt:
      "Which one your dealership actually needs, and at what point the free app stops being enough.",
    readTime: "6 min read",
    tags: ["whatsapp-marketing", "crm"],
    primaryKeyword: "WhatsApp Business API for car dealers",
    secondaryKeywords: [
      "WhatsApp Business App vs API",
      "WhatsApp automation dealership",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "whatsapp",
  },
  {
    slug: "google-ads-vs-meta-ads-for-car-dealerships",
    title: "Google Ads vs. Meta Ads for Car Dealerships",
    category: "Blog",
    excerpt:
      "Neither channel wins outright. How to split budget between search intent and social discovery for the best return.",
    readTime: "7 min read",
    tags: ["google-ads", "meta-ads", "digital-marketing"],
    primaryKeyword: "Google Ads vs Meta Ads car dealership",
    secondaryKeywords: [
      "best ad platform for dealerships",
      "automotive ad budget split India",
    ],
    publishedDate: "2026-07-10",
    updatedDate: "2026-07-10",
    coverCluster: "ads",
  },
];

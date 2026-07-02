export type Service = {
  slug: string;
  name: string;
  summary: string;
  idealFor: string;
  popular?: boolean;
  benefits: string[];
  howItWorks: string[];
  icon:
    | "target"
    | "megaphone"
    | "database"
    | "search"
    | "share2"
    | "mapPin"
    | "messageCircle"
    | "penTool"
    | "camera"
    | "video"
    | "layers"
    | "cloud";
};

export const services: Service[] = [
  {
    slug: "verified-buyer-leads",
    name: "Verified Buyer Leads",
    summary:
      "Ready-to-buy, phone-verified leads matched to your dealership's exact make, model, and city.",
    idealFor: "Dealers who want sales-ready buyers, not form-fills",
    popular: true,
    benefits: [
      "Every lead phone-verified for intent, budget, and location",
      "Matched to your exact inventory — make, model, variant, city",
      "Delivered straight into WhatsApp and your CRM in real time",
    ],
    howItWorks: [
      "We define your ideal buyer profile and target inventory",
      "Verified demand is captured across search, social, and marketplaces",
      "Leads are phone-qualified and routed to your sales team instantly",
    ],
    icon: "target",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    summary:
      "Full-funnel campaigns across search, social, and display, built specifically for automotive buying cycles.",
    idealFor: "Dealers who need one team owning the whole funnel",
    benefits: [
      "One strategy across search, social, and display — no channel silos",
      "Creative and targeting tuned to how automotive buyers actually shop",
      "Monthly reporting tied to leads and footfall, not just impressions",
    ],
    howItWorks: [
      "Audit your current funnel and identify the highest-leverage channels",
      "Launch coordinated campaigns across every stage of the buying journey",
      "Reallocate spend weekly toward what's converting",
    ],
    icon: "megaphone",
  },
  {
    slug: "dealer-data-services",
    name: "Dealer Data Services",
    summary:
      "Clean, structured dealer and buyer intelligence that powers sharper targeting and faster follow-up.",
    idealFor: "Multi-outlet dealers drowning in spreadsheets",
    benefits: [
      "Buyer and inventory data cleaned, structured, and de-duplicated",
      "Behavioral insights on what buyers actually respond to",
      "A single data layer that every other service plugs into",
    ],
    howItWorks: [
      "Consolidate lead, inventory, and CRM data into one clean source",
      "Layer in behavioral and intent signals from live campaigns",
      "Feed sharper targeting back into every active channel",
    ],
    icon: "database",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    summary:
      "Search, Performance Max, and local campaigns engineered for cost-per-lead, not just clicks.",
    idealFor: "Dealers who want intent-driven search traffic",
    popular: true,
    benefits: [
      "Search, Performance Max, and local campaigns managed end-to-end",
      "Bidding optimized for cost-per-lead, not clicks or impressions",
      "Negative keyword and placement hygiene to cut wasted spend",
    ],
    howItWorks: [
      "Structure campaigns around your highest-margin models and services",
      "Launch with conversion tracking wired to real leads, not form views",
      "Optimize bids and budgets weekly against cost-per-lead targets",
    ],
    icon: "search",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    summary:
      "Instagram and Facebook campaigns that turn scroll-stopping creative into showroom footfall.",
    idealFor: "Dealers who want to build awareness and demand",
    benefits: [
      "Scroll-stopping creative built for Instagram and Facebook feeds",
      "Lookalike and interest targeting tuned to your buyer profile",
      "Retargeting sequences that bring browsers back to book a visit",
    ],
    howItWorks: [
      "Build creative variations around your best-performing inventory",
      "Launch prospecting and retargeting campaigns in parallel",
      "Double down on the creative and audiences that drive footfall",
    ],
    icon: "share2",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    summary:
      "Google Business Profile, maps ranking, and local search visibility that wins the 'near me' search.",
    idealFor: "Dealers competing on local map pack visibility",
    benefits: [
      "Google Business Profile fully optimized across every location",
      "Review generation and response strategy that builds local trust",
      "Maps and local pack ranking tracked against named competitors",
    ],
    howItWorks: [
      "Audit and optimize every location's Google Business Profile",
      "Build a steady cadence of reviews, posts, and local citations",
      "Track map pack rankings and adjust for underperforming locations",
    ],
    icon: "mapPin",
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    summary:
      "Automated, compliant WhatsApp journeys that nurture leads from enquiry to test drive.",
    idealFor: "Dealers who lose leads to slow follow-up",
    popular: true,
    benefits: [
      "Instant, automated replies the moment a lead comes in",
      "Compliant nurture journeys that guide buyers to a test drive",
      "Sales team notified in real time so no enquiry goes cold",
    ],
    howItWorks: [
      "Map your enquiry-to-test-drive journey stage by stage",
      "Automate the first response and nurture sequence on WhatsApp",
      "Hand off to your sales team the moment intent is confirmed",
    ],
    icon: "messageCircle",
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    summary:
      "Scroll-stopping automotive content — reels, carousels, and copy — built for every platform.",
    idealFor: "Dealers who need a consistent content engine",
    benefits: [
      "A monthly content calendar built around your inventory and offers",
      "Platform-native formats — reels, carousels, and static posts",
      "Copy written in your dealership's voice, not generic templates",
    ],
    howItWorks: [
      "Plan a content calendar around launches, offers, and inventory",
      "Produce platform-native content for each channel",
      "Review performance monthly and double down on what resonates",
    ],
    icon: "penTool",
  },
  {
    slug: "photography",
    name: "Photography",
    summary:
      "Showroom and vehicle photography that makes every listing look premium, online and in-store.",
    idealFor: "Dealers whose listings need to look premium",
    benefits: [
      "Consistent, premium photography across every vehicle listing",
      "Showroom and lifestyle shots for social and website use",
      "Fast turnaround so new inventory never sits unlisted",
    ],
    howItWorks: [
      "Schedule a recurring shoot cadence around new inventory",
      "Capture consistent, premium shots for every listing",
      "Deliver edited assets ready for web, social, and print",
    ],
    icon: "camera",
  },
  {
    slug: "videography",
    name: "Videography",
    summary:
      "Walkaround videos, testimonials, and brand films produced for dealership marketing at scale.",
    idealFor: "Dealers who want video to close more deals",
    benefits: [
      "Walkaround videos that answer buyer questions before they ask",
      "Customer testimonial films that build trust at scale",
      "Short-form cuts optimized for reels and paid social",
    ],
    howItWorks: [
      "Identify the models and moments worth filming each month",
      "Produce walkaround, testimonial, and brand video content",
      "Cut footage into long and short-form assets for every channel",
    ],
    icon: "video",
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    summary:
      "Purpose-built automotive CRM that tracks every lead from first click to closed sale.",
    idealFor: "Dealers ready to retire spreadsheets for good",
    benefits: [
      "Every lead tracked from first click to closed sale in one place",
      "Automated task reminders so follow-up never slips",
      "Built for automotive sales stages, not generic pipelines",
    ],
    howItWorks: [
      "Map your sales stages from enquiry to delivery",
      "Migrate existing leads and inventory into the CRM",
      "Train your team and automate follow-up reminders",
    ],
    icon: "layers",
  },
  {
    slug: "saas-platform",
    name: "SaaS Platform",
    summary:
      "AutoSutra's dealer growth platform — leads, campaigns, and analytics in a single dashboard.",
    idealFor: "Dealers who want one dashboard for everything",
    benefits: [
      "Leads, campaigns, and CRM data in a single live dashboard",
      "Custom reporting built around the metrics you actually track",
      "One login for every AutoSutra service you run",
    ],
    howItWorks: [
      "Connect your active services into the AutoSutra platform",
      "Configure dashboards around your team's key metrics",
      "Scale usage as you add more services and locations",
    ],
    icon: "cloud",
  },
];

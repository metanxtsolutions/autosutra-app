export type CaseStudyContent = {
  challenge: string;
  approach: string[];
  results: string;
  serviceSlugs: string[];
};

// Illustrative narrative expansion of the teasers in case-studies.ts, in the
// same voice already shown on the home page and case studies index. No real
// client data was supplied yet. Replace with verified, client-approved
// detail before launch.
export const caseStudyContent: Record<string, CaseStudyContent> = {
  "multi-brand-dealership-lead-growth": {
    challenge:
      "A multi-brand dealership network was generating leads from multiple sources, but sales teams were spending as much time filtering out low-intent enquiries as they were following up on real buyers. Showroom footfall wasn't keeping pace with ad spend.",
    approach: [
      "Rebuilt lead qualification around phone-verified intent, budget, and model fit using Verified Buyer Leads",
      "Restructured Google Ads campaigns around the network's highest-margin models, with conversion tracking wired to real sales-team follow-up rather than form submissions",
      "Routed every qualified lead into WhatsApp and the sales team's existing workflow within minutes of capture",
    ],
    results:
      "Within one quarter, qualified showroom footfall across the network reached 2.1x its starting baseline, driven primarily by tighter lead qualification rather than a larger ad budget. Sales teams reported spending less time on unqualified enquiries and more time closing.",
    serviceSlugs: ["verified-buyer-leads", "google-ads"],
  },
  "used-car-dealer-cost-per-lead": {
    challenge:
      "A regional used car dealer was scaling ad spend to hit volume targets, but cost-per-lead was climbing just as fast as spend, and slow manual follow-up meant many leads went cold before a salesperson reached them.",
    approach: [
      "Rebuilt Meta Ads creative and audience targeting around the dealer's actual inventory mix and price bands, cutting spend on audiences that weren't converting",
      "Layered in lookalike and retargeting sequences to bring back buyers who had browsed but not enquired",
      "Automated instant WhatsApp replies and a structured nurture sequence so no enquiry sat unanswered overnight",
    ],
    results:
      "Cost per verified lead dropped 42% during the engagement, even as monthly lead volume scaled. The instant WhatsApp response was the single biggest driver of that shift, since leads that get a reply within minutes convert at a meaningfully higher rate than ones that wait hours.",
    serviceSlugs: ["meta-ads", "whatsapp-marketing"],
  },
  "ev-dealership-digital-launch": {
    challenge:
      "A new EV showroom was launching with no existing customer base, no brand recognition in its market, and no system to track enquiries beyond a shared spreadsheet.",
    approach: [
      "Built a full-funnel digital marketing launch plan across search, social, and display timed to the showroom's opening",
      "Stood up a purpose-built CRM before launch day so every enquiry, from any channel, landed in one pipeline instead of scattered spreadsheets",
      "Used early enquiry data to reallocate ad spend weekly toward the channels and creative actually driving test drive bookings",
    ],
    results:
      "The showroom booked more than 700 test drives in its first 90 days, with every one tracked from first click to appointment in the new CRM. That visibility let the team spot which channels were working within the first few weeks, well before a quarterly report would have shown it.",
    serviceSlugs: ["digital-marketing", "crm-solutions"],
  },
  "bike-dealership-local-seo": {
    challenge:
      "A bike dealership with multiple showrooms across one city had inconsistent, outdated Google Business Profiles, and each location was effectively competing against the others in local search instead of the actual competition.",
    approach: [
      "Audited and rebuilt every location's Google Business Profile with consistent, accurate information and location-specific detail",
      "Built a steady cadence of reviews, local posts, and location-specific content to strengthen each showroom's individual map presence",
      "Produced content calibrated to each showroom's neighborhood and inventory, rather than one generic citywide campaign",
    ],
    results:
      "Calls generated directly from Google Business listings grew 3.4x across the dealership's showrooms, with the largest gains at locations that previously had the weakest profiles. Map pack visibility improved fastest in searches that included a neighborhood or landmark name.",
    serviceSlugs: ["local-seo", "content-creation"],
  },
  "oem-network-rollout": {
    challenge:
      "A regional OEM's dealer network had grown to more than 40 outlets, each running its own lead process with its own definition of a qualified lead, making it difficult for the OEM to compare performance across outlets or forecast demand accurately.",
    approach: [
      "Consolidated lead, inventory, and CRM data from every outlet into a single clean, de-duplicated data layer",
      "Rolled out the AutoSutra SaaS Platform so every outlet reported against the same lead-quality definitions and dashboards",
      "Layered behavioral and intent signals into that shared data layer to sharpen targeting for every outlet's local campaigns",
    ],
    results:
      "More than 40 outlets were onboarded onto a single platform with standardized reporting, giving the OEM's regional team its first consistent, apples-to-apples view of performance across the network. Individual outlets kept running their local campaigns, but every one of them now reports against the same numbers.",
    serviceSlugs: ["saas-platform", "dealer-data-services"],
  },
  "used-car-chain-crm-rollout": {
    challenge:
      "A used car chain operating across multiple cities was running its entire sales pipeline on shared spreadsheets, with no automated reminders and no visibility into which leads a given city's team had actually followed up on.",
    approach: [
      "Mapped the chain's sales stages from first enquiry to delivery and migrated every existing lead into a purpose-built automotive CRM",
      "Automated task reminders so a lead could no longer sit untouched without a salesperson being flagged",
      "Coordinated digital marketing campaigns across cities so every new lead entered the CRM automatically instead of a manual spreadsheet update",
    ],
    results:
      "Average lead response time across the chain dropped to a fifth of its previous baseline, a 5x improvement, once automated reminders replaced manual spreadsheet tracking. Regional managers also gained, for the first time, a live view of pipeline health across every city instead of a weekly manual rollup.",
    serviceSlugs: ["crm-solutions", "digital-marketing"],
  },
};

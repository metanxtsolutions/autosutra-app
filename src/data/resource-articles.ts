export type ResourceSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ResourceArticle = {
  intro: string;
  sections: ResourceSection[];
  relatedServiceSlugs: string[];
};

export const resourceArticles: Record<string, ResourceArticle> = {
  "dealers-guide-to-verified-buyer-leads": {
    intro:
      "Most dealerships don't have a lead problem. They have a verification problem. A form-fill from someone browsing on their lunch break looks identical in your CRM to a buyer ready to sign this week, until your sales team wastes an hour finding out which is which.",
    sections: [
      {
        heading: "What 'verified' actually means",
        body: [
          "A verified lead has been phone-confirmed for three things before it ever reaches your sales floor: genuine intent to buy within a defined window, a realistic budget for the vehicle they're enquiring about, and a location your dealership can actually serve.",
          "That's a different standard from a lead source that just confirms the phone number connects. Plenty of 'verified' leads in the market are verified only in the sense that someone answered the call, not that they're close to a purchase decision.",
        ],
      },
      {
        heading: "Why volume without verification hurts your sales floor",
        body: [
          "Every hour a salesperson spends chasing an unqualified enquiry is an hour not spent on a buyer who's actually ready. Unverified volume doesn't just waste time, it trains your team to treat every lead with the same low expectation, which slows down response time across the board, including for the buyers who were ready to move.",
        ],
      },
      {
        heading: "How to qualify a lead in under two minutes",
        body: [
          "If you're generating your own leads or reviewing a vendor's, a fast qualification call should confirm four things without feeling like an interrogation:",
        ],
        bullets: [
          "Timeline: are they buying in the next 2 to 4 weeks, or just researching?",
          "Budget fit: does their stated budget match the vehicle they enquired about, including on-road costs?",
          "Financing status: pre-approved, needs financing, or paying cash?",
          "Decision authority: are they the buyer, or gathering information for someone else?",
        ],
      },
      {
        heading: "Structuring your sales floor around lead quality",
        body: [
          "Once leads are actually verified, the sales process should change too. Route high-intent leads to your fastest closers first, set a response-time target under 5 minutes for verified leads specifically, and track conversion rate by lead source, not just lead count. A source that sends fewer, better leads should outperform one that sends more, weaker ones, and your reporting should make that visible.",
        ],
      },
      {
        heading: "Red flags that a lead source is padding numbers",
        body: [
          "Watch for leads with no call-back number that connects, identical enquiry text submitted by multiple 'different' buyers, a conversion rate that drops sharply the moment your team follows up, or a vendor who can't tell you what verification steps they actually run before a lead is sent to you.",
        ],
      },
    ],
    relatedServiceSlugs: ["verified-buyer-leads", "dealer-data-services"],
  },

  "google-ads-benchmarks-for-indian-dealerships": {
    intro:
      "Dealers ask us for a single cost-per-lead number to benchmark against constantly, and the honest answer is that a national average is close to useless. Cost-per-lead for a premium SUV in Mumbai and an entry hatchback in a Tier 3 city can differ by multiples, and both can be performing well for their category.",
    sections: [
      {
        heading: "Why national benchmarks mislead dealers",
        body: [
          "Google Ads cost-per-lead is driven by category competition, city-tier auction pricing, seasonality, and how tightly your campaign is targeted. A benchmark that averages across all of that tells you almost nothing about whether your specific campaign, for your specific vehicle category, in your specific city, is healthy.",
        ],
      },
      {
        heading: "What actually moves cost-per-lead",
        body: [
          "Instead of chasing an external number, track how these levers move your own cost-per-lead over time:",
        ],
        bullets: [
          "Vehicle category: entry hatchbacks and two-wheelers typically see lower cost-per-click than premium SUVs and EVs, but often need higher volume to hit the same revenue target",
          "City tier: Tier 1 metros carry higher auction competition and cost-per-click, but usually convert at a more predictable rate; Tier 2 and 3 cities can be cheaper per click with more variable intent",
          "Campaign structure: broad, unsegmented campaigns almost always cost more per qualified lead than campaigns split by model and city",
          "Seasonality: festive periods, especially the run-up to Dhanteras and Diwali, see higher competition and cost-per-click across the board, offset by meaningfully higher purchase intent",
        ],
      },
      {
        heading: "How to benchmark against yourself, not the market",
        body: [
          "The most useful benchmark is your own 90-day trailing average, segmented by campaign. If a campaign's cost-per-lead moves more than 20 to 30 percent outside that range without a clear cause like a budget change or a competitor entering the auction, that's your signal to investigate, not an external number you found in an article.",
        ],
      },
      {
        heading: "Signs your campaigns are underperforming",
        body: [
          "A campaign is worth auditing when cost-per-click rises without a corresponding rise in leads, when your lead-to-showroom-visit rate drops even as lead volume holds steady, or when a small number of keywords are consuming most of the budget while contributing few conversions.",
        ],
      },
    ],
    relatedServiceSlugs: ["google-ads", "digital-marketing"],
  },

  "why-whatsapp-is-the-highest-converting-channel": {
    intro:
      "Ask any dealership sales manager where their fastest replies come from, and the answer in India is almost always WhatsApp. It isn't a trend. It's the channel Indian car and bike buyers already live in, which makes it the shortest distance between an enquiry and a test drive.",
    sections: [
      {
        heading: "Why India is different",
        body: [
          "WhatsApp's reach in India isn't comparable to email or SMS penetration in most other markets. Buyers expect to be able to message a dealership the same way they message a friend, get a quick reply, and share a photo of a trade-in vehicle or a finance document without switching apps. A dealership that only offers a contact form or a call centre queue is asking buyers to work harder than they're willing to.",
        ],
      },
      {
        heading: "Response time is the whole game",
        body: [
          "The single biggest driver of WhatsApp's conversion advantage is speed. A buyer who messages three dealerships at once will typically move forward with whichever one responds first and sounds most helpful, regardless of price. Automating the first response, even just an acknowledgment with next steps, removes the single biggest point of lead leakage: the gap between enquiry and human contact.",
        ],
      },
      {
        heading: "Automated does not mean impersonal",
        body: [
          "The dealerships that get this wrong treat automation as a replacement for their sales team. The ones that get it right use automation for the first response and routine follow-up, then hand off to a real person the moment intent is confirmed. The buyer gets speed without losing the human conversation that actually closes a sale.",
        ],
      },
      {
        heading: "A simple enquiry-to-test-drive flow",
        body: [
          "A workable WhatsApp journey doesn't need to be complex:",
        ],
        bullets: [
          "Instant acknowledgment the moment an enquiry comes in, with an estimated response time",
          "A short automated qualification: model interest, city, and preferred contact time",
          "Automatic handoff to a salesperson once intent is confirmed, with the qualification answers attached",
          "A scheduled follow-up if the buyer goes quiet for more than 48 hours",
        ],
      },
      {
        heading: "Compliance is not optional",
        body: [
          "Commercial messaging in India sits under TRAI regulations and WhatsApp's own business messaging policies. Buyers need to opt in before receiving marketing messages, and templates for business-initiated conversations need approval. This isn't a reason to avoid WhatsApp automation, but it is a reason to set it up properly rather than bolting together tools that risk your number getting flagged.",
        ],
      },
    ],
    relatedServiceSlugs: ["whatsapp-marketing", "crm-solutions"],
  },

  "local-seo-checklist-for-multi-location-dealerships": {
    intro:
      "If your dealership has more than one location, a single website and one shared Google Business Profile is costing you visibility in every city except the one your head office is in. Local SEO for multi-location dealers is a different discipline from single-showroom SEO, and most groups underinvest in it.",
    sections: [
      {
        heading: "Claim and verify every location separately",
        body: [
          "Each showroom needs its own Google Business Profile, verified independently, with its own address, phone number, hours, and photos. A single profile trying to represent multiple locations will confuse Google's local ranking system and cost you visibility in the map pack for every city except one.",
        ],
      },
      {
        heading: "Keep name, address, and phone number identical everywhere",
        body: [
          "Search engines cross-reference your business details across your website, Google Business Profile, and any directory listing. Even small inconsistencies, like 'Rd' versus 'Road' or a slightly different phone number on an old directory listing, weaken the trust signal that helps you rank locally. Audit this at least twice a year.",
        ],
      },
      {
        heading: "Reviews: asking, responding, and never faking",
        body: [
          "Review volume and recency are strong local ranking signals, and buyers read them before they read your website. Build a simple habit of asking every satisfied buyer for a review at delivery, and respond to every review, positive or negative, within a few days. Never use incentivized or fake reviews. Google actively penalizes this, and it's the fastest way to lose the trust you're trying to build.",
        ],
      },
      {
        heading: "Location pages, not one generic page",
        body: [
          "Each showroom deserves its own page on your website with genuinely unique content, its address, embedded map, local team, and inventory specific to that location. A single 'Contact Us' page listing five addresses does nothing for local search and very little for a buyer trying to find their nearest showroom.",
        ],
      },
      {
        heading: "Photos and posts on a real cadence",
        body: [
          "Google Business Profiles that post updates and add new photos regularly are treated as more active and relevant than ones that go quiet. A simple monthly cadence of new showroom photos, offers, and posts per location keeps every profile competitive.",
        ],
      },
      {
        heading: "Track each location separately",
        body: [
          "Map pack ranking, click-to-call volume, and direction requests should be tracked per location, not rolled up into one number. A strong-performing flagship showroom can hide a struggling secondary location if you only look at combined totals.",
        ],
      },
    ],
    relatedServiceSlugs: ["local-seo", "content-creation"],
  },

  "ev-dealership-launch-playbook": {
    intro:
      "Launching an EV showroom is not the same playbook as launching a conventional dealership. Buyers are newer to the category, have more questions about range and charging, and need more education before they'll commit to a test drive. This is a 90-day framework for taking a new EV showroom from opening day to a consistent test-drive pipeline.",
    sections: [
      {
        heading: "Weeks 1 to 4: foundation",
        body: [
          "Before spending on demand generation, get the basics that every later stage depends on in place:",
        ],
        bullets: [
          "Google Business Profile live and verified, with EV-specific photos of the showroom and charging setup",
          "A dedicated landing page per model that answers range, charging time, and running-cost questions upfront",
          "WhatsApp and CRM set up to capture and route enquiries before any paid traffic starts",
          "Staff trained on the most common buyer objections: range anxiety, charging access, and resale value",
        ],
      },
      {
        heading: "Weeks 5 to 8: education-led demand",
        body: [
          "EV buyers convert slower than conventional buyers because they're evaluating a bigger lifestyle change, not just a vehicle. This phase should prioritize content and campaigns that answer questions before asking for a test drive:",
        ],
        bullets: [
          "Content addressing the three most common objections directly, in plain language",
          "Retargeting for anyone who visited a model page but didn't enquire",
          "Local awareness campaigns focused on charging infrastructure in your service area",
          "A simple, low-friction way to book a test drive without a hard sales conversation first",
        ],
      },
      {
        heading: "Weeks 9 to 12: conversion and referral",
        body: [
          "By this stage, awareness should be converting into a steady rhythm of test drives. Shift focus toward closing and turning early buyers into advocates:",
        ],
        bullets: [
          "Financing and running-cost comparisons made concrete with real numbers for your specific models",
          "A referral incentive for early buyers, since EV buyers heavily influence each other's decisions",
          "Retargeting test-drive completers who haven't yet purchased",
          "A review and testimonial push from your first delivered customers",
        ],
      },
      {
        heading: "Want this as an editable worksheet?",
        body: [
          "This framework works as a starting checklist for your own launch plan. If you'd like it as an editable worksheet mapped to your specific models and city, our team can put one together with you.",
        ],
      },
    ],
    relatedServiceSlugs: ["digital-marketing", "content-creation", "crm-solutions"],
  },

  "dealer-crm-comparison-worksheet": {
    intro:
      "Most CRM comparisons focus on features. Dealerships should focus on whether a CRM fits how a sales floor actually works: fast lead capture, clear follow-up reminders, and reporting that shows which sources and salespeople are actually converting. Use this framework to compare options against what matters, not a generic feature checklist.",
    sections: [
      {
        heading: "Lead capture and routing",
        body: [
          "Score each option on how quickly a lead from your website, WhatsApp, and ad campaigns lands in the CRM, and how it gets assigned. Manual assignment slows response time. Automated routing by location, model interest, or salesperson availability is worth prioritizing over almost any other feature.",
        ],
      },
      {
        heading: "Follow-up and task management",
        body: [
          "The best CRM in the world doesn't help if follow-up tasks aren't visible to the salesperson and their manager. Check whether the system automatically creates a follow-up task when a lead goes untouched, and whether managers can see overdue follow-ups without digging.",
        ],
      },
      {
        heading: "Reporting that answers real questions",
        body: [
          "Ask a vendor to show you, live, how their reporting answers three questions: which lead source has the best conversion rate this month, which salesperson has the fastest response time, and which leads have gone cold without follow-up. If they can't answer these in under a minute, the reporting isn't built for a dealership sales floor.",
        ],
      },
      {
        heading: "Integration with your existing channels",
        body: [
          "Confirm the CRM connects natively to WhatsApp Business, your website forms, and whichever ad platforms you run campaigns on. A CRM that requires manual data entry from any major lead source will lose adoption from your sales team within weeks.",
        ],
      },
      {
        heading: "Ease of adoption",
        body: [
          "The most feature-rich CRM is worthless if your sales team avoids using it. Weight ease of use and mobile access heavily. A salesperson on the showroom floor needs to log a call or update a lead status in seconds, not navigate a desktop-only interface.",
        ],
      },
      {
        heading: "Want this as an editable worksheet?",
        body: [
          "This framework works as a scoring sheet if you're comparing two or three CRM options side by side. If you'd like a version pre-filled for your shortlist, our team can help you put one together.",
        ],
      },
    ],
    relatedServiceSlugs: ["crm-solutions", "saas-platform"],
  },

  "how-used-car-dealers-can-cut-cost-per-lead": {
    intro:
      "Used car dealers operate on thinner margins than new car dealers, which makes cost-per-lead a direct hit to profitability rather than just a marketing metric. The good news is that cost-per-lead usually has more room to improve for used car campaigns than dealers assume, without cutting corners on lead quality.",
    sections: [
      {
        heading: "Refresh creative before you touch budget",
        body: [
          "Ad fatigue sets in faster than most dealers expect, especially on Meta platforms where the same audience sees your ads repeatedly. If cost-per-lead has been climbing gradually rather than spiking, stale creative is usually the first place to look, before assuming the audience or budget is the problem.",
        ],
      },
      {
        heading: "Tighten targeting around actual buyers, not browsers",
        body: [
          "Broad targeting brings in volume but dilutes lead quality, which raises effective cost-per-lead even when cost-per-click looks fine. Narrowing targeting around demonstrated intent signals, like recent auto-category engagement or lookalike audiences built from past buyers rather than past leads, consistently improves lead quality without much extra spend.",
        ],
      },
      {
        heading: "Fix response speed before fixing ad spend",
        body: [
          "A slow follow-up doesn't just lose the sale, it wastes the lead entirely, which means the cost you paid to generate it delivered zero return. Before increasing budget to generate more leads, confirm your team is responding within minutes, not hours. This is usually the highest-leverage, lowest-cost fix available.",
        ],
      },
      {
        heading: "Use negative keywords aggressively",
        body: [
          "Used car search campaigns are especially prone to wasted spend from browsers researching prices, spare parts, or unrelated searches that happen to share keywords with your ads. A regularly updated negative keyword list is one of the simplest ways to cut wasted spend without touching your core targeting.",
        ],
      },
      {
        heading: "Retarget instead of only prospecting",
        body: [
          "Used car buyers often take longer to decide than new car buyers, comparing multiple listings before committing. A retargeting campaign aimed at people who viewed specific listings but didn't enquire typically converts at a meaningfully lower cost-per-lead than cold prospecting, because the intent is already established.",
        ],
      },
    ],
    relatedServiceSlugs: ["meta-ads", "google-ads", "whatsapp-marketing"],
  },

  "reading-a-dealer-performance-report": {
    intro:
      "A performance report full of numbers isn't useful if you can't quickly tell whether last month was good or bad. This is a practical guide to reading a dealer marketing report the way a decision-maker should: fast, and focused on what to change next.",
    sections: [
      {
        heading: "Start with the funnel, not the totals",
        body: [
          "Total leads and total spend tell you almost nothing on their own. Start with the funnel: leads generated, leads verified, showroom visits booked, and sales closed. A healthy report shows a consistent conversion rate at each stage. A report that only highlights lead volume without showing what happened after is hiding the number that actually matters.",
        ],
      },
      {
        heading: "The core metrics, defined plainly",
        body: [
          "Cost-per-lead tells you what you paid to generate interest. Lead-to-visit rate tells you whether that interest was real. Visit-to-sale rate tells you whether your showroom is closing what marketing sends it. Cost-per-sale, the number that ties all three together, is the one that should drive budget decisions, not cost-per-lead in isolation.",
        ],
      },
      {
        heading: "Reading a funnel that's leaking",
        body: [
          "If cost-per-lead is low but lead-to-visit rate is weak, the leads are probably low-intent, regardless of how cheap they were. If lead-to-visit rate is strong but visit-to-sale rate is weak, the problem has shifted from marketing to the showroom experience or pricing. A good report should make it obvious which stage of the funnel needs attention this month, not just present a wall of numbers.",
        ],
      },
      {
        heading: "Red flags worth investigating",
        body: [
          "Watch for a lead source with a conversion rate meaningfully below your other sources, a sudden spend increase without a corresponding lead increase, or a growing gap between leads generated and leads actually followed up on. Any of these usually points to a specific, fixable problem rather than a market-wide trend.",
        ],
      },
      {
        heading: "Build a weekly review habit",
        body: [
          "Monthly reports are useful for trend spotting, but weekly reviews catch problems while they're still cheap to fix. A 15-minute weekly check of lead volume, response time, and any campaign with a sudden cost spike prevents small issues from becoming a wasted month of spend.",
        ],
      },
    ],
    relatedServiceSlugs: ["dealer-data-services", "saas-platform", "crm-solutions"],
  },
};

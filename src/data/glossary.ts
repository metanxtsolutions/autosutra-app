export type GlossaryCategory =
  | "Leads & Sales"
  | "Advertising"
  | "Local & Reputation"
  | "Messaging & Compliance"
  | "Data & Systems"
  | "Dealer Operations";

export type GlossaryTerm = {
  slug: string;
  term: string;
  // Abbreviations or alternative names buyers and vendors use for the same
  // thing. Rendered on the page and emitted as schema.org alternateName.
  alsoKnownAs?: string[];
  category: GlossaryCategory;
  // One or two sentences that answer "what is it" on their own. This is the
  // paragraph directly under the H1 and the DefinedTerm description, so it
  // has to stand alone when quoted out of context.
  definition: string;
  // Supporting explanation, written for an Indian dealership reader.
  body: string[];
  relatedTermSlugs: string[];
  relatedServiceSlugs: string[];
  relatedResourceSlugs?: string[];
};

export const glossaryCategories: GlossaryCategory[] = [
  "Leads & Sales",
  "Advertising",
  "Local & Reputation",
  "Messaging & Compliance",
  "Data & Systems",
  "Dealer Operations",
];

// Plain-English definitions of the terms a dealership meets in lead
// generation, advertising, local search, messaging compliance, and dealer
// systems. Definitions describe the concept as it is generally understood;
// nothing here claims a statistic, benchmark, or regulation that is not
// already stated elsewhere on the site or in public regulator guidance.
export const glossaryTerms: GlossaryTerm[] = [
  // ---------------------------------------------------------------- Leads
  {
    slug: "verified-lead",
    term: "Verified lead",
    alsoKnownAs: ["Verified buyer lead", "Phone-verified lead"],
    category: "Leads & Sales",
    definition:
      "A verified lead is an enquiry that has been confirmed by a phone conversation before it reaches the dealership's sales team, checking that the person genuinely intends to buy, has a realistic budget for the vehicle they asked about, and is in a location the dealership can serve.",
    body: [
      "The word 'verified' is used loosely in the lead-generation market. Some vendors mean only that the phone number connects. A verified lead in the stricter sense has been qualified on intent, budget, and location, so a salesperson picking it up is talking to a buyer, not a browser.",
      "Verification matters because unqualified volume trains a sales floor to treat every enquiry as low-priority, which slows response even to the buyers who were ready. Fewer, verified leads usually convert to more showroom visits than a larger unfiltered list.",
    ],
    relatedTermSlugs: ["lead-qualification", "speed-to-lead", "cost-per-lead"],
    relatedServiceSlugs: ["verified-buyer-leads", "whatsapp-marketing"],
    relatedResourceSlugs: [
      "dealers-guide-to-verified-buyer-leads",
      "buying-vs-building-dealership-lead-generation",
    ],
  },
  {
    slug: "lead-qualification",
    term: "Lead qualification",
    category: "Leads & Sales",
    definition:
      "Lead qualification is the process of checking whether an enquiry is worth a salesperson's time by confirming intent, budget, location, and timeline before it is worked as a sales opportunity.",
    body: [
      "For a dealership, a two-minute qualification call answers four questions: is this person buying or just researching, is the budget realistic for the model they named, can this outlet actually serve their location, and roughly when do they expect to decide. Anything less is a contact record, not a lead.",
      "Qualification can happen before the lead reaches the dealer, as with verified buyer leads, or on the sales floor through a first-response script. Either way, the output should be a clear priority so hot enquiries are called first.",
    ],
    relatedTermSlugs: ["verified-lead", "dealership-sales-funnel", "speed-to-lead"],
    relatedServiceSlugs: ["verified-buyer-leads", "crm-solutions"],
    relatedResourceSlugs: [
      "cold-leads-vs-warm-leads-dealership-pipeline-triage",
      "dealers-guide-to-verified-buyer-leads",
    ],
  },
  {
    slug: "cost-per-lead",
    term: "Cost per lead",
    alsoKnownAs: ["CPL"],
    category: "Leads & Sales",
    definition:
      "Cost per lead (CPL) is the total marketing spend on a channel or campaign divided by the number of leads it produced, giving the average amount paid to generate one enquiry.",
    body: [
      "CPL is the most common number dealers use to compare channels, but it is only meaningful alongside lead quality. A cheap CPL from a channel that produces browsers can cost more per sale than an expensive CPL from a channel that produces verified buyers.",
      "CPL varies widely by vehicle category, city tier, and season, so it should be benchmarked against comparable dealerships rather than a single national figure. The more useful downstream metrics are cost per walk-in and cost per sale.",
    ],
    relatedTermSlugs: ["cost-per-walk-in", "return-on-ad-spend", "verified-lead"],
    relatedServiceSlugs: ["google-ads", "meta-ads", "digital-marketing"],
    relatedResourceSlugs: [
      "google-ads-benchmarks-for-indian-dealerships",
      "how-used-car-dealers-can-cut-cost-per-lead",
    ],
  },
  {
    slug: "cost-per-walk-in",
    term: "Cost per walk-in",
    alsoKnownAs: ["Cost per showroom visit"],
    category: "Leads & Sales",
    definition:
      "Cost per walk-in is the marketing spend divided by the number of showroom visits it generated, measuring what a dealership pays to get a buyer physically in front of a vehicle rather than just into a CRM.",
    body: [
      "Because most vehicle sales still close in person, cost per walk-in is a truer measure of marketing effectiveness than cost per lead. It rewards channels that produce buyers who actually turn up and penalises those that fill the funnel with enquiries that never convert.",
      "Tracking it requires linking a showroom visit back to the lead that caused it, which is why a CRM with source tracking and disciplined check-in at reception matter as much as the campaigns themselves.",
    ],
    relatedTermSlugs: ["cost-per-lead", "lead-to-walk-in-ratio", "showroom-footfall"],
    relatedServiceSlugs: ["crm-solutions", "digital-marketing"],
    relatedResourceSlugs: ["marketing-attribution-for-car-dealerships"],
  },
  {
    slug: "lead-to-walk-in-ratio",
    term: "Lead-to-walk-in ratio",
    alsoKnownAs: ["Walk-in conversion rate"],
    category: "Leads & Sales",
    definition:
      "The lead-to-walk-in ratio is the share of leads that result in a showroom visit, calculated as walk-ins divided by leads over the same period.",
    body: [
      "This ratio exposes what happens between the enquiry and the showroom door: response speed, follow-up quality, and whether the lead was genuine in the first place. A low ratio with high lead volume usually points to unqualified leads or slow follow-up rather than a marketing problem.",
      "It is best tracked per source and per salesperson, because the same campaign can produce very different ratios depending on who answers the phone and how quickly.",
    ],
    relatedTermSlugs: ["cost-per-walk-in", "speed-to-lead", "test-drive-conversion-rate"],
    relatedServiceSlugs: ["whatsapp-marketing", "crm-solutions"],
    relatedResourceSlugs: ["sales-funnel-optimization-for-dealerships"],
  },
  {
    slug: "test-drive-conversion-rate",
    term: "Test-drive conversion rate",
    category: "Leads & Sales",
    definition:
      "Test-drive conversion rate is the percentage of test drives that end in a booking or sale, and it is one of the clearest indicators of how well a sales team closes once a buyer is physically engaged.",
    body: [
      "A test drive is the point where marketing hands over to the sales floor. If leads and walk-ins are healthy but test-drive conversion is low, the issue is usually in the demo experience, pricing conversation, or financing friction rather than in the campaigns.",
      "Dealers also track the earlier step, lead-to-test-drive, which shows how effectively follow-up turns an enquiry into a booked drive.",
    ],
    relatedTermSlugs: ["lead-to-walk-in-ratio", "dealership-sales-funnel", "showroom-footfall"],
    relatedServiceSlugs: ["crm-solutions", "whatsapp-marketing"],
    relatedResourceSlugs: [
      "test-drive-conversion-playbook-for-dealerships",
      "financing-friction-where-loan-delays-cost-dealerships-sales",
    ],
  },
  {
    slug: "speed-to-lead",
    term: "Speed to lead",
    alsoKnownAs: ["Lead response time"],
    category: "Leads & Sales",
    definition:
      "Speed to lead is the time between a buyer submitting an enquiry and the dealership's first meaningful response, measured in minutes rather than hours because buyers in competitive markets are usually talking to several showrooms at once.",
    body: [
      "In dense dealer markets such as Delhi NCR or Mumbai, a buyer who enquires with three showrooms often commits to whichever responds first with something useful. Speed to lead is therefore a conversion lever a dealership controls entirely on its own.",
      "The practical fix is automation for the first response, usually on WhatsApp, followed by a human call once intent is confirmed, with the sales team notified in real time so no enquiry sits unanswered overnight.",
    ],
    relatedTermSlugs: ["verified-lead", "lead-to-walk-in-ratio", "whatsapp-business-api"],
    relatedServiceSlugs: ["whatsapp-marketing", "omni-communication-platform"],
    relatedResourceSlugs: [
      "why-whatsapp-is-the-highest-converting-channel",
      "automated-follow-up-sequences-that-dont-feel-automated",
    ],
  },
  {
    slug: "lead-attribution",
    term: "Lead attribution",
    alsoKnownAs: ["Marketing attribution", "Source attribution"],
    category: "Leads & Sales",
    definition:
      "Lead attribution is the practice of recording which marketing channel, campaign, or page brought in a lead, so that spend can be credited to the sources that actually produce buyers.",
    body: [
      "The two simplest models are first-touch, which credits the channel that first brought the buyer in, and last-touch, which credits the channel they used just before enquiring. Dealerships usually care about first-touch for content and campaign ROI, and last-touch for understanding which contact points close.",
      "Attribution breaks down when leads arrive by phone or walk-in without a recorded source, which is why reception scripts, call tracking, and CRM source fields matter as much as web analytics.",
    ],
    relatedTermSlugs: ["conversion-tracking", "cost-per-walk-in", "automotive-crm"],
    relatedServiceSlugs: ["dealer-data-services", "saas-platform"],
    relatedResourceSlugs: [
      "marketing-attribution-for-car-dealerships",
      "reading-a-dealer-performance-report",
    ],
  },
  {
    slug: "dealership-sales-funnel",
    term: "Dealership sales funnel",
    category: "Leads & Sales",
    definition:
      "A dealership sales funnel is the sequence of stages a buyer moves through from first enquiry to delivery, typically lead, qualified lead, showroom visit or test drive, booking, and retail, with the number of buyers shrinking at each step.",
    body: [
      "Mapping the funnel makes it possible to see where buyers are lost. A dealership with plenty of leads but few test drives has a follow-up problem; one with plenty of test drives but few bookings has a closing or financing problem.",
      "Automotive funnels differ from generic sales pipelines because the stages are physical: a test drive and a delivery are events that have to be scheduled, which is why an automotive CRM tracks them as distinct stages with their own reminders.",
    ],
    relatedTermSlugs: ["lead-qualification", "test-drive-conversion-rate", "automotive-crm"],
    relatedServiceSlugs: ["crm-solutions", "verified-buyer-leads"],
    relatedResourceSlugs: ["sales-funnel-optimization-for-dealerships"],
  },
  {
    slug: "showroom-footfall",
    term: "Showroom footfall",
    alsoKnownAs: ["Walk-ins"],
    category: "Leads & Sales",
    definition:
      "Showroom footfall is the number of prospective buyers who physically visit a dealership in a given period, and it is the outcome most dealer marketing is ultimately judged on.",
    body: [
      "Footfall is the point where digital demand becomes a sales opportunity. Campaigns that report clicks, impressions, or even leads without a footfall number are only telling half the story.",
      "Qualified footfall, meaning visitors who arrived through a verified enquiry, is more valuable than raw footfall, because it is more likely to convert and easier to attribute back to a specific channel.",
    ],
    relatedTermSlugs: ["cost-per-walk-in", "lead-to-walk-in-ratio", "verified-lead"],
    relatedServiceSlugs: ["verified-buyer-leads", "meta-ads", "local-seo"],
  },
  // ----------------------------------------------------------- Advertising
  {
    slug: "performance-max",
    term: "Performance Max",
    alsoKnownAs: ["PMax"],
    category: "Advertising",
    definition:
      "Performance Max is a Google Ads campaign type that serves ads across Search, YouTube, Display, Discover, Gmail, and Maps from one campaign, using the advertiser's assets and audience signals to optimise automatically toward a conversion goal.",
    body: [
      "For a dealership, Performance Max is useful for reaching buyers wherever they are on Google's properties without managing six separate campaigns. Its weakness is transparency: it reports less detail on which placements and searches produced results, so it works best alongside a standard Search campaign rather than instead of one.",
      "Because it optimises to whatever conversion it is given, the conversion must be a real lead, not a page view or a form load, or the campaign will happily spend budget on the wrong outcome.",
    ],
    relatedTermSlugs: ["conversion-tracking", "negative-keywords", "retargeting"],
    relatedServiceSlugs: ["google-ads"],
    relatedResourceSlugs: ["google-ads-benchmarks-for-indian-dealerships"],
  },
  {
    slug: "retargeting",
    term: "Retargeting",
    alsoKnownAs: ["Remarketing"],
    category: "Advertising",
    definition:
      "Retargeting is showing ads to people who have already visited a website, viewed a listing, or engaged with a social post, in order to bring them back to take the next step such as booking a test drive.",
    body: [
      "Vehicle purchases involve weeks of research, so most first visits to a dealership website do not produce an enquiry. Retargeting keeps the dealership and the specific model in front of that buyer while they compare options elsewhere.",
      "On Meta it runs through the Pixel and custom audiences; on Google through remarketing lists. The sequence matters: a buyer who viewed a listing should see that vehicle and an offer, not a generic brand ad.",
    ],
    relatedTermSlugs: ["lookalike-audience", "vehicle-detail-page", "conversion-tracking"],
    relatedServiceSlugs: ["meta-ads", "google-ads"],
    relatedResourceSlugs: ["meta-ads-audience-targeting-for-dealerships"],
  },
  {
    slug: "lookalike-audience",
    term: "Lookalike audience",
    category: "Advertising",
    definition:
      "A lookalike audience is an advertising audience built by the platform to resemble a source group the advertiser supplies, such as past customers or recent enquirers, so that ads reach new people with similar characteristics.",
    body: [
      "For a dealership, the best seed audiences are people who actually bought or booked, not everyone who clicked. A lookalike built from verified buyers finds more verified-buyer-like people; one built from casual browsers finds more browsers.",
      "Meta has been shifting advertisers toward its automated audience options, but the principle is the same: the quality of what you feed the platform decides the quality of who it finds.",
    ],
    relatedTermSlugs: ["retargeting", "verified-lead", "intent-signals"],
    relatedServiceSlugs: ["meta-ads", "dealer-data-services"],
    relatedResourceSlugs: ["meta-ads-audience-targeting-for-dealerships"],
  },
  {
    slug: "negative-keywords",
    term: "Negative keywords",
    category: "Advertising",
    definition:
      "Negative keywords are search terms an advertiser excludes from a Google Ads campaign so that ads do not show for searches that are unlikely to produce a customer, such as job seekers, spare-parts queries, or competitor-brand research.",
    body: [
      "Dealership campaigns leak budget on searches that look relevant but are not: 'showroom jobs', 'car spare parts', 'driving school', or the name of a model the dealer does not stock. Each of those clicks costs the same as a real buyer's click.",
      "Negative keyword lists should be reviewed from the actual search-terms report every week rather than set once, because the irrelevant queries change with the season and with what the OEM is advertising.",
    ],
    relatedTermSlugs: ["performance-max", "conversion-tracking", "cost-per-lead"],
    relatedServiceSlugs: ["google-ads"],
    relatedResourceSlugs: ["google-ads-negative-keywords-for-dealerships"],
  },
  {
    slug: "conversion-tracking",
    term: "Conversion tracking",
    category: "Advertising",
    definition:
      "Conversion tracking is the setup that records when an ad click leads to a valuable action, such as an enquiry form, a WhatsApp click, or a phone call, so that campaigns can be optimised and judged on real outcomes instead of clicks.",
    body: [
      "The single most common reason dealership ad accounts underperform is that they optimise toward the wrong event. If the tracked conversion is a page view or a form load, the platform learns to find people who look at forms, not people who submit them.",
      "The gold standard is to import qualified leads or sales back into the ad platform as offline conversions, so bidding learns from what actually became a buyer.",
    ],
    relatedTermSlugs: ["lead-attribution", "performance-max", "return-on-ad-spend"],
    relatedServiceSlugs: ["google-ads", "meta-ads", "dealer-data-services"],
    relatedResourceSlugs: ["marketing-attribution-for-car-dealerships"],
  },
  {
    slug: "return-on-ad-spend",
    term: "Return on ad spend",
    alsoKnownAs: ["ROAS"],
    category: "Advertising",
    definition:
      "Return on ad spend (ROAS) is the revenue attributed to a campaign divided by what was spent on it, expressed as a ratio or multiple, and it is the most direct measure of whether advertising is paying for itself.",
    body: [
      "Dealerships should calculate ROAS on gross margin rather than vehicle price, because a ROAS that looks healthy on a ₹10 lakh sale can be a loss once the thin margin on that sale is considered. Service and accessories revenue attributed to the same buyer belongs in the calculation too.",
      "ROAS is only as good as attribution: if walk-in sales are not linked back to the campaign that caused them, digital ROAS will be understated and budget will be cut from channels that were working.",
    ],
    relatedTermSlugs: ["cost-per-lead", "conversion-tracking", "lead-attribution"],
    relatedServiceSlugs: ["digital-marketing", "saas-platform"],
    relatedResourceSlugs: ["automotive-analytics-metrics-that-matter"],
  },
  {
    slug: "vehicle-detail-page",
    term: "Vehicle detail page",
    alsoKnownAs: ["VDP", "Listing page"],
    category: "Advertising",
    definition:
      "A vehicle detail page (VDP) is the web page for a single vehicle in a dealership's inventory, showing its photos, price, specifications, and an enquiry option, and VDP views are a core measure of buyer interest in specific stock.",
    body: [
      "Buyers who reach a VDP are far closer to a decision than those on a homepage, which is why listing quality, especially photography, has such a direct effect on enquiries. A VDP with poor photos loses the buyer at the last step.",
      "Retargeting and dynamic inventory ads both depend on VDPs: they show the exact vehicle a buyer viewed, which only works if every unit in stock has its own well-built page.",
    ],
    relatedTermSlugs: ["dynamic-inventory-ads", "retargeting", "certified-pre-owned"],
    relatedServiceSlugs: ["photography", "videography", "meta-ads"],
    relatedResourceSlugs: ["used-car-listing-photos-video-standards"],
  },
  {
    slug: "dynamic-inventory-ads",
    term: "Dynamic inventory ads",
    alsoKnownAs: ["Catalog ads", "Feed-based ads"],
    category: "Advertising",
    definition:
      "Dynamic inventory ads are advertisements generated automatically from a dealership's live stock feed, so that each ad shows a specific available vehicle with its price and photo, and updates or stops as inventory changes.",
    body: [
      "They are most valuable for used-car dealers and multi-brand outlets, where the inventory changes weekly and hand-building an ad per vehicle is impractical. A buyer who viewed a particular used SUV can be shown that unit, and similar ones, rather than a generic showroom ad.",
      "The prerequisite is a clean inventory feed: consistent photos, accurate prices, and prompt removal of sold units. Ads that promote a car that was sold last week damage trust faster than no ads at all.",
    ],
    relatedTermSlugs: ["vehicle-detail-page", "retargeting", "dealer-management-system"],
    relatedServiceSlugs: ["meta-ads", "dealer-data-services", "photography"],
    relatedResourceSlugs: ["how-used-car-dealers-can-cut-cost-per-lead"],
  },
  {
    slug: "ott-advertising",
    term: "OTT advertising",
    alsoKnownAs: ["Connected TV advertising", "Streaming ads"],
    category: "Advertising",
    definition:
      "OTT advertising is video advertising placed on over-the-top streaming platforms that deliver content over the internet rather than through broadcast or cable, allowing dealerships to run television-style ads targeted by city and audience.",
    body: [
      "For a dealer, OTT offers the reach of television with the targeting of digital: a launch or festive offer can be shown to households in a specific city or district rather than an entire state.",
      "It is an awareness channel, not a lead channel, so it should be measured by lifts in branded search, direct enquiries, and footfall during the campaign window rather than by clicks.",
    ],
    relatedTermSlugs: ["retargeting", "festive-season-demand", "showroom-footfall"],
    relatedServiceSlugs: ["digital-marketing", "videography"],
  },
  {
    slug: "oem-co-op-advertising",
    term: "OEM co-op advertising",
    alsoKnownAs: ["Dealer marketing support", "Co-operative advertising"],
    category: "Advertising",
    definition:
      "OEM co-op advertising is a programme in which a vehicle manufacturer shares the cost of a dealer's local advertising, usually reimbursing part of the spend when the campaign follows the manufacturer's brand and creative guidelines.",
    body: [
      "Many OEMs support dealer-level campaigns because national brand advertising cannot promote a specific showroom's stock, offers, or location. The dealer gets subsidised reach; the OEM gets consistent branding at the local level.",
      "The catch is compliance: creative, logos, and claims usually have to be pre-approved, and reimbursement depends on documentation. Dealers who treat co-op as free money and skip the paperwork often end up funding the campaign themselves.",
    ],
    relatedTermSlugs: ["oem", "festive-season-demand", "return-on-ad-spend"],
    relatedServiceSlugs: ["digital-marketing", "content-creation"],
    relatedResourceSlugs: ["franchise-vs-independent-dealership-marketing-strategy"],
  },
  // ------------------------------------------------------------- Local SEO
  {
    slug: "google-business-profile",
    term: "Google Business Profile",
    alsoKnownAs: ["GBP", "Google My Business", "GMB"],
    category: "Local & Reputation",
    definition:
      "Google Business Profile is the free listing that controls how a dealership appears in Google Maps and in the local results on Google Search, including its name, address, hours, photos, reviews, posts, and the call and directions buttons.",
    body: [
      "For most dealerships it is the single highest-traffic page they own, because it is what a buyer sees when they search for a brand plus a city or a 'near me' term. It was called Google My Business until 2021, and many dealers still use the old name.",
      "A complete, actively managed profile with fresh photos, answered reviews, and correct categories consistently outranks a neglected one, which is why local SEO for dealerships starts here rather than with the website.",
    ],
    relatedTermSlugs: ["local-pack", "near-me-search", "nap-consistency"],
    relatedServiceSlugs: ["local-seo"],
    relatedResourceSlugs: [
      "google-business-profile-setup-guide-for-dealerships",
      "google-business-profile-attributes-and-products",
    ],
  },
  {
    slug: "local-pack",
    term: "Local pack",
    alsoKnownAs: ["Map pack", "3-pack"],
    category: "Local & Reputation",
    definition:
      "The local pack is the block of three business listings with a map that Google shows at the top of results for searches with local intent, and appearing in it is the main objective of local SEO for a dealership.",
    body: [
      "Google fills the pack based on relevance to the query, distance from the searcher, and prominence, which is driven largely by reviews, citations, and profile activity. A dealership can rank in the pack for one neighbourhood and be invisible two kilometres away.",
      "Because there are only three positions, the pack is effectively a competitive ranking against named local rivals, which is why tracking should be done against specific competitors and locations rather than as a single citywide number.",
    ],
    relatedTermSlugs: ["google-business-profile", "near-me-search", "nap-consistency"],
    relatedServiceSlugs: ["local-seo"],
    relatedResourceSlugs: ["local-seo-checklist-for-multi-location-dealerships"],
  },
  {
    slug: "near-me-search",
    term: "'Near me' search",
    category: "Local & Reputation",
    definition:
      "A 'near me' search is a query where the searcher's location is part of the intent, either explicitly ('bike showroom near me') or implicitly ('Hyundai dealer Pune'), and Google answers it primarily with map and local-pack results.",
    body: [
      "Two-wheeler and used-car buyers in particular tend to search this way on their phones, often while already out and ready to visit. Winning the near-me search is therefore closer to winning footfall than winning a website click.",
      "Ranking for it depends on the Google Business Profile, not the website's homepage: correct categories, a service area that matches reality, recent reviews, and photos that show the actual showroom.",
    ],
    relatedTermSlugs: ["local-pack", "google-business-profile", "tier-2-city"],
    relatedServiceSlugs: ["local-seo"],
    relatedResourceSlugs: ["district-level-local-seo-for-dealerships"],
  },
  {
    slug: "nap-consistency",
    term: "NAP consistency",
    alsoKnownAs: ["Local citations", "Citation consistency"],
    category: "Local & Reputation",
    definition:
      "NAP consistency means a business's name, address, and phone number are written identically everywhere they appear online, including its website, Google Business Profile, directories, and social pages, so that search engines can confidently connect them to one business.",
    body: [
      "Dealerships accumulate inconsistent listings over time: an old phone number on a directory, a showroom that moved, a brand name written three ways. Each mismatch weakens Google's confidence in the listing and can suppress local rankings.",
      "A citation audit fixes existing listings and adds the business to relevant directories with matching details. It is unglamorous work, but for multi-location dealers it is often the fastest local ranking gain available.",
    ],
    relatedTermSlugs: ["google-business-profile", "local-pack", "multi-location-marketing"],
    relatedServiceSlugs: ["local-seo"],
    relatedResourceSlugs: ["local-link-building-for-dealerships"],
  },
  {
    slug: "multi-location-marketing",
    term: "Multi-location marketing",
    category: "Local & Reputation",
    definition:
      "Multi-location marketing is the practice of running local search, advertising, and reputation management separately for each showroom in a dealer group, so that every outlet ranks and converts in its own catchment instead of being averaged into one brand-level result.",
    body: [
      "A group with five showrooms needs five Google Business Profiles, five sets of reviews, and ad campaigns geo-targeted to each catchment. Treating them as one entity hides underperforming outlets and lets a strong location mask a weak one.",
      "The trade-off is consistency: creative, offers, and brand standards should be shared, while location details, reviews, and local targeting stay separate.",
    ],
    relatedTermSlugs: ["nap-consistency", "google-business-profile", "local-pack"],
    relatedServiceSlugs: ["local-seo", "saas-platform"],
    relatedResourceSlugs: [
      "local-seo-checklist-for-multi-location-dealerships",
      "expanding-to-a-second-showroom-marketing-checklist",
    ],
  },
  // ------------------------------------------------------------- Messaging
  {
    slug: "dlt-registration",
    term: "DLT registration",
    alsoKnownAs: ["TRAI DLT", "Distributed Ledger Technology registration"],
    category: "Messaging & Compliance",
    definition:
      "DLT registration is the process, mandated by India's telecom regulator TRAI, of registering a business, its SMS sender IDs, and its message templates on a telecom operator's Distributed Ledger Technology platform before any commercial SMS can be delivered.",
    body: [
      "It came out of TRAI's 2018 commercial-communication regulations and has been enforced since 2020. Messages from an unregistered sender, or that do not match an approved template, are dropped by the operator without notice, which is the most common reason a dealership's SMS campaign goes out and nobody receives it.",
      "Registration on any one operator's portal is shared across the network. A dealership registers its entity, its sender IDs, and one template per message type, then shares those IDs with its SMS provider.",
    ],
    relatedTermSlugs: ["sender-id", "message-template", "dnd-registry"],
    relatedServiceSlugs: ["omni-communication-platform"],
    relatedResourceSlugs: ["dlt-registration-for-dealership-sms"],
  },
  {
    slug: "sender-id",
    term: "Sender ID",
    alsoKnownAs: ["SMS header"],
    category: "Messaging & Compliance",
    definition:
      "A sender ID, called a header on DLT portals, is the short alphanumeric name that appears as the sender of a commercial SMS in place of a phone number, and in India it must be registered and approved before use.",
    body: [
      "Headers are six characters and should clearly relate to the business name, so a buyer recognises who the message is from. Operators prepend a short route prefix when the message is delivered, which is why the name a customer sees is slightly longer than the header registered.",
      "Each header is registered under a category, such as promotional or service, and can only be used for messages of that type. A service header used for an offer is a template mismatch and will be blocked.",
    ],
    relatedTermSlugs: ["dlt-registration", "message-template", "dnd-registry"],
    relatedServiceSlugs: ["omni-communication-platform"],
    relatedResourceSlugs: ["dlt-registration-for-dealership-sms"],
  },
  {
    slug: "dnd-registry",
    term: "DND registry",
    alsoKnownAs: ["Do Not Disturb", "NCPR"],
    category: "Messaging & Compliance",
    definition:
      "The DND registry is India's national list of mobile numbers whose owners have opted out of promotional calls and messages, and telecom operators block promotional SMS to any number on it regardless of who is sending.",
    body: [
      "For a dealership this means festive offers and launch announcements by SMS will not reach a meaningful share of its own customer base. Service messages, such as a booking confirmation or a service reminder to an existing customer, can still be delivered if they are registered under the right category.",
      "The practical workaround is consent: a customer who has explicitly opted in to hear from the dealership can be messaged under a service-explicit template, and WhatsApp with opt-in is not governed by the SMS DND rules.",
    ],
    relatedTermSlugs: ["dlt-registration", "opt-in-consent", "message-template"],
    relatedServiceSlugs: ["omni-communication-platform", "whatsapp-marketing"],
    relatedResourceSlugs: ["dlt-registration-for-dealership-sms"],
  },
  {
    slug: "rcs-messaging",
    term: "RCS messaging",
    alsoKnownAs: ["Rich Communication Services", "RCS Business Messaging"],
    category: "Messaging & Compliance",
    definition:
      "RCS (Rich Communication Services) is the carrier-based successor to SMS that delivers branded messages with images, carousels, and tap-able buttons inside the phone's default messaging app, from a verified business sender.",
    body: [
      "For a dealership, RCS sits between SMS and WhatsApp: it reaches buyers who have not opted in on WhatsApp, but with richer content than a plain text message, such as a model carousel with a 'Book a test drive' button.",
      "It is supported on most Android phones in India; where a handset does not support it, the message falls back to SMS. Sender verification and message approval are handled through the RCS platform rather than the SMS DLT system.",
    ],
    relatedTermSlugs: ["whatsapp-business-api", "omnichannel-communication", "message-template"],
    relatedServiceSlugs: ["omni-communication-platform"],
  },
  {
    slug: "whatsapp-business-api",
    term: "WhatsApp Business API",
    alsoKnownAs: ["WhatsApp Business Platform", "WhatsApp Cloud API"],
    category: "Messaging & Compliance",
    definition:
      "The WhatsApp Business API is Meta's programmatic interface that lets a business send and receive WhatsApp messages at scale through software, with approved message templates, automation, and multiple agents, as opposed to the free WhatsApp Business app designed for a single phone.",
    body: [
      "The API is what makes automated first responses, nurture journeys, and CRM integration possible. The app cannot do these things, and running a dealership's lead follow-up from one salesperson's handset creates an obvious continuity risk.",
      "Business-initiated messages must use templates that Meta has approved, and are priced by category: utility messages such as confirmations and reminders cost less than marketing messages. Replies within the customer-service window after a customer writes in are free-form.",
    ],
    relatedTermSlugs: ["message-template", "opt-in-consent", "speed-to-lead"],
    relatedServiceSlugs: ["whatsapp-marketing", "omni-communication-platform"],
    relatedResourceSlugs: [
      "whatsapp-business-api-vs-whatsapp-business-app",
      "whatsapp-catalog-for-dealership-inventory",
    ],
  },
  {
    slug: "message-template",
    term: "Message template",
    category: "Messaging & Compliance",
    definition:
      "A message template is the pre-approved wording of a business message, with placeholders for variable details such as the customer's name or appointment time, that must be registered on DLT for SMS or approved by Meta for WhatsApp before it can be sent.",
    body: [
      "Templates exist so regulators and platforms can check what a business intends to send. A message that deviates from its approved template, even by an added link or a changed phrase, is treated as unregistered and dropped.",
      "A dealership typically needs a template for each message type it sends: test drive confirmation, service due reminder, delivery update, and festive offer. Planning SMS and WhatsApp templates together keeps the customer experience consistent across channels.",
    ],
    relatedTermSlugs: ["dlt-registration", "whatsapp-business-api", "sender-id"],
    relatedServiceSlugs: ["omni-communication-platform", "whatsapp-marketing"],
    relatedResourceSlugs: ["dlt-registration-for-dealership-sms"],
  },
  {
    slug: "opt-in-consent",
    term: "Opt-in consent",
    category: "Messaging & Compliance",
    definition:
      "Opt-in consent is a customer's explicit, recorded agreement to receive messages from a business, and it is the basis on which promotional WhatsApp and SMS communication is permitted in India.",
    body: [
      "Consent has to be specific and provable: a tick box on an enquiry form, a WhatsApp message from the customer, or a recorded verbal agreement, with the wording registered as a consent template on DLT where SMS is involved. A phone number collected at a showroom event is not consent to market to it.",
      "India's Digital Personal Data Protection Act adds a general obligation to collect and use personal data for a stated purpose with consent, so opt-in practice is a data-protection matter as well as a messaging one.",
    ],
    relatedTermSlugs: ["dnd-registry", "whatsapp-business-api", "message-template"],
    relatedServiceSlugs: ["whatsapp-marketing", "omni-communication-platform"],
    relatedResourceSlugs: ["whatsapp-broadcast-lists-vs-groups-for-dealerships"],
  },
  {
    slug: "ivr",
    term: "IVR",
    alsoKnownAs: ["Interactive Voice Response"],
    category: "Messaging & Compliance",
    definition:
      "IVR (Interactive Voice Response) is an automated phone system that greets callers, offers menu options by keypad or voice, and routes each call to the right person or department without a receptionist.",
    body: [
      "For a dealership, IVR means a sales enquiry, a service booking, and a spare-parts question each reach the right desk immediately, and no call to the main number goes unanswered during a busy Saturday. Calls can be recorded and logged against the lead in the CRM.",
      "IVR runs on either a normal number or a toll-free number. Toll-free numbers are typically priced by usage minutes, while normal numbers are priced as a flat monthly rental.",
    ],
    relatedTermSlugs: ["missed-call-number", "click-to-call", "omnichannel-communication"],
    relatedServiceSlugs: ["omni-communication-platform"],
  },
  {
    slug: "missed-call-number",
    term: "Missed-call number",
    category: "Messaging & Compliance",
    definition:
      "A missed-call number is a phone number that a customer dials and hangs up on, which automatically registers their interest and triggers a callback, an SMS, or a WhatsApp message, at no cost to the caller.",
    body: [
      "It is a widely used lead-capture method in India because it works on any phone, needs no data connection, and asks nothing of the customer beyond a tap. Printed on a hoarding, a newspaper ad, or a showroom banner, it turns offline attention into a trackable lead.",
      "The number can be a normal number or a mobile number, and each missed call is logged with the caller's number and time, which makes it easy to attribute leads to a specific campaign or location.",
    ],
    relatedTermSlugs: ["ivr", "click-to-call", "lead-attribution"],
    relatedServiceSlugs: ["omni-communication-platform"],
  },
  {
    slug: "click-to-call",
    term: "Click-to-Call",
    category: "Messaging & Compliance",
    definition:
      "Click-to-Call is a button on a website, listing, or ad that starts a phone call with a single tap, and on a communication platform it can connect the caller directly to the right salesperson rather than a general number.",
    body: [
      "Vehicle buyers on mobile often prefer to call rather than fill a form, especially in tier-2 and tier-3 markets. A prominent call button on a listing page or a Google ad turns that preference into a tracked lead.",
      "When the call is bridged through a platform, it can be recorded, timed, and logged against the lead, which gives a dealership call-attribution data that a plain phone number never provides.",
    ],
    relatedTermSlugs: ["ivr", "missed-call-number", "vehicle-detail-page"],
    relatedServiceSlugs: ["omni-communication-platform", "google-ads"],
  },
  {
    slug: "omnichannel-communication",
    term: "Omnichannel communication",
    category: "Messaging & Compliance",
    definition:
      "Omnichannel communication is the practice of running a customer conversation across several channels, such as SMS, WhatsApp, RCS, voice, and email, from one system, so that the customer gets a consistent message on whichever channel reaches them and the business sees the whole history in one place.",
    body: [
      "The alternative is five separate tools with five separate logs, where a buyer confirmed by SMS is chased again on WhatsApp because nobody could see the first message. For a dealership, the practical payoff is fewer duplicated follow-ups and a clear record of what each buyer was told.",
      "It also allows fallback: a test-drive reminder sent on WhatsApp to a buyer who has not opted in can go out by RCS or SMS instead, from the same template.",
    ],
    relatedTermSlugs: ["whatsapp-business-api", "rcs-messaging", "automotive-crm"],
    relatedServiceSlugs: ["omni-communication-platform"],
    relatedResourceSlugs: ["marketing-automation-for-automotive-dealers"],
  },
  // ------------------------------------------------------------------ Data
  {
    slug: "dealer-management-system",
    term: "Dealer management system",
    alsoKnownAs: ["DMS"],
    category: "Data & Systems",
    definition:
      "A dealer management system (DMS) is the core operational software a dealership runs on, covering vehicle inventory, sales orders, service workshop jobs, parts, accounting, and OEM reporting.",
    body: [
      "The DMS is a system of record, not a marketing tool. It knows what is in stock and what was sold, but it usually knows nothing about where a buyer came from or what happened between enquiry and booking. That gap is what a CRM fills.",
      "Marketing systems should integrate with the DMS rather than replace it, so inventory feeds stay accurate for ads and listings, and closed sales can be matched back to leads for attribution.",
    ],
    relatedTermSlugs: ["automotive-crm", "dynamic-inventory-ads", "lead-attribution"],
    relatedServiceSlugs: ["crm-solutions", "dealer-data-services", "saas-platform"],
    relatedResourceSlugs: ["how-to-migrate-dealership-data-to-a-new-crm"],
  },
  {
    slug: "automotive-crm",
    term: "Automotive CRM",
    alsoKnownAs: ["Dealer CRM"],
    category: "Data & Systems",
    definition:
      "An automotive CRM is customer relationship management software built around the stages of a vehicle sale, tracking every lead from first enquiry through test drive, booking, and delivery, with follow-up reminders tied to each stage.",
    body: [
      "A generic CRM treats a sale as a pipeline of deals; an automotive CRM knows that a test drive has to be scheduled, that a booking may depend on a loan approval, and that a delivered customer becomes a service and exchange prospect. The reminders and reports are built around those realities.",
      "The most common failure is adoption rather than software: a CRM the sales team does not update is a spreadsheet with a login. Integration with WhatsApp and lead sources, so that records fill themselves, is what makes adoption stick.",
    ],
    relatedTermSlugs: ["dealer-management-system", "dealership-sales-funnel", "lead-attribution"],
    relatedServiceSlugs: ["crm-solutions", "saas-platform"],
    relatedResourceSlugs: [
      "automotive-crm-features-that-actually-matter",
      "crm-adoption-getting-your-sales-team-to-use-it",
      "dealer-crm-comparison-worksheet",
    ],
  },
  {
    slug: "intent-signals",
    term: "Intent signals",
    alsoKnownAs: ["Behavioural signals", "Buying signals"],
    category: "Data & Systems",
    definition:
      "Intent signals are observable behaviours that indicate how close a person is to buying, such as repeatedly viewing one model's listing, requesting an on-road price, comparing finance options, or replying quickly to a follow-up message.",
    body: [
      "Used well, intent signals let a dealership prioritise its follow-up: the buyer who opened a price message three times gets a call before the one who never opened it. They also feed advertising, by building audiences from people who behaved like buyers rather than people who merely clicked.",
      "Signals are only useful if they are captured in one place. Website behaviour, message engagement, and call records that live in separate tools cannot be combined into a single view of a buyer.",
    ],
    relatedTermSlugs: ["lookalike-audience", "lead-qualification", "automotive-crm"],
    relatedServiceSlugs: ["dealer-data-services", "verified-buyer-leads"],
    relatedResourceSlugs: ["ai-for-dealerships-practical-use-cases"],
  },
  // ------------------------------------------------------------ Operations
  {
    slug: "oem",
    term: "OEM",
    alsoKnownAs: ["Original equipment manufacturer"],
    category: "Dealer Operations",
    definition:
      "In the vehicle industry, an OEM (original equipment manufacturer) is the company that designs and builds the vehicles, such as a car or two-wheeler brand, which sells to the public through a network of franchised dealerships.",
    body: [
      "The OEM sets brand standards, pricing frameworks, and national marketing, while the dealer owns the local relationship, the showroom, and the sale. Most dealer marketing sits in the space the OEM's national campaigns do not reach: a specific outlet's stock, offers, reviews, and catchment.",
      "OEMs also run programmes across their dealer networks, from co-op advertising to standardised lead-management systems, which is why network-wide marketing and data consistency are a distinct discipline from single-dealer marketing.",
    ],
    relatedTermSlugs: ["oem-co-op-advertising", "certified-pre-owned", "multi-location-marketing"],
    relatedServiceSlugs: ["saas-platform", "dealer-data-services"],
    relatedResourceSlugs: ["franchise-vs-independent-dealership-marketing-strategy"],
  },
  {
    slug: "certified-pre-owned",
    term: "Certified pre-owned",
    alsoKnownAs: ["CPO"],
    category: "Dealer Operations",
    definition:
      "A certified pre-owned (CPO) vehicle is a used vehicle that has passed a defined inspection and reconditioning standard and is sold with a warranty, usually under a manufacturer-backed programme, so that the buyer gets some of the assurance of a new-car purchase at a used-car price.",
    body: [
      "For dealers, CPO is a trust product. The inspection report, the warranty, and the brand behind the programme answer the used-car buyer's central worry, which is what they cannot see. That makes CPO listings easier to market than unbranded used stock and justifies a price premium.",
      "Marketing CPO well means showing the certification itself: what was inspected, what is covered, and for how long, rather than simply adding a badge to the listing.",
    ],
    relatedTermSlugs: ["vehicle-detail-page", "exchange-program", "oem"],
    relatedServiceSlugs: ["photography", "content-creation", "meta-ads"],
    relatedResourceSlugs: [
      "certified-pre-owned-marketing-india",
      "used-car-dealer-competing-with-online-platforms",
    ],
  },
  {
    slug: "exchange-program",
    term: "Exchange program",
    alsoKnownAs: ["Trade-in", "Exchange offer"],
    category: "Dealer Operations",
    definition:
      "An exchange program is an arrangement in which a dealership takes a buyer's existing vehicle as part-payment toward a new one, valuing it on the spot and often adding an exchange bonus, which removes the buyer's need to sell privately first.",
    body: [
      "Exchange is one of the strongest hooks in dealer marketing because it addresses the most common reason a purchase stalls: the buyer has a car to get rid of. An 'exchange bonus' campaign brings in buyers who had not planned to visit that month.",
      "It also feeds the used-car business, since exchanged vehicles become reconditioned or certified pre-owned stock, so the same campaign can generate both a new-car sale and used inventory.",
    ],
    relatedTermSlugs: ["certified-pre-owned", "festive-season-demand", "showroom-footfall"],
    relatedServiceSlugs: ["meta-ads", "whatsapp-marketing", "content-creation"],
    relatedResourceSlugs: ["trade-in-exchange-marketing-for-dealerships"],
  },
  {
    slug: "tier-2-city",
    term: "Tier-2 and tier-3 cities",
    category: "Dealer Operations",
    definition:
      "Tier-2 and tier-3 cities are the informal labels used in India for mid-sized and smaller urban markets outside the major metros, and they matter to dealers because buying behaviour, competition, and the marketing channels that work differ from the metro playbook.",
    body: [
      "There is no single official definition; the tiers loosely follow population and are used in government housing-allowance classifications, but in practice the label describes a market rather than a number. A district headquarters town with two showrooms per brand behaves very differently from Mumbai.",
      "In these markets, buyers are more likely to call than fill a form, more influenced by word of mouth and financing availability, and served by far fewer competing dealers, which changes where marketing budget should go.",
    ],
    relatedTermSlugs: ["near-me-search", "click-to-call", "showroom-footfall"],
    relatedServiceSlugs: ["local-seo", "whatsapp-marketing", "verified-buyer-leads"],
    relatedResourceSlugs: [
      "tier-2-city-dealership-marketing",
      "district-level-local-seo-for-dealerships",
    ],
  },
  {
    slug: "festive-season-demand",
    term: "Festive season demand",
    category: "Dealer Operations",
    definition:
      "Festive season demand is the annual rise in vehicle purchases around India's major festivals, particularly the Navratri-to-Diwali period nationally and regional festivals such as Onam and Pongal, when many buyers deliberately time a purchase for an auspicious date.",
    body: [
      "It is the most important selling window of the year for most dealerships, and also the most expensive marketing window, because every competitor is advertising at once. Campaigns that start when the season starts are too late; audiences, creative, and stock should be in place weeks before.",
      "The season is also when exchange offers, financing schemes, and OEM support are most generous, so the marketing calendar should be built around the specific dates that matter in the dealership's region rather than a generic national plan.",
    ],
    relatedTermSlugs: ["exchange-program", "oem-co-op-advertising", "ott-advertising"],
    relatedServiceSlugs: ["digital-marketing", "meta-ads", "content-creation"],
    relatedResourceSlugs: ["dealership-marketing-calendar-for-festive-season"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

// Alphabetical, ignoring leading quotes so "'Near me' search" sorts under N.
export function sortedGlossaryTerms(): GlossaryTerm[] {
  const key = (term: GlossaryTerm) =>
    term.term.replace(/^['"]/, "").toLowerCase();
  return [...glossaryTerms].sort((a, b) => key(a).localeCompare(key(b)));
}

export function glossaryLetter(term: GlossaryTerm): string {
  return term.term.replace(/^['"]/, "").charAt(0).toUpperCase();
}

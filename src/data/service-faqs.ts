import type { Faq } from "@/data/faq";

// Hand-written per service, keyed by service slug. Every answer is grounded
// in what the site already states elsewhere (service benefits and steps,
// the pricing page, the homepage and services-hub FAQs, and the Resources
// guides). Nothing here introduces a number, guarantee, timeline, or policy
// that does not already appear on the site, and answers open with a direct
// verdict so they read cleanly in search snippets and AI answers.
export const serviceFaqs: Record<string, Faq[]> = {
  "verified-buyer-leads": [
    {
      question: "What does 'verified' mean for an AutoSutra lead?",
      answer:
        "Every lead is phone-verified before it reaches you, confirming three things: genuine intent to buy, a realistic budget for the vehicle they enquired about, and a location your dealership can actually serve. A lead source that only confirms the phone number connects is not the same standard.",
    },
    {
      question: "How are verified leads delivered to our sales team?",
      answer:
        "In real time, straight into WhatsApp and your CRM, matched to the make, model, variant, and city you asked for. Your team sees the enquiry the moment it is qualified, not in a weekly export.",
    },
    {
      question: "How many verified leads can we get each month, and what does it cost?",
      answer:
        "Verified buyer leads are part of every plan. The Growth plan (₹35,499 per month) covers up to 250 verified leads a month, Starter (₹14,999 per month) includes a monthly lead allocation, and Enterprise is a custom package for multi-city networks and OEMs. The pricing page has the full comparison.",
    },
    {
      question: "Do you work with used-car and two-wheeler dealers, or only new-car showrooms?",
      answer:
        "All of them. Verified leads run for car, bike, EV, and used-car dealerships as well as OEM dealer networks, and the buyer profile is defined per dealership, so a used-car lot and a premium showroom are never targeting the same buyer.",
    },
    {
      question: "How quickly can verified leads start?",
      answer:
        "Most dealerships are live within 7 to 10 business days of onboarding. The first step is agreeing your ideal buyer profile and target inventory, so the sooner that is settled, the sooner leads flow.",
    },
  ],
  "digital-marketing": [
    {
      question: "How is Digital Marketing different from taking Google Ads or Meta Ads on their own?",
      answer:
        "Digital Marketing is the full-funnel service: one team owns search, social, and display together, plans them as a single strategy, and moves budget weekly toward whatever is converting. Google Ads and Meta Ads are also available as standalone services if you only need one channel managed.",
    },
    {
      question: "What do you need from us before campaigns launch?",
      answer:
        "Access to your existing ad accounts and analytics for the funnel audit, your current inventory and offers, and a clear view of which models and services carry the most margin. The audit comes first, so budget goes to the channels that deserve it before anything goes live.",
    },
    {
      question: "How is performance reported?",
      answer:
        "Monthly, tied to leads and showroom footfall rather than impressions or clicks. Spend is also reallocated weekly, so a course correction never waits for the month-end report.",
    },
    {
      question: "Can dealer-level campaigns run alongside our OEM's national advertising?",
      answer:
        "Yes. Dealer campaigns are built around your city, inventory, and offers, which national brand campaigns are not designed to do. OEMs and automotive brands can also run standardised programmes across their dealer networks.",
    },
    {
      question: "How long until we see results?",
      answer:
        "Campaigns typically go live within 7 to 10 business days of onboarding. How quickly leads follow depends on your market, budget, and the models you are pushing, which is exactly what the initial audit is meant to size up honestly.",
    },
  ],
  "dealer-data-services": [
    {
      question: "What data does Dealer Data Services actually work with?",
      answer:
        "Your lead, inventory, and CRM data, consolidated into one clean, de-duplicated source, with behavioural and intent signals from your live campaigns layered on top. The output is a single data layer that every other AutoSutra service can plug into.",
    },
    {
      question: "Who is this service for?",
      answer:
        "Multi-outlet dealers and networks whose leads, stock, and follow-up are spread across separate spreadsheets and systems. A single showroom running one system usually starts with CRM Solutions instead.",
    },
    {
      question: "Do we need to change our DMS or CRM to use it?",
      answer:
        "No. Data is consolidated from the systems you already run. AutoSutra's CRM and SaaS Platform integrate with most dealer management systems, and you can also run entirely on AutoSutra's platform if you prefer.",
    },
    {
      question: "How does cleaner data change our marketing?",
      answer:
        "Targeting gets sharper because campaigns are built on what buyers actually respond to rather than assumptions, and follow-up gets faster because sales teams stop chasing duplicate or stale enquiries. The insights feed back into every active channel, not just into a report.",
    },
  ],
  "google-ads": [
    {
      question: "Which Google campaign types do you run for dealerships?",
      answer:
        "Search, Performance Max, and local campaigns, structured around your highest-margin models and services. Bids and budgets are optimised weekly against a cost-per-lead target rather than clicks or impressions.",
    },
    {
      question: "How do you make sure we pay for leads and not just clicks?",
      answer:
        "Conversion tracking is wired to real leads before launch, so bidding optimises toward enquiries rather than form views. Negative keyword and placement hygiene cuts spend on searches that were never going to become a buyer.",
    },
    {
      question: "Do you need access to our existing Google Ads account?",
      answer:
        "Yes, if you have one: its history is useful for the audit and keeps learnings intact. If you do not, campaigns are set up fresh around your inventory.",
    },
    {
      question: "How much should a dealership budget for Google Ads?",
      answer:
        "It depends on your city, brands, and how many models you are pushing, so budget is sized during onboarding rather than quoted as a flat number. Our Google Ads benchmarks guide in Resources covers cost-per-lead ranges by vehicle category and city tier.",
    },
    {
      question: "Is Google Ads included in the plans on the pricing page?",
      answer:
        "Yes. Basic Facebook and Google campaign setup is part of the Starter plan, and geo-level campaigns across Facebook, Google, and OTT are part of Growth. Google Ads can also be taken as a standalone service.",
    },
  ],
  "meta-ads": [
    {
      question: "What does the Meta Ads service include?",
      answer:
        "Instagram and Facebook campaigns end to end: creative built around your best-performing inventory, lookalike and interest audiences tuned to your buyer profile, and retargeting sequences that bring people who browsed back to book a visit.",
    },
    {
      question: "Do we need to supply our own photos and videos?",
      answer:
        "Only if you already have good ones. Otherwise our Photography and Videography services produce showroom and walkaround assets, and Content Creation handles reels and carousels, so creative is never the bottleneck.",
    },
    {
      question: "Is Meta better than Google for dealerships?",
      answer:
        "They do different jobs. Google Ads catches buyers who are already searching; Meta builds awareness and demand earlier and then retargets them. Many dealer partners run both, and on Meta, prospecting and retargeting campaigns run in parallel from day one.",
    },
    {
      question: "How do you measure whether Meta Ads are working?",
      answer:
        "By footfall and leads, not reach. Creative and audiences that drive showroom visits get more budget; the rest is cut. Reporting is monthly and tied to what converted.",
    },
    {
      question: "Where does Meta Ads sit in the plans?",
      answer:
        "Basic Facebook and Google setup is part of Starter, and geo-level campaigns across Facebook, Google, and OTT are part of Growth. Meta Ads can also be taken as a standalone service.",
    },
  ],
  "local-seo": [
    {
      question: "What does Local SEO cover for a dealership?",
      answer:
        "Your Google Business Profile for every location, a steady cadence of reviews, posts, and local citations, and map-pack rank tracking against named competitors. The goal is winning the 'near me' search for your brand and category.",
    },
    {
      question: "We have several showrooms. Does each one get its own profile?",
      answer:
        "Yes. Every location's Google Business Profile is audited and optimised individually, and rankings are tracked per location, so an underperforming outlet gets fixed rather than hidden inside an average.",
    },
    {
      question: "How do you generate reviews without breaking Google's rules?",
      answer:
        "With a review generation and response strategy: asking genuine customers at the right moment and responding to every review, rather than buying or gating reviews. That is what builds local trust that lasts.",
    },
    {
      question: "How long before map rankings move?",
      answer:
        "Local SEO is cumulative. Profile fixes take effect quickly, while reviews and citations build over months. Rankings are tracked from the start, so you see movement as it happens instead of waiting for a quarterly report.",
    },
    {
      question: "Is Local SEO included in the plans?",
      answer:
        "Yes. Local SEO and Google Business Profile optimisation are part of every plan, from Starter upwards.",
    },
  ],
  "whatsapp-marketing": [
    {
      question: "Is automated WhatsApp messaging compliant?",
      answer:
        "Yes, when it is built on customer opt-in and approved message templates. Journeys run on WhatsApp Business messaging with Meta-approved templates, and a buyer only enters a journey after they have enquired or opted in.",
    },
    {
      question: "What happens the moment a lead comes in?",
      answer:
        "An automated reply goes out instantly, the buyer is guided through a nurture sequence toward a test drive, and your sales team is notified in real time. The moment intent is confirmed, the conversation is handed to a person.",
    },
    {
      question: "Will this replace our sales team's follow-up?",
      answer:
        "No. It closes the gap before follow-up. Automation handles the first response and the nurture steps so no enquiry goes cold, then hands off to your team when the buyer is ready to talk.",
    },
    {
      question: "Does WhatsApp Marketing work with our existing CRM?",
      answer:
        "Yes. WhatsApp lead notifications are part of every plan, and AutoSutra's CRM and SaaS Platform integrate with most dealer management systems, so a WhatsApp enquiry and its follow-up are tracked in the same pipeline.",
    },
    {
      question: "How is this different from the Omni Communication Platform?",
      answer:
        "WhatsApp Marketing is the managed service: we design and run the journeys for you. The Omni Communication Platform is the tool itself, covering SMS, RCS, WhatsApp, voice, and email on a per-message wallet, for dealerships that want to run channels in-house.",
    },
  ],
  "content-creation": [
    {
      question: "What do you produce each month?",
      answer:
        "A content calendar planned around your launches, offers, and inventory, delivered as platform-native formats: reels, carousels, and static posts, with copy written in your dealership's voice. Performance is reviewed monthly and the calendar shifts toward what resonates.",
    },
    {
      question: "Do we need to shoot the photos and videos ourselves?",
      answer:
        "No. Content Creation can work from your existing assets, or pair with our Photography and Videography services so shoots and posts are planned together.",
    },
    {
      question: "Which platforms is the content made for?",
      answer:
        "The formats are native to the platforms your buyers actually use, Instagram and Facebook first, and the same calendar can extend to the other channels you run.",
    },
    {
      question: "Will the content sound like a template?",
      answer:
        "No. Copy is written in your dealership's voice and built around your specific inventory and offers, not stock captions with the dealer name swapped in.",
    },
    {
      question: "How does content tie back to sales?",
      answer:
        "Content feeds the same funnel as your campaigns: reels and carousels built around real inventory give Meta Ads and retargeting something worth clicking, and the monthly review focuses on what drove enquiries, not just likes.",
    },
  ],
  photography: [
    {
      question: "Where do the shoots happen?",
      answer:
        "At your showroom, stockyard, or a lifestyle location, on a recurring cadence tied to new inventory so vehicles never sit unlisted. Tell us your city when you enquire so scheduling can be confirmed up front.",
    },
    {
      question: "What do we receive after a shoot?",
      answer:
        "Edited assets ready for web, social, and print: consistent listing photos for every vehicle, plus showroom and lifestyle shots for social media and your website.",
    },
    {
      question: "How quickly are photos delivered?",
      answer:
        "Turnaround is built to be fast, because a listing without photos loses buyers. Exact timing depends on shoot size and is agreed when your shoot cadence is set up.",
    },
    {
      question: "Why does listing photography matter so much for used-car dealers?",
      answer:
        "Because inconsistent or poor photos are one of the biggest reasons buyers drop off before enquiring. Consistent, premium listing photography is what makes online stock look trustworthy; our used-car photo and video standards guide in Resources goes into the detail.",
    },
    {
      question: "Can photography be combined with video?",
      answer:
        "Yes. Photography and Videography are often scheduled together, so one visit produces listing photos, walkaround videos, and short-form cuts.",
    },
  ],
  videography: [
    {
      question: "What kinds of video do you produce?",
      answer:
        "Walkaround videos that answer buyer questions before they ask, customer testimonial films, and brand films, each cut into long-form and short-form versions for reels and paid social.",
    },
    {
      question: "How often do you film?",
      answer:
        "Monthly by default: each month we identify the models and moments worth filming, shoot, and cut the footage for every channel. The cadence can scale with your inventory turnover.",
    },
    {
      question: "Do we need our own equipment or studio?",
      answer:
        "No. Production is handled end to end at your showroom or location. You provide the vehicles, the people, and access on the day.",
    },
    {
      question: "Can testimonial videos be used in ads?",
      answer:
        "Yes. Testimonial and walkaround footage is cut into short-form assets sized for Meta Ads and retargeting, with long-form versions for your website and video channels.",
    },
    {
      question: "Where do walkaround videos make the biggest difference?",
      answer:
        "On used-car and premium listings, where buyers want to see condition and detail before visiting, and on EV models, where a video can answer range and charging questions up front.",
    },
  ],
  "crm-solutions": [
    {
      question: "Is this a generic CRM with car fields added?",
      answer:
        "No. It is built around automotive sales stages, from enquiry to test drive, booking, and delivery, with follow-up reminders tied to those stages rather than a generic pipeline.",
    },
    {
      question: "Can we migrate our existing leads and inventory?",
      answer:
        "Yes. Migrating existing leads and inventory is part of onboarding, along with mapping your sales stages and training your team.",
    },
    {
      question: "Does it integrate with our dealer management system?",
      answer:
        "Yes, with most DMS platforms. You can also run entirely on AutoSutra's platform if you would rather not maintain two systems.",
    },
    {
      question: "How does the CRM connect to lead generation and WhatsApp?",
      answer:
        "Verified leads and WhatsApp enquiries land in the CRM in real time, so every enquiry, its source, and its follow-up history sit in one place. That is what makes 'which channel actually sold cars' an answerable question.",
    },
    {
      question: "Which plan includes the CRM?",
      answer:
        "Dealer SaaS tools for lead tracking and conversion are part of the Growth and Enterprise plans, and Enterprise includes the complete SaaS suite integration. CRM Solutions can also be scoped as a standalone service.",
    },
  ],
  "saas-platform": [
    {
      question: "What is the AutoSutra SaaS Platform?",
      answer:
        "A single live dashboard that brings your leads, campaigns, and CRM data together, with custom reporting built around the metrics you actually track and one login for every AutoSutra service you run.",
    },
    {
      question: "Do we need to use every AutoSutra service to benefit from it?",
      answer:
        "No. Connect the services you run today and add more as you grow. The dashboard scales with your services and locations.",
    },
    {
      question: "Can multi-location networks and OEMs use it?",
      answer:
        "Yes. Enterprise programmes use it for nationwide dealer-network performance insights, so an OEM or multi-city network sees every outlet measured against the same metrics.",
    },
    {
      question: "How is it different from CRM Solutions?",
      answer:
        "CRM Solutions is the sales-floor tool for working individual leads. The SaaS Platform is the layer above it, where campaign spend, lead flow, and CRM outcomes are reported together.",
    },
    {
      question: "Which plans include the platform?",
      answer:
        "Dealer SaaS tools are part of the Growth plan, and the complete SaaS suite integration is part of Enterprise.",
    },
  ],
  "omni-communication-platform": [
    {
      question: "Which channels does the platform cover?",
      answer:
        "SMS, GlobalSMS for international numbers, RCS, WhatsApp, voice (IVR, missed-call numbers, Click-to-Call, and Text-to-Speech broadcasts), and email, plus an AI Suite for routine replies and lead qualification, all running from one unified wallet.",
    },
    {
      question: "How is the platform priced?",
      answer:
        "Per message or per minute from a prepaid unified wallet with a minimum top-up of ₹10,000. SMS is ₹0.15 per message, RCS ₹0.22, WhatsApp utility ₹0.12 and WhatsApp marketing ₹0.8631, with a WhatsApp platform fee of ₹1,500 plus GST per month or ₹15,000 plus GST per year. IVR and missed-call numbers are sold as monthly bundles, shown in the rate card above. Prices exclude GST, and WhatsApp rates follow Meta's pricing.",
    },
    {
      question: "Do we need DLT registration before sending SMS?",
      answer:
        "Yes. Every commercial SMS in India passes through TRAI's DLT system, and messages from unregistered senders or templates are dropped. You can register on an operator portal yourself, and our DLT registration guide in Resources walks through it, or we can handle entity, header, and template registration for you as a paid setup service.",
    },
    {
      question: "Is there a lock-in or minimum term?",
      answer:
        "No fixed term. The only minimum is the ₹10,000 wallet top-up. Channel-specific items such as the WhatsApp platform fee and IVR numbers are billed monthly or annually as shown in the rate card.",
    },
    {
      question: "How do we log in once we are set up?",
      answer:
        "Through the Omni portal at omnisutra.online. Existing customers can use the login link at the top of this page.",
    },
    {
      question: "Can agencies or resellers offer this to their own clients?",
      answer:
        "Yes, through the Omni reseller programme, with white-label invoicing and reporting and one wallet across all your clients. The reseller page has partner pricing and details.",
    },
  ],
};

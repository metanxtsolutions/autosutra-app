import type { Faq } from "@/data/faq";

// =============================================================================
// Dealer marketing benchmarks: the data behind /benchmarks.
//
// HOW PUBLISHING WORKS
// - The page, its sitemap entry, and the link from the Resources hub only
//   exist while `benchmarkReports` has at least one report. With the array
//   empty, /benchmarks returns 404 and nothing thin is published.
// - Add reports newest first. The first entry is the live report; older
//   ones render as "Previous periods" below it.
// - Every figure must come from AutoSutra-managed campaign data for the
//   stated period. Publish ranges (for example the 25th to 75th percentile
//   across accounts) rather than single averages, and say in `sample` how
//   many accounts, cities, and how much spend the figures cover. Nothing on
//   this page may be estimated, rounded up for effect, or borrowed from a
//   third-party report.
// - Keep the same table ids and column order month to month so readers can
//   compare periods.
//
// A worked template is at the bottom of this file. Copy it into the array,
// replace every "₹___" and "___" with real figures, and delete the comment.
// =============================================================================

export type BenchmarkTable = {
  // Stable identifier reused across periods, e.g. "cpl-by-channel".
  id: string;
  title: string;
  // One sentence that answers the table's question on its own, shown
  // directly above the table and the first thing an answer engine lifts.
  answer: string;
  columns: string[];
  // Cell values as display strings, e.g. "₹420 to ₹780". First cell is the
  // row label.
  rows: string[][];
  note?: string;
};

export type BenchmarkReport = {
  // ISO month, e.g. "2026-10". Used for sorting, anchors, and schema.
  period: string;
  // Human label, e.g. "October 2026".
  periodLabel: string;
  // ISO date the report was published, e.g. "2026-11-05".
  publishedDate: string;
  // Visible one-sentence description of the data behind the numbers:
  // how many dealer accounts, which vehicle segments and city tiers, and
  // the spend covered. Required; readers and AI systems need it to judge
  // the figures.
  sample: string;
  takeaways: string[];
  tables: BenchmarkTable[];
  // How the figures were collected and calculated, in plain English.
  methodology: string[];
  // Period-specific questions. The number-free questions in
  // `benchmarkBaseFaqs` render on every report automatically.
  faqs: Faq[];
};

export const BENCHMARK_UPDATE_CADENCE = "monthly";

// Newest first. Empty until the first real report is added.
export const benchmarkReports: BenchmarkReport[] = [];

export const latestBenchmarkReport: BenchmarkReport | undefined =
  benchmarkReports[0];

// Questions that hold regardless of the period's numbers.
export const benchmarkBaseFaqs: Faq[] = [
  {
    question: "Where do these benchmark figures come from?",
    answer:
      "From campaigns AutoSutra manages for car, bike, EV, and used-car dealerships across India, aggregated and anonymised for the period stated on the page. No individual dealership can be identified, and no figure is estimated or taken from a third-party report.",
  },
  {
    question: "Why are the figures shown as ranges instead of a single average?",
    answer:
      "Because a single national average misleads. Cost per lead for a premium SUV in Mumbai and an entry-level two-wheeler in a tier-3 town can differ by multiples, and both can be healthy for their segment. A range shows where most dealerships in that segment actually land.",
  },
  {
    question: "How should a dealership use these benchmarks?",
    answer:
      "As a sanity check, not a target. Find the row that matches your vehicle segment and city tier, compare it with your own 90-day trailing figures, and investigate only if you sit well outside the range without a clear reason such as a launch, a budget change, or a new competitor in the auction.",
  },
  {
    question: "How often is this page updated?",
    answer:
      `Once a ${BENCHMARK_UPDATE_CADENCE.replace(/ly$/, "")}, with the data period and publication date shown at the top of the page. Earlier periods stay available below the current report so trends can be compared.`,
  },
  {
    question: "Can I get benchmarks for my specific city or brand?",
    answer:
      "The published tables are aggregated by vehicle segment and city tier to keep individual dealerships anonymous. For a comparison specific to your city, brands, and current campaigns, book a consultation and we will run it against your own accounts.",
  },
];

// -----------------------------------------------------------------------------
// TEMPLATE (copy into `benchmarkReports`, fill in real figures, then delete)
//
// {
//   period: "2026-10",
//   periodLabel: "October 2026",
//   publishedDate: "2026-11-05",
//   sample:
//     "Based on ___ dealer accounts across ___ cities, covering roughly ₹___ of managed spend on Google and Meta between 1 and 31 October 2026.",
//   takeaways: [
//     "___ (one sentence, one finding, with the number in it)",
//     "___",
//     "___",
//   ],
//   tables: [
//     {
//       id: "cpl-by-channel",
//       title: "Cost per verified lead by channel and vehicle segment",
//       answer:
//         "In October 2026, cost per verified lead ranged from ₹___ to ₹___ on Google Search and ₹___ to ₹___ on Meta across the segments below.",
//       columns: ["Channel", "Cars", "Two-wheelers", "EV", "Used cars"],
//       rows: [
//         ["Google Search", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//         ["Google Performance Max", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//         ["Meta (prospecting)", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//         ["Meta (retargeting)", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//       ],
//       note: "Ranges are the 25th to 75th percentile across accounts. A verified lead is phone-confirmed for intent, budget, and location.",
//     },
//     {
//       id: "cpl-by-city-tier",
//       title: "Cost per verified lead by city tier",
//       answer: "___",
//       columns: ["City tier", "Cars", "Two-wheelers", "Used cars"],
//       rows: [
//         ["Metro (Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad)", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//         ["Tier-2 cities", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//         ["Tier-3 towns and districts", "₹___ to ₹___", "₹___ to ₹___", "₹___ to ₹___"],
//       ],
//     },
//     {
//       id: "funnel-conversion",
//       title: "Lead-to-walk-in and walk-in-to-booking rates",
//       answer: "___",
//       columns: ["Segment", "Lead to walk-in", "Walk-in to booking"],
//       rows: [
//         ["Cars", "___% to ___%", "___% to ___%"],
//         ["Two-wheelers", "___% to ___%", "___% to ___%"],
//         ["EV", "___% to ___%", "___% to ___%"],
//         ["Used cars", "___% to ___%", "___% to ___%"],
//       ],
//       note: "Walk-ins are counted only where the dealership's CRM linked the visit to the originating lead.",
//     },
//     {
//       id: "response-time",
//       title: "First-response time and its effect on walk-in rate",
//       answer: "___",
//       columns: ["First response", "Share of leads", "Lead to walk-in"],
//       rows: [
//         ["Under 5 minutes (automated WhatsApp)", "___%", "___%"],
//         ["5 to 60 minutes", "___%", "___%"],
//         ["Over 1 hour", "___%", "___%"],
//       ],
//     },
//   ],
//   methodology: [
//     "Figures are aggregated from campaigns AutoSutra managed during the period, across the accounts described above. Each account's cost per verified lead is calculated as media spend divided by phone-verified leads delivered; the published range is the 25th to 75th percentile across accounts, so a single unusual account cannot move it.",
//     "Walk-in and booking rates only include accounts where the dealership's CRM linked showroom visits to the originating lead. Accounts without that linkage are excluded from the funnel table rather than estimated.",
//     "Segments follow the dealership's primary inventory. City tiers follow the classification used across this site: the eight metros we serve directly, tier-2 cities, and tier-3 towns and districts.",
//   ],
//   faqs: [
//     {
//       question: "Why did ___ move in October 2026?",
//       answer: "___",
//     },
//   ],
// },
// -----------------------------------------------------------------------------

# DRAFT for review: Meta Ads benchmark report, August 2026 (figures withheld)

Status: **draft, not published.** `/benchmarks` stays a 404 until a report is added to `src/data/benchmarks.ts`.

This repository is public, so this file carries **no spend, lead, or cost figures and no campaign-level rows.** The full working draft, with every number and the campaign rows behind it, is kept locally in `docs/private/`, which is git-ignored. This version exists so the structure, wording, and open decisions can be reviewed.

## 1. What the data covers, and what it does not

| | |
|---|---|
| Source | Read-only pull from the connected Meta ad accounts, campaign level |
| Period | 1 to 31 August 2026 |
| Accounts with spend in the period | 4 of the 14 accessible; the rest were idle or placeholder accounts |
| Geography | Eastern India, one metro and two tier-2 cities |
| Segments | Mass-market cars, premium cars, electric cars, premium two-wheelers |
| Channel | Meta only (Facebook and Instagram) |
| Lead type | Leads as reported by Meta from instant forms |

## 2. Five decisions needed before anything is published

1. **Meta leads are not verified leads.** Meta counts a submitted instant form. The site defines a verified lead as phone-confirmed for intent, budget, and location. The tables are therefore titled "cost per Meta lead". A cost per verified lead needs the verification pass rate from the calling team or CRM.
2. **The sample is small and regional.** Four accounts in one region cannot be presented as "India". Percentile ranges across accounts are not meaningful at this size, so the draft shows the range across campaigns and the segment average. The page title needs a scope, or the report waits for a broader sample.
3. **Client consent.** Two of the four segments are a single dealer each, so they are identifiable even with names removed. Publishing needs those clients' agreement.
4. **No Google or showroom data.** Cost per lead on Google, lead-to-walk-in, walk-in-to-booking, and response-time tables cannot be filled from Meta. They need Google Ads and CRM figures for the same accounts.
5. **Some campaigns reported no leads.** A material share of the period's spend went to a traffic campaign and to campaigns optimised for website leads, none of which reported a lead to Meta. That usually means the website lead event is not firing. It is worth fixing regardless of this report, and those campaigns are excluded from every cost-per-lead figure.

## 3. Proposed tables (structure only)

### Table 1. Cost per Meta lead by vehicle segment

| Segment | Accounts | Campaigns | Cost per lead, range across campaigns | Cost per lead, segment average | Leads |
|---|---|---|---|---|---|
| Mass-market cars | 2 | 6 | withheld | withheld | withheld |
| Premium cars | 1 | 3 | withheld | withheld | withheld |
| Electric cars | 1 | 2 | withheld | withheld | withheld |
| Premium two-wheelers | 1 | 2 | withheld | withheld | withheld |

Segment average is total spend divided by total leads for the segment. Instant-form campaigns only.

### Table 2. Meta media cost and response by segment

| Segment | CPM | Link click-through rate | Link click to lead rate |
|---|---|---|---|
| Mass-market cars | withheld | withheld | withheld |
| Premium cars | withheld | withheld | withheld |
| Electric cars | withheld | withheld | withheld |
| Premium two-wheelers | withheld | withheld | withheld |

### Table 3. Metro versus tier-2 city

| Comparison | Tier-2 city | Metro | Like for like? |
|---|---|---|---|
| Premium two-wheelers: same dealer, same model, same month | withheld | withheld | Yes |
| Mass-market cars | withheld | withheld | No: different brands and dealers, indicative only |

## 4. What the data supports, in words

The direction of each finding is stated here without its size. The numbers are in the private draft.

1. Electric cars cost several times more per Meta lead than mass-market cars, on a small base of leads.
2. In the one like-for-like comparison, the same two-wheeler campaign cost more per lead in the metro than in the tier-2 city.
3. Cost per lead varied widely between campaigns in the same segment, by more than the gap between the segment averages for cars and two-wheelers.
4. Every reported lead came from an instant form. Campaigns optimised for website leads reported none.

## 5. Report object, with figures left blank

This is the shape that would be pasted into `benchmarkReports` in `src/data/benchmarks.ts` once the five decisions are settled. Every `₹___` and `___` is filled from the private draft at that point. The table titles, notes, sample sentence, and methodology already reflect the limits above.

```ts
{
  period: "2026-08",
  periodLabel: "August 2026",
  publishedDate: "2026-__-__",
  sample:
    "Based on ___ Meta lead campaigns across ___ dealer ad accounts in eastern India, covering ₹___ of Facebook and Instagram spend and ___ leads between 1 and 31 August 2026. Leads are as reported by Meta, before phone verification.",
  takeaways: [
    "Electric cars cost about ___ times as much per Meta lead as mass-market cars: ₹___ against ₹___.",
    "The same two-wheeler campaign cost ___% more per lead in the metro (₹___) than in the tier-2 city (₹___).",
    "Cost per lead varied widely between campaigns in the same segment: mass-market car campaigns ranged from ₹___ to ₹___.",
  ],
  tables: [
    {
      id: "meta-cpl-by-segment",
      title: "Cost per Meta lead by vehicle segment",
      answer:
        "In August 2026, cost per Meta lead averaged ₹___ across all campaigns, from ₹___ for ___ to ₹___ for ___.",
      columns: ["Segment", "Range across campaigns", "Segment average", "Leads"],
      rows: [
        ["Mass-market cars", "₹___ to ₹___", "₹___", "___"],
        ["Premium cars", "₹___ to ₹___", "₹___", "___"],
        ["Electric cars", "₹___ to ₹___", "₹___", "___"],
        ["Premium two-wheelers", "₹___ to ₹___", "₹___", "___"],
      ],
      note: "Meta-reported instant-form leads, before phone verification. Segment average is spend divided by leads.",
    },
    {
      id: "meta-media-cost-by-segment",
      title: "Meta media cost and response by segment",
      answer:
        "CPM ranged from ₹___ to ₹___ by segment, and between ___% and ___% of link clicks became a lead.",
      columns: ["Segment", "CPM", "Link click-through rate", "Link click to lead"],
      rows: [
        ["Mass-market cars", "₹___", "___%", "___%"],
        ["Premium cars", "₹___", "___%", "___%"],
        ["Electric cars", "₹___", "___%", "___%"],
        ["Premium two-wheelers", "₹___", "___%", "___%"],
      ],
    },
    {
      id: "meta-cpl-metro-vs-tier-2",
      title: "Cost per Meta lead: metro versus tier-2 city",
      answer:
        "For the same two-wheeler campaign in the same month, a lead cost ₹___ in the tier-2 city and ₹___ in the metro.",
      columns: ["Comparison", "Tier-2 city", "Metro"],
      rows: [
        ["Premium two-wheelers (like for like)", "₹___", "₹___"],
        ["Mass-market cars (different dealers, indicative)", "₹___", "₹___"],
      ],
    },
  ],
  methodology: [
    "Figures come from Meta Ads campaigns AutoSutra managed in August 2026 for dealer ad accounts in eastern India. Cost per lead is campaign spend divided by the leads Meta reported for that campaign. Only campaigns that collect leads through Meta instant forms are included; traffic campaigns and campaigns optimised for website leads are excluded because they did not report leads to Meta.",
    "A Meta lead is a submitted form. It is counted before AutoSutra's phone verification for intent, budget, and location, so cost per verified lead is higher than the figures shown here.",
    "The sample is small and regional. Ranges are the lowest and highest campaign in each segment, not percentiles, and should be read as what these dealerships paid rather than as a national norm.",
  ],
  faqs: [
    {
      question: "Why does this report only cover Meta Ads?",
      answer:
        "Because it is built only from data we can stand behind for the period. Google Ads and showroom conversion figures will be added as separate tables when they are available for the same accounts.",
    },
  ],
}
```

## 6. Follow-up code change, if the report is approved

The page heading is currently fixed as "Dealer marketing benchmarks in India, {period}". With a regional, Meta-only sample it should be driven by the report, for example an optional `scopeLabel` such as "Meta Ads lead benchmarks for dealerships in eastern India". That change is not in this pull request.

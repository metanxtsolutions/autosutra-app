# SEO / AEO / GEO optimisation of autosutra.in — audit and change report

Date: 24 September 2026
Scope: precision optimisation of the existing, live Next.js site. No redesign, no URL changes, no content rewrites.
Benchmark: loanspartner.in (public pages only; full audit notes in the appendix).

---

## 1. Existing website health: what was already good, and what was deliberately left alone

The site was already in strong technical shape. Most of what a standard SEO audit would flag had been handled in earlier phases (see git history from July 2026). Nothing below was changed.

**Technical foundation (unchanged)**
- Next.js 15 App Router on Vercel, fully static/SSG for every public page. All copy, FAQ answers (even inside collapsed accordions) and JSON-LD are in the initial HTML, so crawlers and answer engines never depend on JavaScript.
- Canonical host and redirects are correct: `http` → `https` → `www`, trailing slashes stripped (308), legacy WordPress paths and two old indexed URLs redirected, `/city/*` legacy locations redirected to `/india/*`, and a real 404 status for unknown paths.
- Self-referencing canonical on every public page, one H1 per template, unique titles via a `%s | AutoSutra` template, descriptions truncated at word boundaries under 160 characters.
- `robots.ts` and a generated `sitemap.xml` (1,207 URLs live) whose `lastmod` is derived from real git history rather than build time. Internal `/login` and `/leads` routes are noindexed and excluded from the sitemap.
- Fonts self-hosted through `next/font`, images through `next/image`, no render-blocking third-party CSS. GA4 loads `afterInteractive`; Vercel Speed Insights present. Lead attribution tracker intact.
- Per-route generated Open Graph images for services, resources and case studies.

**Structured data (mostly unchanged)**
- Organization (with real Kolkata address, phone, email, `sameAs`), Service, FAQPage, BreadcrumbList, Article/BlogPosting with dates, OfferCatalog for pricing, WebPage + ProfessionalService on location pages. All blocks parse.

**Content and information architecture (unchanged)**
- 66 resource articles with intro, H2 sections, bullets, 6–8 FAQs each (525 FAQ pairs), visible byline, updated date, table of contents, related reading, related services, tags, RSS feed and an HTML sitemap.
- Hub-and-spoke IA: 13 services, 5 solutions, 6 industries, 8 metro pages, 36 state/UT hubs, 796 district pages, 13 district-city pages, plus service×city, solution×city and industry×service combinations.
- Honest trust signals: case studies and testimonials are explicitly labelled illustrative (commit 6cdc20b), no invented registrations, awards or client counts. The "reviews" FAQ and the About page's "leadership profiles coming soon" note were left as they are.

**Titles that were deliberately not touched**
- Homepage, `/services`, `/solutions`, `/industries`, `/case-studies` and two resource titles were tuned in July against real Search Console CTR data (commits 31abb7b, 0fff291, 18de72f). Those stay.

**Pre-existing uncommitted work found in the working tree and left intact**
- A new DLT registration article, a "playbook" list on service pages with 4+ related guides, and a "local marketing reading" block on location pages. These were not written by this audit and are not part of it, but they are included in the build verification below.

---

## 2. Baseline (before changes)

### Routes and indexability

| Template | URLs in sitemap | Notes |
|---|---|---|
| District pages `/india/{state}/{district}` | 796 | unique hand-written market context per district |
| Service × city `/services/{s}/{city}` | 104 | templated from service + city data |
| Industry × service | 78 | templated |
| Resource articles | 66 | hand-written |
| Solution × city | 40 | templated |
| State/UT hubs | 36 | |
| Resource tag pages | 20 | |
| Service detail | 13 | |
| District-city pages | 13 | |
| Metro city pages `/city/{city}` | 8 | |
| Industry detail / case studies / solution detail | 6 / 6 / 5 | |
| Resource categories | 3 | |
| Static pages (home, pricing, about, contact, book-a-demo, resellers, hubs, HTML sitemap) | 12 | |
| **Total** | **1,207** | 1,210 after this work (2 legal pages added, plus the pre-existing new article) |

Not in sitemap and correctly so: `/careers` (placeholder), `/login`, `/leads/*` (noindex).

### Live checks (curl, 24 Sep 2026)

| Check | Result |
|---|---|
| `https://www.autosutra.in/` | 200, TTFB ≈ 0.8 s cold from this location, 167 KB HTML |
| `http://autosutra.in/` → | 308 → `https://autosutra.in/` → 308 → `https://www.autosutra.in/` (two hops) |
| `/services/` (trailing slash) | 308 → `/services` |
| Unknown path | 404 (but title/canonical were the homepage's; fixed) |
| Social image on `/pricing`, `/about`, `/city/*`, `/india/*`, `/industries/*`, `/solutions/*` | **none** (fixed; see §4) |
| Social image on `/services/*`, `/resources/*`, `/case-studies/*` | present |
| FAQ answer text in HTML when collapsed | yes |
| hreflang | one self-referencing `en-IN` per page (inert, harmless) |

### Performance (Lighthouse 12, mobile emulation, live homepage, local Chrome)

| Metric | Value |
|---|---|
| Performance / Accessibility / Best Practices / SEO | 68 / 92 / 100 / 100 |
| LCP | 5.8 s (lab) |
| FCP | 3.5 s |
| Speed Index | 4.7 s |
| TBT | 140 ms |
| CLS | 0 |
| Server response (root document) | 40 ms |
| Total transfer | 729 KiB |

LCP element is the hero paragraph, which framer-motion renders at `opacity: 0` until hydration and then fades in, so the LCP is gated by JavaScript rather than by the network. Field data (CrUX/INP): **requires external measurement**. The PageSpeed Insights API was over its shared daily quota; use Search Console's Core Web Vitals report or PSI in a browser.

Accessibility flags (not changed, design decisions): brand orange `#f26222` small uppercase labels on white (3.2:1), light grey stat "+"/suffix glyphs (1.9:1), and the 6 px testimonial carousel dots (target size).

---

## 3. LoansPartner.in benchmark (summary; full notes in the appendix)

LoansPartner is also a Next.js/Vercel site with 262 sitemap URLs. It is a reasonable benchmark, not a model to copy.

**What they do well and that is relevant to us**
- One canonical `Organization` node with a stable `@id` on every page, referenced by every `Service.provider`, `Article.publisher`, `WebPage.isPartOf` and `WebSite.publisher`. → Adopted (§4).
- Complete per-route social metadata. → Adopted (we had it on three templates only; now everywhere).
- Visible breadcrumbs + BreadcrumbList on every inner page. → Adopted on the two templates that had schema without a visible trail.
- Google-specific `max-image-preview:large` / `max-snippet:-1` directives. → Adopted.
- Page-specific FAQ blocks whose answers open with a verdict, comparison tables, numbered steps, "On this page" TOC on long pages, visible published/updated/reviewed lines. → We already have most of this on articles; the remaining gaps are content work (§6).
- A dated, monthly-updated benchmark page and a glossary with `DefinedTerm` schema. → Content opportunities (§6).

**What is not relevant or should not be copied**
- Their 112 templated product×city pages (~67% similar to siblings, off-topic reused FAQ) are a doorway-page pattern. We have a similar combination-page layer (service×city, solution×city, industry×service; 222 pages) which is a pre-existing architectural choice, so it was not changed, but see the risk note in §5.
- Their per-city `FinancialService "LoansPartner Mumbai"` nodes with the HQ address. We emit a similar `ProfessionalService` node with our Kolkata HQ on 850+ location pages. Left as is (address is real, area served is stated), flagged in §5.
- Anonymous "Credit Desk" organisation author with no named people, zero outbound citations in guides, `meta keywords`, build-time sitemap `lastmod`, volatile rate numbers in titles, tagline H1s, no images at all, `Article.image` URLs that 404. None of these are worth copying; some we already do better (real git-based `lastmod`, real cover images, article FAQs).

### Feature matrix

| Feature | LoansPartner | AutoSutra (before) | Already present? | Value | Risk | Action |
|---|---|---|---|---|---|---|
| Unique title/description per page | Yes | Yes | Yes | — | — | Kept. 6 industry detail titles clarified. |
| Self-canonical, redirects, real 404 | Yes | Yes (404 inherited homepage title/canonical) | Mostly | Med | Low | 404 metadata fixed; root canonical scoped to homepage |
| OG/Twitter image on every page | Yes | Only 3 templates | Partly | High | Low | Default social image added sitewide, file-based images preserved |
| Organization `@id` + logo + entity wiring | Yes | Organization without `@id`/logo; anonymous provider objects | Partly | Med | Low | Added `@id`, `logo`, `knowsAbout`, `WebSite`, wired all references |
| Article schema with image + publisher logo | Partly (image 404s) | No image/logo | Partly | Med | Low | Added image, publisher logo, `inLanguage`, `articleSection`, `isPartOf` |
| FAQ blocks + FAQPage schema | Everywhere | Home, pricing, services hub, articles, location pages, combos | Yes | — | — | Kept. Service detail pages have none (content gap, §6) |
| Visible breadcrumbs matching schema | Everywhere | Missing on service detail and case study detail | Partly | Med | Low | Added on both templates |
| Robots disallow for internal/API paths | Yes | None | No | Low | Low | Added `/api/`, `/leads` |
| Googlebot preview directives | Yes | No | No | Low | Low | Added |
| Legal pages in sitemap | Yes | No | No | Low | Low | Added |
| Internal linking (article ↔ service ↔ location) | Good | Good (cards, related reading, related services, tags) | Yes | — | — | Kept. No inline body links (content-model limit, §5) |
| Topic clusters | Products/guides/glossary/lenders | Services/solutions/industries/resources/locations | Yes | — | — | Kept |
| Entity signals (About, contact, address, sameAs) | Good, anonymous | Good, anonymous | Yes | — | — | Named authors need real people (§5) |
| AEO direct answers / tables / steps | Strong | Articles: intro + sections + FAQs; services: benefits + steps; no tables | Partly | Med | Med | Content work, not template work (§6) |
| Dated benchmark page, glossary | Yes | No | No | High | Med | Recommended (§6) |
| Trust signals | Compliance framing, no proof | Honest "illustrative" labels, no proof | Partly | High | — | Needs real client proof (§5) |
| Content structure | Fixed H2 template per product | Consistent per template | Yes | — | — | Kept |

---

## 4. Implemented changes

All changes are LOW risk unless stated. Build, lint and type-check pass; verification details in §7. Nothing was committed; the working tree also contains the pre-existing unrelated edits noted in §1.

| # | File | Change | Reason | SEO / AEO / GEO benefit | Risk |
|---|---|---|---|---|---|
| 1 | `src/lib/seo.ts` | Every page built with `pageMetadata()` now carries a default `og:image` / `twitter:image` (`/opengraph-image`, 1200×630). New `ownSocialImage` flag lets a route with its own `opengraph-image.tsx` keep it. | Next.js replaces the parent's `openGraph` object wholesale, so ~1,100 pages were sharing on WhatsApp, LinkedIn and X with no image. | Complete social previews for every page (WhatsApp is the primary share channel for this audience). | Low |
| 2 | `src/app/services/[slug]/page.tsx`, `src/app/resources/[slug]/page.tsx`, `src/app/case-studies/[slug]/page.tsx` | Pass `ownSocialImage: true`. | Preserve the per-route generated images that were already live. | No regression on the three templates that already had images. | Low |
| 3 | `src/lib/schema.ts` | Organization gains `@id` (`/#organization`), `logo`, `knowsAbout` (its six service areas). New `websiteSchema()` (`/#website`, `inLanguage`, `publisher`). Every `provider`, `publisher`, `author`, `parentOrganization` and `isPartOf` now references those `@id`s instead of an anonymous inline object. | One resolvable entity across 1,210 pages. | GEO: answer engines resolve a single "AutoSutra" entity; Google site-name and logo eligibility. | Low |
| 4 | `src/lib/schema.ts` | Article/BlogPosting and case-study Article gain `image` (the visible cover), `publisher.logo`, `inLanguage`, `articleSection`, `isPartOf`. | `image` is required for Article rich results and was missing; the cover already renders on the page. | Article rich-result eligibility; cleaner citations in AI answers. | Low |
| 5 | `src/app/page.tsx` | Homepage emits the `WebSite` node and sets its own canonical/hreflang. | Site-name structured data belongs on the homepage. | Site name in SERPs; explicit homepage canonical. | Low |
| 6 | `src/app/layout.tsx` | Removed the root-level canonical (it was inherited by the 404 page, `/login` and `/leads`, all of which declared the homepage as canonical). Added `googleBot` directives `max-image-preview:large`, `max-snippet:-1`, `max-video-preview:-1` (googlebot-only so `noindex` pages are not contradicted). | Correctness; larger previews in Discover/image results and unrestricted snippets. | Fewer conflicting signals; richer result eligibility. | Low |
| 7 | `src/app/not-found.tsx` | Own title ("Page not found") and description. Next.js already injects `noindex` on 404s. | 404 page was titled with the homepage tagline. | Tidy 404 signals. | Low |
| 8 | `src/app/robots.ts` | `Disallow: /api/` and `/leads`. `/login` stays crawlable so its `noindex` is read. | Internal-only surfaces. | Crawl budget; no accidental indexing of auth endpoints. | Low |
| 9 | `src/app/sitemap.ts` | Added `/legal/privacy-policy` and `/legal/terms` (priority 0.2, yearly). | Linked from every footer, indexable, but undiscoverable via sitemap. | Trust pages discoverable; E-E-A-T completeness. | Low |
| 10 | `src/app/services/[slug]/page.tsx`, `src/app/case-studies/[slug]/page.tsx` | Render the existing `Breadcrumbs` component under the hero, using the same items as the BreadcrumbList schema. Same placement as the sibling solution/industry templates. | Google asks that breadcrumb markup reflect a visible trail; these two templates had schema only. | Breadcrumb rich results; consistent navigation. | Low–Medium (small visible addition, consistent with existing design) |
| 11 | `src/data/industries.ts`, `src/app/industries/[slug]/page.tsx` | New `seoTitle` per industry, e.g. "Car Dealership Marketing & Lead Generation" instead of "Car Dealerships". H1 and content unchanged. | The bare noun read as if AutoSutra were a dealership; these six titles were not part of the July CTR-tuned set. | Query match and entity disambiguation for six commercial pages. | Low |
| 12 | `src/components/analytics/google-analytics.tsx` | `preconnect` to `googletagmanager.com` and `google-analytics.com`. | Lighthouse flagged ~360 ms of connection setup. | Small LCP/TBT help; no tracking change. | Low |
| 13 | `src/components/layout/header.tsx`, `footer.tsx` | `sizes` on the logo `next/image` (rendered at 115–148 px). | Browser was fetching the 3840 px variant (52 KiB wasted, and it was `priority`-preloaded). | Faster first paint on every page. Verified: now loads the 384 px variant. | Low |
| 14 | `src/app/login/page.tsx`, `src/app/leads/layout.tsx` | `title: { absolute }` to stop "AutoSutra \| AutoSutra". | Cosmetic; internal noindex pages. | — | Low |

---

## 5. Considered and not implemented

| Idea | Why not |
|---|---|
| Fix the LCP by changing the hero entrance animation | The hero text is hidden until hydration (framer-motion `initial="hidden"`), which is the whole 5.8 s lab LCP. The fix is a UX change on the most important page (render text visible on the server and animate with CSS, or drop the fade). The brief says not to trade animation for lab metrics without evidence. **Recommended next step:** check Search Console → Core Web Vitals (field LCP). If mobile LCP is "poor" there, make the change; it is a ~10-line edit in `src/components/home/hero.tsx`. |
| Reduce the apex → www double redirect | Domain-level Vercel setting (redirect apex straight to `https://www`), not code. Low priority; only affects visitors typing `http://autosutra.in`. |
| Remove or noindex the templated combination pages (service×city 104, solution×city 40, industry×service 78) | High risk. They are a deliberate earlier architecture; removing pages destroys any equity they hold. **Recommended:** in Search Console, filter these paths; if most are "Crawled – currently not indexed" or earn zero impressions after 90 days, consolidate them into the parent service pages with 301s. |
| Remove the `ProfessionalService` node from 850+ location pages | Deliberate earlier decision using the real HQ address plus `areaServed`; defensible under Google's policy, and not the same as inventing a branch. Kept, but if a structured-data manual action ever appears, this is the first thing to remove. The `Service` + `areaServed` node on the same pages already carries the intent. |
| Add FAQs to the 13 service detail pages | Would need genuine, hand-written questions per service. Templating them from existing fields would just duplicate the page (which the brief prohibits). Listed as a content task in §6. |
| Rewrite article headings into questions | 2 of 361 headings are question-form. Mass-rewriting 66 articles is exactly what the brief forbids; the articles already carry FAQs and definition-style intros. |
| Inline contextual links inside article paragraphs | The article data model is plain strings (`body: string[]`), so inline links need a small content-model change (e.g. a lightweight `[text](path)` syntax rendered by `ArticleBody`) and then editorial work. Medium risk, high value; roadmap item. |
| Named `Person` authors / author pages | No named people are published ("Full leadership profiles are coming"). Inventing them is prohibited. Highest-value E-E-A-T item once real names, roles and photos exist. |
| Real testimonials, client logos, case-study results | Everything is labelled illustrative. Cannot be manufactured; needs client permission. |
| `llms.txt` | Unproven, not used by Google/Bing; LoansPartner doesn't have one either. Harmless to add later. |
| Noindex the `/careers` placeholder | Thin but honest, linked from every footer, not in the sitemap. Leave until real roles exist. |
| Same FAQ set on `/` and `/pricing` | Duplicate FAQPage across two pages is not harmful; a pricing-specific set would be better but is content work. |
| `<html lang="en-IN">` | Google ignores the attribute; no benefit. |
| Removing `meta keywords` | Harmless; kept to avoid churn. |
| CrUX/INP measurement, Search Console data | Not available in this environment. **Requires external measurement.** |

---

## 6. Content opportunities (prioritised)

Each item passes the "would a real dealer benefit" test and maps to existing services.

**High priority**
1. **Service-page FAQs (13 pages).** 4–6 hand-written questions per service: what it costs, what "verified" means for that service, what the dealer must provide, how results are reported, how fast it starts. Answers should open with a direct verdict. Reuse the existing `faqPageSchema`. AEO win on the most commercial pages.
2. **Dated benchmark page**: "Dealer marketing benchmarks in India, {month} 2026": CPL by channel and vehicle segment, lead-to-walk-in ratios, WhatsApp response-time impact. Table + "about these numbers" section + monthly update note. Only with real anonymised campaign data (the site claims ₹6 Cr+ managed spend; that is the source). Strong citation target for AI answers.
3. **Glossary** (30–40 terms: VDP, CPL, cost per walk-in, verified lead, DLT, RCS, OEM co-op, DMS, lead attribution, test-drive conversion) with `DefinedTerm` schema and "where it applies" links to services. Cheap, quotable, long-tail.
4. **Homepage comparison table**: in-house hire vs freelancer vs generalist agency vs AutoSutra (Yes/No matrix). Tables are the format most reliably lifted into AI answers.

**Medium priority**
5. Inline links inside article bodies (needs the small content-model change in §5), then a pass adding 2–4 contextual links per article to services and sibling guides.
6. Sources/citations block on articles that cite regulations or platforms (e.g. the DLT article's TRAI/operator portals), rendered visibly and as `citation` in Article schema.
7. "How we work" page: onboarding steps, reporting cadence, what AutoSutra does not do, escalation contact and SLAs. Translates LoansPartner's grievance page into a B2B trust page.
8. Pricing-specific FAQs (replace the shared homepage set on `/pricing`).

**Future**
9. Named author/reviewer profiles with `Person` schema once leadership is published.
10. Verified case studies with client consent, replacing the illustrative set.
11. Platform pages (`/platforms/google-vehicle-ads`, `/platforms/meta-ads`, WhatsApp Business API) only for platforms actually run.
12. Revisit the combination-page layer with Search Console evidence (§5).

---

## 7. Validation after implementation

Run against a production build (`pnpm build` → `next start`, port 4210):

| Check | Result |
|---|---|
| `pnpm lint` | clean |
| `tsc --noEmit` | clean |
| `pnpm build` | success, 1,373 static pages, no warnings |
| Server logs | no errors |
| Browser console | only `/_vercel/speed-insights/script.js` 404 (Vercel-only asset, expected locally) |
| `/robots.txt` | `Allow: /`, `Disallow: /api/`, `Disallow: /leads`, sitemap line |
| `/sitemap.xml` | 1,210 URLs, legal pages present |
| Unknown path | 404, title "Page not found \| AutoSutra", `noindex`, no canonical |
| `/login` | `noindex, nofollow` intact, title fixed |
| Homepage | canonical + hreflang intact, `googlebot` directives present, JSON-LD: Organization (with `@id`, logo), WebSite, FAQPage |
| `/pricing`, `/about`, `/city/kolkata`, `/india/west-bengal/howrah`, `/services/google-ads/mumbai`, `/industries/*`, `/solutions/*`, `/resources/category/guide`, `/book-a-demo`, resellers | default `og:image` + `twitter:image` present |
| `/services/verified-buyer-leads`, `/resources/…`, `/case-studies/…` | their own file-based `og:image` preserved (hashed URLs) |
| All JSON-LD blocks on 12 sampled templates | parse as valid JSON; every `image`/`logo` URL returns 200 |
| Breadcrumbs | visible on service detail and case-study detail, matching the schema; screenshots checked on mobile width |
| Header logo | now requests the 384 px variant instead of 3840 px |
| H1 count | 1 on every sampled template |

Titles, descriptions, canonicals, sitemap `lastmod` logic, analytics, forms, and the WhatsApp/lead tracking were not modified.

---

## 8. 30 / 60 / 90 day roadmap

**0–30 days: technical and on-page**
- Deploy this change set; resubmit the sitemap in Search Console.
- Validate three templates in Google's Rich Results Test (a service page, an article, a district page).
- Pull field Core Web Vitals from Search Console. If mobile LCP is poor, apply the hero-animation fix (§5).
- Write the 13 service-page FAQ sets (High #1) and the pricing FAQ set.
- Add the content-model support for inline article links and a sources block.

**31–60 days: AEO / GEO content**
- Publish the glossary (High #3) and the homepage comparison table (High #4).
- Publish the first dated benchmark page (High #2) with a monthly update cadence.
- Contextual-link pass across the 66 articles; sources added to regulatory articles.
- "How we work" trust page.

**61–90 days: authority and proof**
- Publish named leadership/author profiles with `Person` schema; add reviewer lines to articles.
- Replace illustrative case studies and testimonials with at least two client-approved real ones.
- Review the combination-page layer against 90 days of Search Console data and consolidate if warranted.
- Digital PR: original benchmark data is the asset to pitch to automotive trade media.

---

## Appendix A: LoansPartner.in audit notes

See the separate benchmark notes captured during this audit (site-wide facts, 262-URL sitemap map, per-page head/schema/AEO tables, weaknesses, transferable practices). Key facts: Next.js on Vercel, all content server-rendered, `Organization`+`FinancialService` with `@id` on every page, FAQ blocks on nearly every template, 40-term glossary with `DefinedTerm`, dated interest-rate page, visible published/updated/reviewed lines on guides, but anonymous authorship, no outbound citations, 112 near-duplicate product×city pages, per-city `FinancialService` nodes carrying the HQ address, and schema image URLs that 404.

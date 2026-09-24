import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Database, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import {
  benchmarkDatasetSchema,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  BENCHMARK_UPDATE_CADENCE,
  benchmarkBaseFaqs,
  benchmarkReports,
  latestBenchmarkReport,
  type BenchmarkReport,
  type BenchmarkTable,
} from "@/data/benchmarks";
import { siteConfig } from "@/data/site-config";

const path = "/benchmarks";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateMetadata(): Metadata {
  if (!latestBenchmarkReport) {
    return { robots: { index: false, follow: false } };
  }
  return pageMetadata({
    title: `Dealer Marketing Benchmarks in India, ${latestBenchmarkReport.periodLabel}`,
    description: `Cost per verified lead, lead-to-walk-in, and response-time benchmarks for car, bike, EV, and used-car dealerships in India for ${latestBenchmarkReport.periodLabel}, from campaigns AutoSutra manages. Updated ${BENCHMARK_UPDATE_CADENCE}.`,
    path,
    keywords: [
      "car dealership marketing benchmarks India",
      "cost per lead car dealership India",
      "automotive lead to walk-in rate India",
      `dealer marketing benchmarks ${latestBenchmarkReport.periodLabel}`,
    ],
  });
}

function BenchmarkTableView({
  table,
  headingLevel = "h2",
}: {
  table: BenchmarkTable;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div id={table.id} className="scroll-mt-28">
      <Heading
        className={cn(
          "font-heading font-semibold text-ink",
          headingLevel === "h2" ? "text-2xl" : "text-xl",
        )}
      >
        {table.title}
      </Heading>
      <p className="mt-3 text-foreground/80">{table.answer}</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">{table.title}</caption>
          <thead>
            <tr className="border-b border-border bg-muted/40">
              {table.columns.map((column, index) => (
                <th
                  key={column}
                  scope="col"
                  className={cn(
                    "p-4 text-sm font-semibold text-ink",
                    index === 0
                      ? "sticky left-0 z-10 bg-muted/40 backdrop-blur"
                      : "text-center",
                  )}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} className="border-b border-border last:border-0">
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th
                      key={index}
                      scope="row"
                      className="sticky left-0 z-10 bg-card p-4 text-left text-sm font-medium text-foreground/90"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td
                      key={index}
                      className="bg-card p-4 text-center text-sm text-foreground/80 tabular-nums"
                    >
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && (
        <p className="mt-3 text-xs text-muted-foreground">{table.note}</p>
      )}
    </div>
  );
}

function PreviousPeriod({ report }: { report: BenchmarkReport }) {
  return (
    <div id={`period-${report.period}`} className="scroll-mt-28">
      <h3 className="font-heading text-xl font-semibold text-ink">
        {report.periodLabel}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Published {formatDate(report.publishedDate)}. {report.sample}
      </p>
      <div className="mt-6 space-y-10">
        {report.tables.map((table) => (
          <BenchmarkTableView
            key={`${report.period}-${table.id}`}
            table={{ ...table, id: `${report.period}-${table.id}` }}
            headingLevel="h3"
          />
        ))}
      </div>
    </div>
  );
}

export default function BenchmarksPage() {
  const report = latestBenchmarkReport;
  if (!report) notFound();

  const previous = benchmarkReports.slice(1, 4);
  const faqs = [...report.faqs, ...benchmarkBaseFaqs];
  const title = `Dealer marketing benchmarks in India, ${report.periodLabel}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Benchmarks", path },
  ];

  return (
    <>
      <JsonLd data={benchmarkDatasetSchema(report)} />
      <JsonLd
        data={webPageSchema({
          name: title,
          description: report.sample,
          path,
          datePublished: benchmarkReports[benchmarkReports.length - 1].publishedDate,
          dateModified: report.publishedDate,
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Benchmarks &middot; Updated {BENCHMARK_UPDATE_CADENCE}
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            What car, bike, EV, and used-car dealerships in India are actually
            paying per verified lead, and how those leads convert, from the
            campaigns AutoSutra manages. Published as ranges by segment and
            city tier, so you can compare your own numbers with dealerships
            like yours.
          </p>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4" />
              Data period: {report.periodLabel}
            </span>
            <span>Published {formatDate(report.publishedDate)}</span>
            <span className="flex items-center gap-2">
              <Database className="size-4" />
              {siteConfig.editorialTeam.name}
            </span>
          </div>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} />

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="rounded-2xl border border-brand/30 bg-brand/5 p-5 text-sm text-foreground/80">
          <span className="font-semibold text-ink">About the data: </span>
          {report.sample}
        </p>
        <h2 className="mt-12 font-heading text-2xl font-semibold text-ink">
          Key takeaways for {report.periodLabel}
        </h2>
        <ul className="mt-5 space-y-3">
          {report.takeaways.map((takeaway, index) => (
            <li key={takeaway} className="flex items-start gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span className="pt-0.5 text-foreground/80">{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl space-y-16 px-6 lg:px-8">
          {report.tables.map((table) => (
            <BenchmarkTableView key={table.id} table={table} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          About these numbers
        </h2>
        <div className="mt-4 space-y-4">
          {report.methodology.map((paragraph) => (
            <p key={paragraph} className="text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Benchmarks are a sanity check, not a target. The most useful
          comparison is always your own 90-day trailing average per campaign;
          our{" "}
          <Link
            href="/resources/google-ads-benchmarks-for-indian-dealerships"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            guide to benchmarking against yourself
          </Link>{" "}
          explains how.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Frequently asked questions
        </h2>
        <div className="mt-6 rounded-2xl border border-border bg-card px-6">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-left text-base font-heading font-medium text-ink">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {previous.length > 0 && (
        <section className="bg-muted/40 py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Previous periods
            </h2>
            <div className="mt-8 space-y-16">
              {previous.map((item) => (
                <PreviousPeriod key={item.period} report={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Want these numbers for your own dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Book a free consultation and we&apos;ll compare your campaigns
              against dealerships in your segment and city tier.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-a-demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
                )}
              >
                Book Consultation
                <ArrowRight className="size-4" />
              </Link>
              <WhatsAppLink
                location="benchmarks_page"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

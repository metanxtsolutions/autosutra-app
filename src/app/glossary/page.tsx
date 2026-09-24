import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import {
  breadcrumbSchema,
  definedTermSetSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  glossaryCategories,
  glossaryLetter,
  glossaryTerms,
  sortedGlossaryTerms,
  type GlossaryTerm,
} from "@/data/glossary";

const title = "Dealer Marketing Glossary";
const description = `Plain-English definitions of ${glossaryTerms.length} terms dealerships meet in lead generation, advertising, local SEO, messaging compliance, and CRM, each linked to where it applies.`;

export const metadata = pageMetadata({
  title,
  description,
  path: "/glossary",
  keywords: [
    "automotive marketing glossary",
    "car dealership marketing terms",
    "dealer marketing definitions India",
  ],
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

export default function GlossaryPage() {
  const terms = sortedGlossaryTerms();
  const byLetter = terms.reduce<Record<string, GlossaryTerm[]>>((acc, term) => {
    const letter = glossaryLetter(term);
    (acc[letter] ??= []).push(term);
    return acc;
  }, {});
  const letters = Object.keys(byLetter).sort();

  return (
    <>
      <JsonLd data={definedTermSetSchema(terms)} />
      <JsonLd data={webPageSchema({ name: title, description, path: "/glossary" })} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Glossary
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            Dealer marketing, defined
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            {glossaryTerms.length} terms a dealership meets in lead
            generation, advertising, local search, messaging compliance, and
            dealer systems, explained in plain English and linked to where
            each one applies.
          </p>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} />

      <section className="mx-auto max-w-5xl px-6 pt-10 lg:px-8">
        <nav aria-label="Jump to letter" className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
            >
              {letter}
            </a>
          ))}
        </nav>
        <p className="mt-6 text-sm text-muted-foreground">
          Covers {glossaryCategories.join(", ").toLowerCase()}.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="space-y-14">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-28">
              <h2 className="font-heading text-2xl font-semibold text-brand">
                {letter}
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {byLetter[letter].map((term) => (
                  <li key={term.slug}>
                    <Link
                      href={`/glossary/${term.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
                    >
                      <span className="text-xs font-medium uppercase tracking-wide text-brand">
                        {term.category}
                      </span>
                      <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                        {term.term}
                        {term.alsoKnownAs && (
                          <span className="ml-2 text-sm font-normal text-muted-foreground">
                            ({term.alsoKnownAs[0]})
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-foreground/75">
                        {term.definition}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                        Read the full definition
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Want the numbers behind the definitions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Our Resources guides go deeper on every one of these topics,
              with playbooks written for Indian dealerships.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand/90"
              >
                Browse the guides
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/book-a-demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

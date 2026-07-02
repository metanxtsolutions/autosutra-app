"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { faqs } from "@/data/faq";

export function Faq() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          FAQ
        </span>
        <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Questions dealers ask us
        </h2>
      </div>

      <div className="relative mt-10">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a question..."
          className="h-12 rounded-full pl-11"
        />
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card px-6">
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No questions match &ldquo;{query}&rdquo;. Try a different search,
            or{" "}
            <a href="/contact" className="text-brand underline">
              ask us directly
            </a>
            .
          </p>
        ) : (
          <Accordion>
            {filtered.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base font-heading font-medium text-ink">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}

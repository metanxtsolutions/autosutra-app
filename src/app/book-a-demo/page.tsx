import { Suspense } from "react";
import { Check, Star } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";

export const metadata = pageMetadata({
  title: "Book a Demo",
  description:
    "Book a free, no-obligation demo. See how AutoSutra's verified leads, campaigns, and reporting would work for your dealership before you commit to anything.",
  path: "/book-a-demo",
  keywords: [
    "book a demo car dealership marketing",
    "dealer growth agency demo India",
    "AutoSutra demo",
  ],
});

const whatToExpect = [
  "A focused walkthrough of verified leads, campaigns, and reporting for your dealership",
  "A custom growth plan built around your city, brands, and current lead volume",
  "No pressure and no obligation to sign anything",
  "A response from our team within 24 hours",
];

const process = [
  {
    step: "Book your slot",
    description: "Tell us a bit about your dealership. No back-and-forth scheduling.",
  },
  {
    step: "30-minute walkthrough",
    description: "See the platform live, mapped to your city, brands, and goals.",
  },
  {
    step: "Get your growth plan",
    description: "Leave with a clear plan and pricing. No pressure to commit on the call.",
  },
];

const demoFaqs = [
  {
    question: "Is the demo free?",
    answer: "Yes. There's no cost and no obligation to sign up for anything afterward.",
  },
  {
    question: "How long does the demo take?",
    answer: "Around 30 minutes, focused on your dealership rather than a generic product tour.",
  },
  {
    question: "What should I prepare?",
    answer: "Nothing formal. Just be ready to talk about your dealership, city, brands, and roughly how many leads you get today.",
  },
  {
    question: "What if I'm not ready to commit?",
    answer: "That's fine. The demo is meant to help you decide, not lock you into anything.",
  },
];

const testimonial = testimonials[0];

export default function BookADemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book a Demo", path: "/book-a-demo" },
        ])}
      />
      <JsonLd data={faqPageSchema(demoFaqs)} />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Book a Demo
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            See AutoSutra in action
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Book a free walkthrough and we&apos;ll show you exactly how
            verified leads, campaigns, and reporting would work for your
            dealership. No commitment required.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-12 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-ink">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4">
                {whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-brand" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {testimonial && (
              <div className="mt-6 rounded-3xl bg-ink p-8 text-ink-foreground">
                <div className="flex gap-1 text-brand-accent">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-white/50">{testimonial.role}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="h-[600px] animate-pulse rounded-3xl border border-border bg-muted/40" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {process.map((item, index) => (
            <div
              key={item.step}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-heading text-3xl font-semibold text-brand/30">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                {item.step}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-8">
            {demoFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading font-semibold text-ink">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Check } from "lucide-react";
import type { LegalSection } from "@/data/legal-content";
import { siteConfig } from "@/data/site-config";

export function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Legal
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 text-sm text-white/50">
          Last updated: {lastUpdated}
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="text-lg text-foreground/80">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-2xl font-semibold text-ink">
                {section.heading}
              </h2>
              {section.body.length > 0 && (
                <div className="mt-3 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-foreground/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Check className="mt-1 size-4 shrink-0 text-brand" />
                      <span className="text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Contact us
            </h2>
            <p className="mt-3 text-foreground/80">
              Questions about this document can be directed to{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-brand underline"
              >
                {siteConfig.contact.email}
              </a>
              , {siteConfig.contact.phoneDisplay}, or our office at{" "}
              {siteConfig.contact.addressLine}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

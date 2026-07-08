import { Suspense } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/data/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Book a free consultation with AutoSutra, India's dealer growth agency. Reach us by phone, email, or WhatsApp from our Kolkata office, or send your dealership details.",
  path: "/contact",
  keywords: [
    "contact car dealership marketing agency India",
    "book dealer growth consultation",
    "AutoSutra Kolkata office",
  ],
});

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    href: siteConfig.contact.whatsappHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Contact
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s grow your dealership
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Tell us about your dealership and we&apos;ll map out a growth plan
          within 48 hours.
        </p>
      </section>

      <section className="mx-auto -mt-12 max-w-6xl px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={
                card.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-brand">
                <card.icon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {card.label}
                </p>
                <p className="mt-1 font-heading font-semibold text-ink">
                  {card.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="h-[600px] animate-pulse rounded-3xl border border-border bg-muted/40" />}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-muted/40 p-8">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-brand" />
                <h3 className="font-heading text-lg font-semibold text-ink">
                  Office
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {siteConfig.contact.addressLine}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70">
                {siteConfig.contact.addressNote}
              </p>
              <div className="mt-5 h-48 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="AutoSutra office location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${siteConfig.contact.addressLine}, ${siteConfig.contact.addressNote}`,
                  )}&output=embed`}
                  className="size-full grayscale-[40%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-ink p-8 text-ink-foreground">
              <h3 className="font-heading text-lg font-semibold">
                Prefer to talk now?
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Our team typically responds on WhatsApp within minutes during
                business hours.
              </p>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand/90"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

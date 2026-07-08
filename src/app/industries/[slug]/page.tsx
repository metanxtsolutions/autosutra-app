import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { industryIconMap, serviceIconMap } from "@/lib/icon-map";
import { breadcrumbSchema, combinationServiceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.name,
    description: `${industry.description} Serving ${industry.name} across India.`,
    path: `/industries/${industry.slug}`,
    keywords: [
      `${industry.name} marketing agency India`,
      `${industry.name} digital marketing`,
    ],
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  const Icon = industryIconMap[industry.icon];

  return (
    <>
      <JsonLd
        data={combinationServiceSchema({
          name: `Dealer Growth Marketing for ${industry.name}`,
          description: industry.description,
          path: `/industries/${industry.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-28 text-center text-ink-foreground lg:px-8 lg:pb-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
            <Icon className="size-6 text-brand-accent" />
          </div>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Industry
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {industry.name}
          </h1>
          <p className="mt-6 text-balance text-lg text-white/60">
            {industry.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
              )}
            >
              Book Consultation
              <ArrowRight className="size-4" />
            </Link>
            <WhatsAppLink
              location="industry_detail_hero"
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
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
          How we help {industry.name}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {industry.points.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <Check className="size-4 text-brand" />
              <p className="mt-3 text-sm text-foreground/80">{point}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Services for {industry.name}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = serviceIconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/industries/${industry.slug}/${service.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
                    <ServiceIcon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-ink">
                      {service.name}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                      Learn more
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready to grow your {industry.name} business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Tell us about your dealership and we&apos;ll map a plan built
              for {industry.name}.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "gap-2 rounded-full bg-brand px-8 hover:bg-brand/90",
                )}
              >
                Book Consultation
                <ArrowRight className="size-4" />
              </Link>
              <WhatsAppLink
                location="industry_detail_footer"
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

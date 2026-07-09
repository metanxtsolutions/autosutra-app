import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Tag as TagIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArticleBody } from "@/components/resources/article-body";
import { ArticleFaqs } from "@/components/resources/article-faqs";
import { ArticleNav } from "@/components/resources/article-nav";
import { ReadingProgressBar } from "@/components/resources/reading-progress-bar";
import { RelatedArticles } from "@/components/resources/related-articles";
import { ResourceCoverImage } from "@/components/resources/resource-cover-image";
import { ShareButtons } from "@/components/resources/share-buttons";
import { TableOfContents } from "@/components/resources/table-of-contents";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { resources } from "@/data/resources";
import { resourceArticles } from "@/data/resource-articles";
import { services } from "@/data/services";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) return {};
  return pageMetadata({
    title: resource.title,
    description: resource.excerpt,
    path: `/resources/${resource.slug}`,
    keywords: [resource.primaryKeyword, ...resource.secondaryKeywords],
  });
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = resources.findIndex((item) => item.slug === slug);
  const resource = resources[index];
  const article = resourceArticles[slug];
  if (!resource || !article) notFound();

  const relatedServices = services.filter((service) =>
    article.relatedServiceSlugs.includes(service.slug),
  );

  const relatedByTag = resources
    .filter(
      (item) =>
        item.slug !== resource.slug &&
        item.tags.some((tag) => resource.tags.includes(tag)),
    )
    .slice(0, 3);

  const prev = index > 0 ? resources[index - 1] : null;
  const next = index < resources.length - 1 ? resources[index + 1] : null;

  const contentId = "article-content";
  const headings = article.sections.map((section) => section.heading);
  const articleUrl = `${siteConfig.url}/resources/${resource.slug}`;

  return (
    <>
      <ReadingProgressBar targetId={contentId} />
      <JsonLd data={articleSchema(resource)} />
      <JsonLd data={faqPageSchema(article.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: resource.title, path: `/resources/${resource.slug}` },
        ])}
      />

      <section className="relative overflow-hidden bg-ink px-6 pt-40 pb-24 text-center text-ink-foreground lg:px-8">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {resource.category}
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            {resource.title}
          </h1>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Clock className="size-4" />
              {resource.readTime}
            </span>
            <span>
              Updated{" "}
              {new Date(resource.updatedDate).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: resource.title, path: `/resources/${resource.slug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4 lg:px-8">
        <ResourceCoverImage
          resource={resource}
          priority
          sizes="(min-width: 1024px) 900px, 100vw"
          className="aspect-[16/9] w-full rounded-3xl object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
          <div id={contentId}>
            <ArticleBody article={article} />

            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center gap-2">
              {resource.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/resources/tag/${tag}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <TagIcon className="size-3" />
                  {tag.replace(/-/g, " ")}
                </Link>
              ))}
            </div>

            <div className="mx-auto mt-8 flex max-w-3xl items-center justify-between border-y border-border py-5">
              <span className="text-sm font-medium text-foreground/70">
                Share this guide
              </span>
              <ShareButtons title={resource.title} url={articleUrl} />
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <ArticleFaqs faqs={article.faqs} />
            </div>

            <div className="mx-auto max-w-3xl">
              <ArticleNav prev={prev} next={next} />
            </div>
          </div>

          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </section>

      {relatedByTag.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <RelatedArticles resources={relatedByTag} />
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-center font-heading text-2xl font-semibold text-ink">
              Related services
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-brand/40"
                >
                  <div>
                    <p className="font-heading font-semibold text-ink">
                      {service.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
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
              Want help putting this into practice?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Book a free consultation and we&apos;ll map this to your
              dealership&apos;s specific market and goals.
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
                location="resource_article"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

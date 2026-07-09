import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Resource } from "@/data/resources";

export function ArticleNav({
  prev,
  next,
}: {
  prev: Resource | null;
  next: Resource | null;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="More resources"
      className="mt-16 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/resources/${prev.slug}`}
          className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="mt-2 font-heading font-semibold text-ink">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/resources/${next.slug}`}
          className="group flex flex-col rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:border-brand/40 sm:items-end"
        >
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Next
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-2 font-heading font-semibold text-ink">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

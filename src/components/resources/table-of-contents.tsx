"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { slugifyHeading } from "@/lib/slugify";

export function TableOfContents({ headings }: { headings: string[] }) {
  const ids = headings.map(slugifyHeading);
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        On this page
      </p>
      <ul className="mt-4 space-y-2.5 border-l border-border pl-4 text-sm">
        {headings.map((heading, index) => {
          const id = ids[index];
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "block text-foreground/60 transition-colors hover:text-brand",
                  activeId === id && "font-medium text-brand",
                )}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

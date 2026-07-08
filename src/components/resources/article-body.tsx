import { Check } from "lucide-react";
import type { ResourceArticle } from "@/data/resource-articles";

export function ArticleBody({ article }: { article: ResourceArticle }) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-lg text-foreground/80">{article.intro}</p>

      <div className="mt-10 space-y-10">
        {article.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-2xl font-semibold text-ink">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
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
      </div>
    </div>
  );
}

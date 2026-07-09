import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ResourceFaq } from "@/data/resource-articles";

export function ArticleFaqs({ faqs }: { faqs: ResourceFaq[] }) {
  if (faqs.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold text-ink">
        Frequently asked questions
      </h2>
      <div className="mt-6 rounded-2xl border border-border bg-card px-6">
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="py-5 text-left text-base font-heading font-medium text-ink">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

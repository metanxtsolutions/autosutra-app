"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            What dealer partners say
          </h2>
        </div>

        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-0 flex-[0_0_100%] px-2"
                >
                  <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
                    <Quote className="mx-auto size-8 text-brand/30" />
                    <p className="mt-6 text-balance text-xl font-medium text-ink sm:text-2xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex justify-center gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-brand-accent text-brand-accent"
                          />
                        ),
                      )}
                    </div>
                    <p className="mt-4 font-heading font-semibold text-ink">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:bg-muted"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    selected === index
                      ? "w-6 bg-brand"
                      : "w-1.5 bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:bg-muted"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

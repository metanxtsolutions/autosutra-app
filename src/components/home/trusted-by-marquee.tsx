import { trustedBrands } from "@/data/trusted-by";

export function TrustedByMarquee() {
  const doubled = [...trustedBrands, ...trustedBrands];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by dealerships representing leading automotive brands
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16">
          {doubled.map((brand, index) => (
            <span
              key={`${brand.name}-${index}`}
              className="font-heading text-2xl font-semibold tracking-tight text-foreground/30 transition-colors hover:text-foreground/70"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

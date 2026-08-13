import type { PricingTable } from "@/data/services";

export function ServicePricingTable({ table }: { table: PricingTable }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <h2 className="text-center font-heading text-3xl font-semibold text-ink sm:text-4xl">
        Pricing
      </h2>

      <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Service
              </th>
              <th className="px-6 py-4 text-right font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Pricing
              </th>
            </tr>
          </thead>
          <tbody>
            {table.perMessage.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-b-0">
                <td className="px-6 py-4 text-foreground/80">{row.label}</td>
                <td className="px-6 py-4 text-right font-medium text-ink tabular-nums">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.bundles && table.bundles.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Service
                </th>
                <th className="px-4 py-4 text-right font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  1 Month
                </th>
                <th className="px-4 py-4 text-right font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  3 Month
                </th>
                <th className="px-4 py-4 text-right font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  6 Month
                </th>
                <th className="px-6 py-4 text-right font-heading text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  12 Month
                </th>
              </tr>
            </thead>
            <tbody>
              {table.bundles.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4 text-foreground/80">{row.label}</td>
                  <td className="px-4 py-4 text-right font-medium text-ink tabular-nums">
                    {row.oneMonth}
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-ink tabular-nums">
                    {row.threeMonth}
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-ink tabular-nums">
                    {row.sixMonth}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-ink tabular-nums">
                    {row.twelveMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {table.disclaimer && (
        <p className="mt-6 text-center text-xs text-muted-foreground">
          {table.disclaimer}
        </p>
      )}
    </section>
  );
}

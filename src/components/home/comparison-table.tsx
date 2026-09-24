import { Check, Minus } from "lucide-react";

// Each row compares how the four common ways a dealership gets marketing
// done are typically structured. Cells are true (yes), false (no), or a
// short note where the honest answer depends on who you hire. The AutoSutra
// column only claims what the site states elsewhere: automotive-only focus,
// phone-verified leads, the service stack, reporting tied to leads and
// footfall, 7-10 business day go-live, monthly plans, a dedicated account
// manager from the Growth plan, and published pricing.
type Cell = boolean | string;

type ComparisonRow = {
  label: string;
  inHouse: Cell;
  freelancer: Cell;
  agency: Cell;
  autosutra: Cell;
};

const columns = [
  { key: "inHouse", label: "In-house hire" },
  { key: "freelancer", label: "Freelancer" },
  { key: "agency", label: "Generalist agency" },
  { key: "autosutra", label: "AutoSutra" },
] as const;

const rows: ComparisonRow[] = [
  {
    label: "Works only with automotive dealerships",
    inHouse: "Depends on who you hire",
    freelancer: "Depends on who you hire",
    agency: false,
    autosutra: true,
  },
  {
    label: "Phone-verified leads matched to your make, model, and city",
    inHouse: "Needs a separate calling team",
    freelancer: false,
    agency: "Rarely",
    autosutra: true,
  },
  {
    label: "Google Ads, Meta Ads, local SEO, and content under one roof",
    inHouse: "Usually one or two specialists",
    freelancer: "Usually one channel",
    agency: true,
    autosutra: true,
  },
  {
    label: "WhatsApp lead automation and a dealer CRM in the same stack",
    inHouse: "Separate tools to buy and run",
    freelancer: false,
    agency: "Rarely",
    autosutra: true,
  },
  {
    label: "Reporting tied to leads and showroom footfall, not impressions",
    inHouse: "Varies",
    freelancer: "Varies",
    agency: "Usually clicks and impressions",
    autosutra: true,
  },
  {
    label: "Covers new cities and outlets without new headcount",
    inHouse: false,
    freelancer: false,
    agency: true,
    autosutra: true,
  },
  {
    label: "Live within 7 to 10 business days",
    inHouse: "Hiring takes longer",
    freelancer: "Varies",
    agency: "Varies",
    autosutra: true,
  },
  {
    label: "Monthly plans with no long-term lock-in",
    inHouse: false,
    freelancer: true,
    agency: "Retainers vary",
    autosutra: true,
  },
  {
    label: "Dedicated account manager",
    inHouse: "Not applicable",
    freelancer: "The freelancer",
    agency: "Varies",
    autosutra: "Yes, from the Growth plan",
  },
  {
    label: "Pricing published upfront",
    inHouse: "Salary plus tools",
    freelancer: "Varies",
    agency: "Custom quotes",
    autosutra: true,
  },
];

function CellValue({ value, highlight }: { value: Cell; highlight?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className={highlight ? "size-4 text-brand" : "size-4 text-ink"} />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="size-4 text-muted-foreground/40" />
        <span className="sr-only">No</span>
      </span>
    );
  }
  return (
    <span
      className={
        highlight
          ? "text-sm font-medium text-ink"
          : "text-sm text-foreground/70"
      }
    >
      {value}
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Compare your options
        </span>
        <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Hire, freelance, generalist agency, or AutoSutra?
        </h2>
        <p className="mt-4 text-muted-foreground">
          How the four common ways a dealership gets its marketing done
          usually compare, so you can see where a dealer-only partner fits.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto rounded-2xl border border-border shadow-sm">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <caption className="sr-only">
            Comparison of an in-house marketing hire, a freelancer, a
            generalist marketing agency, and AutoSutra for car, bike, EV, and
            used-car dealerships.
          </caption>
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th
                scope="col"
                className="sticky left-0 z-10 bg-muted/40 p-5 text-sm font-semibold text-ink backdrop-blur"
              >
                What you get
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={
                    column.key === "autosutra"
                      ? "bg-accent p-5 text-center text-sm font-semibold text-brand"
                      : "p-5 text-center text-sm font-semibold text-ink"
                  }
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-card p-5 text-left text-sm font-medium text-foreground/90"
                >
                  {row.label}
                </th>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={
                      column.key === "autosutra"
                        ? "bg-accent/60 p-5 text-center"
                        : "bg-card p-5 text-center"
                    }
                  >
                    <CellValue
                      value={row[column.key]}
                      highlight={column.key === "autosutra"}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-center text-xs text-muted-foreground">
        Based on how each option is typically structured. Individual hires,
        freelancers, and agencies vary; ask any provider to show you the
        same rows for their own service.
      </p>
    </section>
  );
}

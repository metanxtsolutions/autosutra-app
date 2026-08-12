import { NewLeadForm } from "@/components/leads/new-lead-form";

export default function NewLeadPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-ink">Add outside lead</h1>
        <p className="text-sm text-muted-foreground">
          For referrals, LinkedIn, cold calls, events, or anything sourced outside the website.
        </p>
      </div>
      <NewLeadForm />
    </div>
  );
}

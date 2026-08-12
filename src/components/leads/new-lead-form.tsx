"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createOutsideLead, type LeadActionState } from "@/actions/leads";

const initialState: LeadActionState = { success: false, message: "" };

export function NewLeadForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    createOutsideLead,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.push("/leads");
    }
  }, [state.success, router]);

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-border bg-card p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dealership">Dealership</Label>
          <Input id="dealership" name="dealership" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service interest</Label>
          <Input id="service" name="service" placeholder="e.g. Digital Marketing" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sourceDetail">Source</Label>
          <Input
            id="sourceDetail"
            name="sourceDetail"
            required
            placeholder="e.g. Referral, LinkedIn, Auto Expo"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Notes</Label>
        <Textarea id="message" name="message" rows={3} />
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full")}
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Saving...
          </>
        ) : (
          "Add lead"
        )}
      </button>
    </form>
  );
}

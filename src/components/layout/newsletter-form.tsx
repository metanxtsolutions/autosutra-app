"use client";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form
      className="mt-4 flex gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        toast.success("Thanks for subscribing — you're on the list.");
        event.currentTarget.reset();
      }}
    >
      <Input
        type="email"
        required
        placeholder="you@dealership.com"
        className="border-white/15 bg-white/5 text-ink-foreground placeholder:text-ink-foreground/40"
      />
      <button
        type="submit"
        className={cn(buttonVariants({ variant: "default" }), "shrink-0")}
      >
        Subscribe
      </button>
    </form>
  );
}

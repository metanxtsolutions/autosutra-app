"use client";

import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function StickyDemoCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("demo-form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px" },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document
      .getElementById("demo-form")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <button
      type="button"
      onClick={scrollToForm}
      aria-label="Scroll to booking form"
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "fixed right-6 bottom-6 z-30 hidden gap-2 rounded-full px-5 shadow-lg transition-all duration-300 lg:flex",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <CalendarCheck className="size-4" /> Book Free Demo
    </button>
  );
}

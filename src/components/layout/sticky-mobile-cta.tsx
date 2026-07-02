"use client";

import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-lg lg:hidden">
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "flex-1 gap-2 rounded-full",
        )}
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "flex-1 gap-2 rounded-full",
        )}
      >
        <PhoneCall className="size-4" /> Book a Demo
      </Link>
    </div>
  );
}

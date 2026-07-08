"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/data/site-config";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location })}
      className={className}
    >
      {children}
    </a>
  );
}

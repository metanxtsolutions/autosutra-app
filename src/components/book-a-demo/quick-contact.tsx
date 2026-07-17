import { MessageCircle, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { siteConfig } from "@/data/site-config";

export function QuickContact() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <a
        href={`tel:${siteConfig.contact.phoneHref}`}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "gap-2 rounded-full",
        )}
      >
        <PhoneCall className="size-4" /> Call Now
      </a>
      <WhatsAppLink
        location="book_a_demo_quick_contact"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "gap-2 rounded-full",
        )}
      >
        <MessageCircle className="size-4" /> WhatsApp Us
      </WhatsAppLink>
    </div>
  );
}

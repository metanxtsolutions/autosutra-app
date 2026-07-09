"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/data/site-config";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="AutoSutra">
          <Image
            src="/brand/autosutra-lockup.png"
            alt="AutoSutra"
            width={2487}
            height={605}
            priority
            className="h-8 w-[131px] sm:h-9 sm:w-[148px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/85 hover:text-white",
                pathname === item.href &&
                  (scrolled ? "text-foreground" : "text-white"),
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              scrolled
                ? "text-foreground/80 hover:bg-muted hover:text-foreground"
                : "text-white/85 hover:bg-white/10 hover:text-white",
            )}
          >
            {siteConfig.contact.phoneDisplay}
          </Link>
          <Link
            href="/book-a-demo"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-5")}
          >
            Book a Demo
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "lg:hidden",
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10",
            )}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/brand/autosutra-lockup.png"
                  alt="AutoSutra"
                  width={2487}
                  height={605}
                  className="h-7 w-[115px]"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <Link
                href="/book-a-demo"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full rounded-full")}
              >
                Book a Demo
              </Link>
              <WhatsAppLink
                location="mobile_nav"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full rounded-full")}
              >
                WhatsApp Us
              </WhatsAppLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

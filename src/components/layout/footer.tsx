import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/social-icons";
import { footerNav, siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { targetCities } from "@/data/locations";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const socialLinks = [
  { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.socials.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: siteConfig.socials.facebook, icon: FacebookIcon, label: "Facebook" },
  { href: siteConfig.socials.youtube, icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" aria-label="AutoSutra">
              <Image
                src="/brand/autosutra-lockup.png"
                alt="AutoSutra"
                width={2487}
                height={605}
                className="h-8 w-[131px]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">
              {siteConfig.tagline}
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-ink-foreground/60">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{siteConfig.contact.addressLine}</span>
            </div>
            <p className="mt-3 max-w-xs text-xs text-ink-foreground/40">
              Serving dealers across {targetCities.slice(0, -1).join(", ")},
              and {targetCities[targetCities.length - 1]}.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-ink-foreground/70 transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-foreground/60 transition-colors hover:text-ink-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ink-foreground/60 transition-colors hover:text-ink-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-foreground/60 transition-colors hover:text-ink-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-ink-foreground/60 transition-colors hover:text-ink-foreground"
              >
                <Mail className="size-4" /> {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="flex items-center gap-2 text-sm text-ink-foreground/60 transition-colors hover:text-ink-foreground"
              >
                <Phone className="size-4" /> {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h3 className="text-sm font-semibold text-ink-foreground">
              Stay ahead of the market
            </h3>
            <p className="mt-4 text-sm text-ink-foreground/60">
              Dealer growth insights, delivered monthly. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-foreground/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Made for India&apos;s dealer network.</p>
        </div>
      </div>
    </footer>
  );
}

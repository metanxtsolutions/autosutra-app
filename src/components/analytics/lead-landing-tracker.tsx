"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const STORAGE_KEY = "as_landing_page";

// Records the first page a visitor lands on this session, so a lead
// submitted later (possibly several pages and client-side navigations
// away, where document.referrer is empty because Next.js route changes
// never trigger a real browser navigation) can still be attributed back to
// the page that actually brought them in. First-touch, not last-touch:
// deliberately never overwrites an existing value, since "which article/
// service page originally drove this visit" is the signal content ROI
// (see the growth strategy doc's measurement section) needs, not
// "whichever page they happened to be on right before submitting."
export function LeadLandingTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      const query = searchParams.toString();
      sessionStorage.setItem(
        STORAGE_KEY,
        query ? `${pathname}?${query}` : pathname,
      );
    } catch {
      // Storage unavailable (private browsing, disabled storage, etc.) —
      // captureLeadSourceDetail() falls back to the current page in that case.
    }
    // Intentionally runs once per session (first successful write wins),
    // not on every pathname change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

// GA4 measurement IDs aren't secret (they're visible in any site's public
// page source), so the real one is the default here rather than requiring
// an env var to be set in Vercel. NEXT_PUBLIC_GA_MEASUREMENT_ID can still
// override it, e.g. to point a preview deploy at a different property.
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-9C5J3EHGQ0";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

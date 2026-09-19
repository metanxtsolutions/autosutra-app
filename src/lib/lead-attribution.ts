// Cheap, no-migration lead attribution: the `sourceDetail` column on Lead
// already exists but nothing has ever populated it, so every lead in the
// tracker is indistinguishable by originating page. LeadLandingTracker
// records the visitor's first page of the session into sessionStorage
// (first-touch, since document.referrer is empty on Next.js client-side
// navigations and wouldn't survive the visitor browsing to another page
// before submitting a form anyway); this reads that value back at submit
// time, falling back to the current page if storage isn't available.
const STORAGE_KEY = "as_landing_page";

export function captureLeadSourceDetail(): string {
  if (typeof window === "undefined") return "unknown";

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
  } catch {
    // Storage unavailable — fall through to the current-page fallback below.
  }

  const query = window.location.search;
  return query
    ? `${window.location.pathname}${query}`
    : window.location.pathname;
}

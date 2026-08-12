// The internal lead tracker (/leads) and its /login page render their own
// minimal chrome, not the public marketing Header/Footer/WhatsApp sticky
// CTA. Checked from each of those shared components rather than via a
// route-group layout refactor, since the rest of the site's route tree
// (hundreds of pages) doesn't need to move to support two new routes.
export function isInternalRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname.startsWith("/leads") || pathname.startsWith("/login");
}

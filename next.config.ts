import type { NextConfig } from "next";
import { states } from "./src/data/states";

const nextConfig: NextConfig = {
  async redirects() {
    const stateHubRedirects = states.map((state) => ({
      source: `/city/${state.hubProfile.slug}`,
      destination: `/india/${state.slug}`,
      permanent: true,
    }));

    const districtRedirects = states.flatMap((state) =>
      state.districts.map((district) => ({
        source: `/city/${district.slug}`,
        destination: `/india/${state.slug}/${district.slug}`,
        permanent: true,
      })),
    );

    // The domain ran WordPress before this Next.js rebuild. Google still has
    // pre-migration paths indexed (e.g. a wp-content/uploads PDF), which
    // return a raw 403 today instead of a clean signal. Redirect the known
    // WordPress path families to real, live pages so Google can settle on a
    // canonical destination instead of retrying a dead path indefinitely.
    const legacyWordPressRedirects = [
      { source: "/wp-content/:path*", destination: "/about", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      // Still indexed by Google as of the July 2026 SEO audit, both 404 today.
      // Google's indexed URLs have a trailing slash; Next's own trailing-slash
      // normalization runs before these rules, so that variant resolves in
      // two permanent-redirect hops (both 308) rather than one. Still a
      // correct, crawlable resolution to the live page.
      { source: "/service-one", destination: "/services", permanent: true },
      { source: "/pricing-plan", destination: "/pricing", permanent: true },
      // The rest of the WordPress site's real pages, recovered from the
      // Wayback Machine (archived March to May 2026). Search engines were
      // still listing /service/auto-lead-generation/ in October 2026 and it
      // returned 404, so whatever ranking those pages held was being lost
      // instead of passed on. Each maps to its closest current page; any
      // other /service/ or /blog/ path falls back to the hub. The theme's
      // demo content (products, portfolio, unrelated industries, demo posts)
      // is deliberately left to 404 so it drops out of the index.
      {
        source: "/service/auto-lead-generation",
        destination: "/services/verified-buyer-leads",
        permanent: true,
      },
      {
        source: "/service/auto-content-creation",
        destination: "/services/content-creation",
        permanent: true,
      },
      {
        source: "/service/data-services",
        destination: "/services/dealer-data-services",
        permanent: true,
      },
      {
        source: "/service/digital-marketing",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/service/saas-tools",
        destination: "/services/saas-platform",
        permanent: true,
      },
      { source: "/service/dealer-solutions", destination: "/solutions", permanent: true },
      { source: "/service/:path*", destination: "/services", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-team", destination: "/about", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:path*", destination: "/resources", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/landing", destination: "/", permanent: true },
    ];

    return [
      ...stateHubRedirects,
      ...districtRedirects,
      ...legacyWordPressRedirects,
      // /omni-communication-platform/resellers is a real page (the B2B
      // reseller landing page); the bare path itself isn't, so it sends
      // dealer-facing visitors to the actual product page instead of 404ing.
      {
        source: "/omni-communication-platform",
        destination: "/services/omni-communication-platform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

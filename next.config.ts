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
    ];

    return [
      ...stateHubRedirects,
      ...districtRedirects,
      ...legacyWordPressRedirects,
    ];
  },
};

export default nextConfig;

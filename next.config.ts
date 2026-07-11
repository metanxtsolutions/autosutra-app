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

    return [...stateHubRedirects, ...districtRedirects];
  },
};

export default nextConfig;

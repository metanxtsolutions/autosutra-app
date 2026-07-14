// Relative imports (not the "@/" alias) are used throughout this file
// deliberately: next.config.ts also loads this module directly off disk to
// build redirects, and its transpile step does not resolve tsconfig path
// aliases the way the app's own build does.
import type { DistrictProfile } from "./wb-districts";
import { districtProfiles, wbStateProfile } from "./wb-districts";
import { apDistrictProfiles, apStateProfile } from "./ap-districts";
import { arDistrictProfiles, arStateProfile } from "./ar-districts";
import { assamDistrictProfiles, assamStateProfile } from "./assam-districts";
import { biharDistrictProfiles, biharStateProfile } from "./bihar-districts";
import {
  chhattisgarhDistrictProfiles,
  chhattisgarhStateProfile,
} from "./chhattisgarh-districts";

export type StateEntry = {
  slug: string;
  name: string;
  hubProfile: DistrictProfile;
  districts: DistrictProfile[];
};

// Single source of truth for the /india/{state}/{district} hierarchy.
// Consumed by the india routes, sitemap.ts, and next.config.ts redirects,
// so those three can never drift out of sync with each other.
export const states: StateEntry[] = [
  {
    slug: wbStateProfile.slug,
    name: wbStateProfile.name,
    hubProfile: wbStateProfile,
    districts: districtProfiles,
  },
  {
    slug: apStateProfile.slug,
    name: apStateProfile.name,
    hubProfile: apStateProfile,
    districts: apDistrictProfiles,
  },
  {
    slug: arStateProfile.slug,
    name: arStateProfile.name,
    hubProfile: arStateProfile,
    districts: arDistrictProfiles,
  },
  {
    slug: assamStateProfile.slug,
    name: assamStateProfile.name,
    hubProfile: assamStateProfile,
    districts: assamDistrictProfiles,
  },
  {
    slug: biharStateProfile.slug,
    name: biharStateProfile.name,
    hubProfile: biharStateProfile,
    districts: biharDistrictProfiles,
  },
  {
    slug: chhattisgarhStateProfile.slug,
    name: chhattisgarhStateProfile.name,
    hubProfile: chhattisgarhStateProfile,
    districts: chhattisgarhDistrictProfiles,
  },
];

export function getStateBySlug(stateSlug: string): StateEntry | undefined {
  return states.find((state) => state.slug === stateSlug);
}

export function getDistrictBySlug(
  stateSlug: string,
  districtSlug: string,
): DistrictProfile | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.districts.find((district) => district.slug === districtSlug);
}

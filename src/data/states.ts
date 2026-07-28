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
import { goaDistrictProfiles, goaStateProfile } from "./goa-districts";
import {
  karnatakaDistrictProfiles,
  karnatakaStateProfile,
} from "./karnataka-districts";
import {
  maharashtraDistrictProfiles,
  maharashtraStateProfile,
} from "./maharashtra-districts";
import {
  tamilNaduDistrictProfiles,
  tamilNaduStateProfile,
} from "./tamil-nadu-districts";
import {
  telanganaDistrictProfiles,
  telanganaStateProfile,
} from "./telangana-districts";
import {
  gujaratDistrictProfiles,
  gujaratStateProfile,
} from "./gujarat-districts";
import { delhiDistrictProfiles, delhiStateProfile } from "./delhi-districts";
import { sikkimDistrictProfiles, sikkimStateProfile } from "./sikkim-districts";

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
  {
    slug: goaStateProfile.slug,
    name: goaStateProfile.name,
    hubProfile: goaStateProfile,
    districts: goaDistrictProfiles,
  },
  {
    slug: karnatakaStateProfile.slug,
    name: karnatakaStateProfile.name,
    hubProfile: karnatakaStateProfile,
    districts: karnatakaDistrictProfiles,
  },
  {
    slug: maharashtraStateProfile.slug,
    name: maharashtraStateProfile.name,
    hubProfile: maharashtraStateProfile,
    districts: maharashtraDistrictProfiles,
  },
  {
    slug: tamilNaduStateProfile.slug,
    name: tamilNaduStateProfile.name,
    hubProfile: tamilNaduStateProfile,
    districts: tamilNaduDistrictProfiles,
  },
  {
    slug: telanganaStateProfile.slug,
    name: telanganaStateProfile.name,
    hubProfile: telanganaStateProfile,
    districts: telanganaDistrictProfiles,
  },
  {
    slug: gujaratStateProfile.slug,
    name: gujaratStateProfile.name,
    hubProfile: gujaratStateProfile,
    districts: gujaratDistrictProfiles,
  },
  {
    slug: delhiStateProfile.slug,
    name: delhiStateProfile.name,
    hubProfile: delhiStateProfile,
    districts: delhiDistrictProfiles,
  },
  {
    slug: sikkimStateProfile.slug,
    name: sikkimStateProfile.name,
    hubProfile: sikkimStateProfile,
    districts: sikkimDistrictProfiles,
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

// A metro's `region` is usually a single state name ("Karnataka"), but Delhi
// NCR's spans multiple states ("Delhi, Gurugram, Noida, Faridabad"), since
// the metro area itself crosses state lines even though only Delhi gets its
// own /india entry. Splitting on comma lets that metro still match the
// "Delhi" state entry without a plain string a.includes(b) risking a false
// positive on an unrelated substring.
export function regionIncludesState(region: string, stateName: string): boolean {
  return region
    .split(",")
    .map((part) => part.trim())
    .includes(stateName);
}

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
import { tripuraDistrictProfiles, tripuraStateProfile } from "./tripura-districts";
import { mizoramDistrictProfiles, mizoramStateProfile } from "./mizoram-districts";
import {
  meghalayaDistrictProfiles,
  meghalayaStateProfile,
} from "./meghalaya-districts";
import { manipurDistrictProfiles, manipurStateProfile } from "./manipur-districts";
import {
  nagalandDistrictProfiles,
  nagalandStateProfile,
} from "./nagaland-districts";
import { keralaDistrictProfiles, keralaStateProfile } from "./kerala-districts";
import { haryanaDistrictProfiles, haryanaStateProfile } from "./haryana-districts";
import { punjabDistrictProfiles, punjabStateProfile } from "./punjab-districts";
import {
  himachalPradeshDistrictProfiles,
  himachalPradeshStateProfile,
} from "./himachal-pradesh-districts";
import {
  uttarakhandDistrictProfiles,
  uttarakhandStateProfile,
} from "./uttarakhand-districts";
import {
  jharkhandDistrictProfiles,
  jharkhandStateProfile,
} from "./jharkhand-districts";
import { odishaDistrictProfiles, odishaStateProfile } from "./odisha-districts";
import {
  rajasthanDistrictProfiles,
  rajasthanStateProfile,
} from "./rajasthan-districts";
import {
  chandigarhDistrictProfiles,
  chandigarhStateProfile,
} from "./chandigarh-districts";
import {
  lakshadweepDistrictProfiles,
  lakshadweepStateProfile,
} from "./lakshadweep-districts";

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
  {
    slug: tripuraStateProfile.slug,
    name: tripuraStateProfile.name,
    hubProfile: tripuraStateProfile,
    districts: tripuraDistrictProfiles,
  },
  {
    slug: mizoramStateProfile.slug,
    name: mizoramStateProfile.name,
    hubProfile: mizoramStateProfile,
    districts: mizoramDistrictProfiles,
  },
  {
    slug: meghalayaStateProfile.slug,
    name: meghalayaStateProfile.name,
    hubProfile: meghalayaStateProfile,
    districts: meghalayaDistrictProfiles,
  },
  {
    slug: manipurStateProfile.slug,
    name: manipurStateProfile.name,
    hubProfile: manipurStateProfile,
    districts: manipurDistrictProfiles,
  },
  {
    slug: nagalandStateProfile.slug,
    name: nagalandStateProfile.name,
    hubProfile: nagalandStateProfile,
    districts: nagalandDistrictProfiles,
  },
  {
    slug: keralaStateProfile.slug,
    name: keralaStateProfile.name,
    hubProfile: keralaStateProfile,
    districts: keralaDistrictProfiles,
  },
  {
    slug: haryanaStateProfile.slug,
    name: haryanaStateProfile.name,
    hubProfile: haryanaStateProfile,
    districts: haryanaDistrictProfiles,
  },
  {
    slug: punjabStateProfile.slug,
    name: punjabStateProfile.name,
    hubProfile: punjabStateProfile,
    districts: punjabDistrictProfiles,
  },
  {
    slug: himachalPradeshStateProfile.slug,
    name: himachalPradeshStateProfile.name,
    hubProfile: himachalPradeshStateProfile,
    districts: himachalPradeshDistrictProfiles,
  },
  {
    slug: uttarakhandStateProfile.slug,
    name: uttarakhandStateProfile.name,
    hubProfile: uttarakhandStateProfile,
    districts: uttarakhandDistrictProfiles,
  },
  {
    slug: jharkhandStateProfile.slug,
    name: jharkhandStateProfile.name,
    hubProfile: jharkhandStateProfile,
    districts: jharkhandDistrictProfiles,
  },
  {
    slug: odishaStateProfile.slug,
    name: odishaStateProfile.name,
    hubProfile: odishaStateProfile,
    districts: odishaDistrictProfiles,
  },
  {
    slug: rajasthanStateProfile.slug,
    name: rajasthanStateProfile.name,
    hubProfile: rajasthanStateProfile,
    districts: rajasthanDistrictProfiles,
  },
  {
    slug: chandigarhStateProfile.slug,
    name: chandigarhStateProfile.name,
    hubProfile: chandigarhStateProfile,
    districts: chandigarhDistrictProfiles,
  },
  {
    slug: lakshadweepStateProfile.slug,
    name: lakshadweepStateProfile.name,
    hubProfile: lakshadweepStateProfile,
    districts: lakshadweepDistrictProfiles,
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

// Delhi NCR's `region` lists city names, not state names ("Delhi, Gurugram,
// Noida, Faridabad"), since the metro spans multiple states even though only
// Delhi itself gets its own /india entry. "Delhi" matches the Delhi state
// entry by name directly, but "Gurugram" and "Faridabad" are Haryana towns
// and "Noida" is a Uttar Pradesh town, none of which match those states'
// names as plain strings. This lookup maps those specific city tokens to
// their state, so Haryana's and Uttar Pradesh's /india hubs also get the
// reciprocal Delhi NCR link once (if) those states are registered.
const REGION_TOKEN_STATE_OVERRIDES: Record<string, string> = {
  Gurugram: "Haryana",
  Faridabad: "Haryana",
  Noida: "Uttar Pradesh",
};

// A metro's `region` is usually a single state name ("Karnataka"), but Delhi
// NCR's spans multiple states, since the metro area itself crosses state
// lines even though only Delhi gets its own /india entry. Splitting on comma
// lets that metro match every state it actually touches, via either a direct
// name match or the city-to-state override above, without a plain string
// a.includes(b) risking a false positive on an unrelated substring.
export function regionIncludesState(region: string, stateName: string): boolean {
  return region
    .split(",")
    .map((part) => part.trim())
    .some(
      (part) => part === stateName || REGION_TOKEN_STATE_OVERRIDES[part] === stateName,
    );
}

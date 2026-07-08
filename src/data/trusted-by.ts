// Brand names AutoSutra works with, per the client. Rendered as typographic
// wordmarks. No official OEM logo artwork is bundled here since reproducing
// trademarked logo files requires confirmed licensing. Drop licensed SVGs into
// /public/logos/ and wire them up via `logoSrc` when available.
export type TrustedBrand = {
  name: string;
  logoSrc: string | null;
};

export const trustedBrands: TrustedBrand[] = [
  { name: "BMW", logoSrc: null },
  { name: "Audi", logoSrc: null },
  { name: "MG Motor", logoSrc: null },
  { name: "Tata Motors", logoSrc: null },
  { name: "Hyundai", logoSrc: null },
];

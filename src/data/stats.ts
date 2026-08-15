export type Stat = {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Dealerships & Resellers Served" },
  { value: 6, prefix: "₹", suffix: " Cr+", label: "Ad Spend Managed Yearly" },
  { value: 1.5, suffix: " Lac+", decimals: 1, label: "Verified Leads Yearly" },
  { value: 98, suffix: "%", label: "Lead Quality" },
  { value: 30, suffix: "%+", label: "Higher Conversions" },
];

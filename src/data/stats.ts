export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 250, suffix: "+", label: "Dealer Partners" },
  { value: 700, suffix: "+", label: "Verified Leads Monthly" },
  { value: 98, suffix: "%", label: "Lead Quality" },
  { value: 30, suffix: "%+", label: "Higher Conversions" },
];

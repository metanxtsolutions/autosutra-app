export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your dealership's market, funnel, and competitors to find where growth is being left on the table.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "A growth roadmap built around your inventory, region, and sales targets, not a generic template.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Campaigns, content, and CRM go live across every channel your buyers actually use.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Weekly performance reviews and data-driven adjustments keep cost-per-lead falling and quality rising.",
  },
  {
    step: "05",
    title: "Scale",
    description:
      "Once a channel proves ROI, we scale spend and expand into new models, cities, and platforms.",
  },
];

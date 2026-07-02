// Milestones are written without specific calendar dates since exact
// founding/launch dates weren't supplied. Add real dates here once confirmed.
export type Milestone = {
  label: string;
  title: string;
  description: string;
};

export const timeline: Milestone[] = [
  {
    label: "Chapter 01",
    title: "Foundation",
    description:
      "AutoSutra started with a simple observation: dealerships were spending on marketing with no reliable way to measure what actually converted into sales.",
  },
  {
    label: "Chapter 02",
    title: "First dealer partners",
    description:
      "Early dealership partners helped shape the verified-lead model — phone-verified buyers matched to inventory, not generic form-fill leads.",
  },
  {
    label: "Chapter 03",
    title: "Building the platform",
    description:
      "As demand grew, we built dealer-facing tools — CRM, WhatsApp automation, and reporting — so growth didn't depend on manual spreadsheets.",
  },
  {
    label: "Chapter 04",
    title: "Expanding across categories",
    description:
      "From car dealerships to bikes, EVs, used cars, and OEM networks — the model expanded to serve every corner of the automotive retail market.",
  },
  {
    label: "Today",
    title: "250+ dealer partners nationwide",
    description:
      "AutoSutra now supports dealer partners across India with verified leads, performance marketing, and a growing suite of dealer growth technology.",
  },
];

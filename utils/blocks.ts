export interface ComponentBlock {
  slug: string;
  name: string;
  components: { name: string }[];
}

export const blocks: ComponentBlock[] = [
  {
    slug: "accordion",
    name: "Accordion",
    components: [
      { name: "comp-334" },
      { name: "comp-335" },
      { name: "comp-336" },
      { name: "comp-337" },
      { name: "comp-338" },
      { name: "comp-339" },
      { name: "comp-340" },
      { name: "comp-341" },
    ],
  },
  {
    slug: "alert",
    name: "Alert",
    components: [
      { name: "comp-267" },
      { name: "comp-268" },
      { name: "comp-269" },
    ],
  },
  {
    slug: "avatar",
    name: "Avatar",
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-392" },
      { name: "comp-393" },
    ],
  },
  {
    slug: "badge",
    name: "Badge",
    components: [{ name: "comp-413" }],
  },
  {
    slug: "textarea",
    name: "Hmmm",
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-392" },
      { name: "comp-393" },
    ],
  },
  {
    slug: "input",
    name: "Blocks",
    components: [{ name: "comp-413" }],
  },
  {
    slug: "coming",
    name: "Badge",
    components: [{ name: "comp-413" }],
  },
  {
    slug: "view",
    name: "View All",
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-392" },
      { name: "comp-393" },
    ],
  },
];

export function getBlock(slug: string): ComponentBlock | undefined {
  return blocks.find((block) => block.slug === slug);
}

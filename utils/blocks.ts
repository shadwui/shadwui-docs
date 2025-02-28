export interface ComponentBlock {
  slug: string;
  name: string;
  image: string;
  components: { name: string }[];
}

const mainSlug = "docs/blocks";

export const blocks: ComponentBlock[] = [
  {
    image: "accordion",
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
    image: "alert",
    slug: "accordion",
    name: "Alert",
    components: [
      { name: "comp-267" },
      { name: "comp-268" },
      { name: "comp-269" },
    ],
  },
  {
    image: "coming",
    name: "Landing",
    slug: "accordion",

    components: [{ name: "comp-413" }],
  },
  {
    image: "view",
    name: "View All",
    slug: `${mainSlug}`,
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

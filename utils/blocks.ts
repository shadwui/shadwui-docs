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
    slug: "sadasf",
    name: "aa",
    components: [
      { name: "comp-267" },
      { name: "comp-268" },
      { name: "comp-269" },
    ],
  },
  {
    slug: "as",
    name: "afsdasd",
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-392" },
      { name: "comp-393" },
    ],
  },
  {
    slug: "jhasdfj",
    name: "ahsj",
    components: [{ name: "comp-413" }],
  },
  {
    slug: "aass",
    name: "afsadasd",
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

import { BoxProps } from "@/components/_components/box";

const mainSlug = "docs/blocks";

export const blocks: BoxProps[] = [
  {
    image: "hero",
    name: "Hero Page",
    slug: `${mainSlug}/hero`,
    componentsType: "blocks",
    components: [{ name: "hero-01" }, { name: "hero-02" }],
  },

  {
    image: "header",
    name: "Header",
    slug: `${mainSlug}/header`,
    isComing: true,
    componentsType: "blocks",
    components: [{ name: "header-01" }, { name: "header-02" }],
  },

  {
    image: "footer",
    name: "Footer",
    slug: `${mainSlug}/footer`,
    isComing: true,
    componentsType: "blocks",
    components: [],
  },

  {
    slug: `${mainSlug}`,
    name: "View All",
    image: "view",
    componentsType: "blocks",
    components: [
      { name: "Hero" },
      { name: "Header" },
      { name: "Login" },
      { name: "footer" },
    ],
  },
];

export function getBlock(slug: string): BoxProps | undefined {
  return blocks.find((block) => block.slug === slug);
}

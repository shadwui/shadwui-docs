import { BoxProps } from "@/components/_components/box";

const mainSlug = "docs/blocks";

export const blocks: BoxProps[] = [
  {
    image: "preview",
    name: "Hero Page",
    slug: `${mainSlug}/accordion`,
    componentsType: "blocks",
    isComing: true,
    components: [],
  },

  {
    image: "preview",
    name: "Login",
    slug: `${mainSlug}/accordion`,
    componentsType: "blocks",
    components: [{ name: "login-01" }, { name: "login-02" }],
  },

  {
    image: "preview",
    name: "Footer",
    slug: `${mainSlug}/accordion`,
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
      { name: "Hero Page" },
      { name: "Header" },
      { name: "Login" },
      { name: "footer" },
    ],
  },
];

export function getBlock(slug: string): BoxProps | undefined {
  return blocks.find((block) => block.slug === slug);
}

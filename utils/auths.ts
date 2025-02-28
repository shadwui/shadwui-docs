import { BoxProps } from "@/components/_components/box";

const mainSlug = "docs/authentication";

export const auths: BoxProps[] = [
  {
    image: "preview",
    name: "Mongodb",
    slug: `${mainSlug}/accordion`,
    componentsType: "auths",

    components: [{ name: "mongodb" }],
  },

  {
    image: "preview",
    name: "Neon",
    isComing: true,
    slug: `${mainSlug}/accordion`,
    componentsType: "auths",
    components: [],
  },

  {
    image: "preview",
    name: "Prisma",
    slug: `${mainSlug}/accordion`,
    isComing: true,
    componentsType: "auths",
    components: [],
  },

  {
    slug: `${mainSlug}`,
    name: "View All",
    image: "view",
    componentsType: "auths",
    components: [
      { name: "mongodb" }, 
      { name: "neon" }, 
      { name: "prisma" }
    ],
  },
];

export function getAuth(slug: string): BoxProps | undefined {
  return auths.find((auth) => auth.slug === slug);
}

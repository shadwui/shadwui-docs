export interface ComponentAuth {
  slug: string;
  name: string;
  image: string;
  components: { name: string }[];
}

const mainSlug = "docs/authentication";

export const auths: ComponentAuth[] = [
  {
    slug: "docs/authentication/mongodb/database",
    name: "MongoDb",
    image: "accordion",
    components: [
      { name: "comp-334" },
      { name: "comp-335" },
      { name: "comp-336" },
    ],
  },
  {
    slug: "docs/authentication/neon/database",
    name: "Neon",
    image: "alert",
    components: [
      { name: "comp-267" },
      { name: "comp-268" },
      { name: "comp-269" },
    ],
  },

  {
    slug: "coming",
    image: "coming",
    name: "Prisma",
    components: [{ name: "comp-413" }],
  },
  {
    slug: `${mainSlug}`,
    name: "View All",
    image: "view",
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-392" },
    ],
  },
];

export function getAuth(slug: string): ComponentAuth | undefined {
  return auths.find((auth) => auth.slug === slug);
}

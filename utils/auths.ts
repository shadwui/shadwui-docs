export interface ComponentAuth {
  slug: string;
  name: string;
  components: { name: string }[];
}

export const auths: ComponentAuth[] = [
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
    slug: "coming",
    name: "Badge",
    components: [{ name: "comp-413" }],
  },  {
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

export function getAuth(slug: string): ComponentAuth | undefined {
  return auths.find((auth) => auth.slug === slug);
}

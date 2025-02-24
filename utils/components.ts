export interface ComponentCategory {
  slug: string;
  name: string;
  components: { name: string }[];
  image: string;
}

const mainSlug = "docs/components";

export const categories: ComponentCategory[] = [
  {
    image: "coming",
    name: "Accordion",
    slug: `${mainSlug}/accordion`,
    components: [
      { name: "comp-334" },
      { name: "comp-335" },
      { name: "comp-336" },
      { name: "comp-337" },
    ],
  },
  {
    image: "alert",
    name: "Alert",
    slug: `${mainSlug}/alert`,
    components: [
      { name: "comp-267" },
      { name: "comp-268" },
      { name: "comp-269" },
      { name: "comp-270" },
    ],
  },
  {
    image: "avatar",
    name: "Avatar",
    slug: `${mainSlug}/avatar`,
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-392" },
      { name: "comp-399" },
    ],
  },
  {
    image: "banner",
    name: "Banner",
    slug: `${mainSlug}/banner`,
    components: [
      { name: "comp-301" },
      { name: "comp-302" },
      { name: "comp-312" },
    ],
  },
  {
    image: "breadcrumb",
    name: "Breadcrumb",
    slug: `${mainSlug}/breadcrumb`,
    components: [{ name: "comp-446" }, { name: "comp-447" }],
  },
  {
    image: "button",
    name: "Button",
    slug: `${mainSlug}/button`,
    components: [{ name: "comp-78" }, { name: "comp-79" }],
  },
  {
    image: "notification",
    name: "Notification",
    slug: `${mainSlug}/notification`,
    components: [
      { name: "comp-354" },
      { name: "comp-355" },
      { name: "comp-364" },
      { name: "comp-365" },
    ],
  },
  {
    image: "checkbox",
    name: "Checkbox",
    slug: `${mainSlug}/checkbox`,
    components: [
      { name: "comp-132" },
      { name: "comp-133" },
      { name: "comp-150" },
    ],
  },
  {
    image: "radio",
    name: "Radio",
    slug: `${mainSlug}/radio`,
    components: [
      { name: "comp-132" },
      { name: "comp-133" },
      { name: "comp-150" },
    ],
  },
  {
    image: "textarea",
    name: "Textarea",
    slug: `${mainSlug}/textarea`,
    components: [
      { name: "comp-59" },
      { name: "comp-60" },
      { name: "comp-74" },
      { name: "comp-75" },
      { name: "comp-76" },
      { name: "comp-77" },
    ],
  },
  {
    image: "switch",
    name: "Switch",
    slug: `${mainSlug}/switch`,
    components: [
      { name: "comp-59" },
      { name: "comp-60" },
      { name: "comp-74" },
      { name: "comp-75" },
      { name: "comp-76" },
      { name: "comp-77" },
    ],
  },
  {
    image: "view",
    slug: `${mainSlug}/alert`,
    name: "View All",
    components: [
      { name: "comp-390" },
      { name: "comp-391" },
      { name: "comp-3921" },
    ],
  },
];

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

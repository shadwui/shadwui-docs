import { blocks } from "@/utils/blocks";
import { categories } from "@/utils/components";
import { templates } from "@/utils/templates";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://shadwui.com",
  };
  const docs = {
    url: "https://shadwui.com/docs",
  };
  const authentication = {
    url: "https://shadwui.com/docs/authentication",
  };
  const heading = {
    url: `https://shadwui.com/docs/typography/heading`,
  };
  const blockPages = blocks.map((block) => ({
    url: `https://shadwui.com/docs/blocks/${block.name}/${block.slug}`,
  }));
  const templatePages = templates.map((template) => ({
    url: `https://shadwui.com/docs/templates/${template.slug}`,
  }));
  const categoryPages = categories.map((category) => ({
    url: `https://shadwui.com/docs/${category.slug}`,
  }));

  return [
    home,
    docs,
    heading,
    authentication,
    ...blockPages,
    ...categoryPages,
    ...templatePages,
  ];
}

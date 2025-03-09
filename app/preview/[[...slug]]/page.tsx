import NotFound from "@/app/not-found";
import { readComponentPath } from "@/utils/read-component";
import React from "react";

interface PageProps {
  params: {
    slug?: string[];
  };
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug?.join("/") || "";
  const slugName = slug.split("-")[0];

  const Component = await readComponentPath(`src/blocks/${slugName}`, slug);

  if (!Component) return <NotFound />;

  return <Component />;
};

export default Page;

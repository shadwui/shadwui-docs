import React from "react";

import { BoxGridLayout } from "@/components/_components/box";


import { categories } from "@/utils/components";
import CodePreview from "../code/code-preview";


export const BoxTab = () => {
  return (
    <BoxGridLayout
      items={categories.map((category) => ({
        ...category,
        components: category.components
          ?.map((component) => component.name)
          .join(", "),
      }))}
    />
  );
};

export const AuthTab = () => {
  return (
    <div className="my-44">
      <CodePreview />
    </div>
  )
}
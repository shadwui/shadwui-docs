import React from "react";

import { BoxGridLayout } from "@/components/_components/box";

import { categories } from "@/utils/components";
import CodePreview from "../code/code-preview";
import { auths } from "@/utils/auths";
import { blocks } from "@/utils/blocks";
import { templates } from "@/utils/templates";

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
    <div className="mb-10">
      <BoxGridLayout
        items={auths.map((auth) => ({
          ...auth,
          components: auth.components?.map((auth) => auth.name).join(", "),
        }))}
      />

      <div>
        <h1>Documentation</h1>
        <p>
          Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          eaque consequatur quo voluptate autem laborum quod cupiditate.
          Distinctio eum voluptas officia facilis modi. Pariatur tenetur
          incidunt minus ex dolorem cupiditate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Neque eaque consequatur quo voluptate
          autem laborum quod cupiditate. Distinctio eum voluptas officia facilis
          modi. Pariatur tenetur incidunt minus ex dolorem cupiditate. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Neque eaque
          consequatur quo voluptate autem laborum quod cupiditate. Distinctio
          eum voluptas officia facilis modi. Pariatur tenetur incidunt minus ex
          dolorem cupiditate. ipsum, dolor sit amet consectetur adipisicing
          elit. Neque eaque consequatur quo voluptate autem laborum quod
          cupiditate. Distinctio eum voluptas officia facilis modi. Pariatur
          tenetur incidunt minus ex dolorem cupiditate.
        </p>
      </div>

      <div>
        <h4>Login form for authentication</h4>
        <CodePreview />
      </div>

      <div>
        <h4>Register form for authentication</h4>
        <CodePreview />
      </div>
    </div>
  );
};

export const BlockTab = () => {
  return (
    <div>
      <div>
        <h4>Register form for authentication</h4>
        <CodePreview />
      </div>

      <div>
        <h4>Register form for authentication</h4>
        <CodePreview />
      </div>

      <BoxGridLayout
        items={blocks.map((block) => ({
          ...block,
          components: block.components?.map((block) => block.name).join(", "),
        }))}
      />
    </div>
  );
};

export const TemplateTab = () => {
  return (
    <div>
      <div>
        <h4>Register form for Template one</h4>
        <CodePreview />
      </div>

      <div>
        <h4>Register form for Template Two.</h4>
        <CodePreview />
      </div>

      <BoxGridLayout
        items={templates.map((template) => ({
          ...template,
          components: template.components
            ?.map((template) => template.name)
            .join(", "),
        }))}
      />
    </div>
  );
};

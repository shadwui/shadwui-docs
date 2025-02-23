import React from "react";

import { BoxGridLayout } from "@/components/_components/box";

import { categories } from "@/utils/components";
import CodePreview from "../code/code-preview";
import { auths } from "@/utils/auths";
import { blocks } from "@/utils/blocks";
import { templates } from "@/utils/templates";
import { Heading } from "@/registry/components/heading";
import TheamBorder from "@/registry/premium/components/theam-border";

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

      <TheamBorder />
      <div className="py-10">
        <Heading className="text-center font-heading" variant="h1">
          Documentation Soon...
        </Heading>
      </div>

      <TheamBorder />
      <div className="py-12">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Login 01"}
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="pt-10">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Register 01"}
          copyButton={true}
        />
      </div>
    </div>
  );
};

export const BlockTab = () => {
  return (
    <div>
      <div className="pb-10 pt-6">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Block 01"}
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="py-10">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Block 02"}
          copyButton={true}
        />
      </div>

      <TheamBorder />

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
      <div className="pb-10 pt-6">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Template 01"}
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="py-10">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Template 02"}
          copyButton={true}
        />
      </div>

      <TheamBorder />

      <div className="py-10">
        <CodePreview
          minimumCodeHeight="500px"
          componentName={"Template 03"}
          copyButton={true}
        />
      </div>

      <TheamBorder />

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

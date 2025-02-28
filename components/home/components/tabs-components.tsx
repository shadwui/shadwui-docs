import React from "react";

import { BoxGridLayout } from "@/components/_components/box";

import { categories } from "@/utils/components";
import CodePreview from "../code/code-preview";
import { auths } from "@/utils/auths";
import { blocks } from "@/utils/blocks";
import { Heading } from "@/registry/src/components/ui/heading";
import TheamBorder from "@/registry/src/premium/components/theam-border";

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
          sourcePath="src/blocks/login"
          componentName={"login-01"}
          minimumCodeHeight="500px"
          codeBlockMaximumHeight="500px"
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="pt-10">
        <CodePreview
          sourcePath="src/default"
          componentName={"coming-soon"}
          minimumCodeHeight="500px"
          copyButton={false}
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
          sourcePath="src/blocks/footer"
          componentName={"footer-01"}
          minimumCodeHeight="500px"
          copyButton={true}
          imagePreview={true}
          imageUrl="/assets/blocks/hero-01.png"
        />
      </div>

      <TheamBorder />
      <div className="py-10">
        <CodePreview
          sourcePath="src/blocks/header"
          componentName={"header-01"}
          minimumCodeHeight="500px"
          copyButton={true}
          imagePreview={true}
          imageUrl="/assets/blocks/hero-02.png"
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
          sourcePath="src/default"
          componentName={"coming-soon"}
          minimumCodeHeight="500px"
          copyButton={false}
          imagePreview={true}
          imageUrl="/assets/blocks/sketch-ui.png"
          github={true}
          githubName="Sketch UI"
        />
      </div>

      <TheamBorder />
      <div className="py-10">
        <CodePreview
          sourcePath="src/default"
          componentName={"coming-soon"}
          minimumCodeHeight="500px"
          copyButton={false}
          imagePreview={true}
          imageUrl="/assets/blocks/case-ui.png"
          github={true}
          githubName="Case Cobra UI"
        />
      </div>

      <TheamBorder />

      <div className="py-10">
        <CodePreview
          sourcePath="src/default"
          componentName={"coming-soon"}
          minimumCodeHeight="500px"
          copyButton={false}
        />
      </div>
    </div>
  );
};

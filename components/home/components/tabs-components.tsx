import React from "react";

import { BoxGridLayout } from "@/components/_components/box";

import { categories } from "@/utils/components";
import CodePreview from "../code/code-preview";
import { auths } from "@/utils/auths";
import { blocks } from "@/utils/blocks";
import { templates } from "@/utils/templates";
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
          sourcePath="src/auth/login"
          componentName={"login-form-01"}
          minimumCodeHeight="500px"
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="pt-10">
        <CodePreview
          sourcePath="src/auth/register"
          componentName={"register-form-01"}
          minimumCodeHeight="500px"
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
          sourcePath="src/blocks/footer"
          componentName={"footer-01"}
          minimumCodeHeight="500px"
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="py-10">
        <CodePreview
          sourcePath="src/blocks/header"
          componentName={"header-01"}
          minimumCodeHeight="500px"
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
          sourcePath="src/templates/testimonials"
          componentName={"testimonial-01"}
          minimumCodeHeight="500px"
          copyButton={true}
        />
      </div>

      <TheamBorder />
      <div className="py-10">
        <CodePreview
          sourcePath="src/templates/testimonials"
          componentName={"testimonial-02"}
          minimumCodeHeight="500px"
          copyButton={true}
        />
      </div>

      <TheamBorder />

      <div className="py-10">
        <CodePreview
          sourcePath="src/templates/landings"
          componentName={"landing-01"}
          minimumCodeHeight="500px"
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

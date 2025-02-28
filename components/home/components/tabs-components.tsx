import React from "react";

import TheamBorder from "@/registry/src/premium/components/theam-border";
import { Heading } from "@/registry/src/components/ui/heading";
import { BoxGridLayout } from "@/components/_components/box";
import { components } from "@/utils/components";
import CodePreview from "../code/code-preview";
import { blocks } from "@/utils/blocks";
import { auths } from "@/utils/auths";

export const BoxTab = () => {
  return <BoxGridLayout items={components} />;
};

export const AuthTab = () => {
  return (
    <div className="mb-10">
      <BoxGridLayout items={auths} />

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
          imageUrl="/blocks/hero-01.avif"
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
          imageUrl="/blocks/hero-02.avif"
        />
      </div>

      <TheamBorder />

      <BoxGridLayout items={blocks} />
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
          imageUrl="/blocks/sketch-ui.avif"
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
          imageUrl="/blocks/case-ui.avif"
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

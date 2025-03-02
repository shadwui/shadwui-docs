import React from "react";
import CodeBlock from "./CodeBlock";
import CopyButton from "./CopyButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/src/components/ui/card";
import { cn } from "@/registry/src/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/src/components/ui/tab";
import { DotPattern } from "@/registry/src/components/ui/dot-pattern";
import { Separator } from "@radix-ui/react-separator";
import CopyCode from "./copy-code";
import { readComponentSource, readComponentPath } from "@/utils/read-component";
import ExternalLink from "@/components/_components/external-link";
import Image from "next/image";

interface CodePreviewProps {
  imageUrl?: string;
  sourcePath: string;
  imageHref?: string;
  copyButton?: boolean;
  packageSource?: string;
  componentName: string;
  imagePreview?: boolean;
  minimumCodeHeight?: string;
  codeBlockMaximumHeight?: string;

  github?: boolean;
  githubUrl?: string;
  githubName?: string;
  target?: boolean;
}

const CodePreview = async ({
  sourcePath,
  componentName,
  copyButton = false,
  minimumCodeHeight,
  imagePreview = false,
  imageHref = "/",
  codeBlockMaximumHeight = "500px",
  packageSource = "npx default code",
  imageUrl = "/assets/blocks/hero-02.png",

  github = false,
  githubUrl = "/",
  githubName,

  target = true,
}: CodePreviewProps) => {
  if (!sourcePath || !componentName) {
    return (
      <div>
        No Source Path {sourcePath} and Component Name Defined{componentName}
      </div>
    );
  }

  const resolvedPath = `registry/${sourcePath}`;

  const Component = await readComponentPath(sourcePath!, componentName!);
  const sourceCode = await readComponentSource(resolvedPath, componentName!);

  const capitalizeComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const cardComponentName = capitalizeComponentName.split("-").join(" ");

  return (
    <Tabs defaultValue="preview">
      <Card className={"overflow-hidden"}>
        <CardHeader className="p-0 pr-2 space-y-0 flex-row items-center justify-between bg-fd-accent ">
          <TabsList className="pb-0 h-10 rounded-md bg-hidden">
            <TabsTrigger
              value="preview"
              className="relative rounded-t-sm px-2 py-0 data-[state=active]:text-chai data-[state=active]:shadow-none data-[state=active]:bg-hidden hover:cursor-pointer before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[4px] before:bg-chai before:rounded-t-lg data-[state=active]:before:scale-x-100 before:scale-x-0 before:transition-transform before:duration-300"
            >
              Preview
            </TabsTrigger>
            {!github && (
              <TabsTrigger
                value="code"
                className="relative rounded-t-sm px-2 py-0 data-[state=active]:text-chai data-[state=active]:shadow-none data-[state=active]:bg-hidden hover:cursor-pointer before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[4px] before:bg-chai before:rounded-t-lg data-[state=active]:before:scale-x-100 before:scale-x-0 before:transition-transform before:duration-300"
              >
                Code
              </TabsTrigger>
            )}
          </TabsList>

          <CardTitle
            className={`text-base font-heading 
              ${copyButton ? "ml-0" : "-ml-20"}
              ${github && "ml-14"}
            `}
          >
            {github ? githubName : cardComponentName}
          </CardTitle>
          <div className="flex items-center justify-center gap-x-3">
            {imagePreview && <ExternalLink href={imageHref} text="Preview" />}
            {copyButton && <CopyCode packageCode={packageSource!} />}
            {github && (
              <ExternalLink
                target={target}
                href={githubUrl}
                text="Source Code"
              />
            )}
            {!copyButton && (
              <CopyButton
                componentSource={sourceCode!}
                className={`${github ? "hidden" : ""}`}
              />
            )}
          </div>
        </CardHeader>

        <Separator className="bg-fd-border" />

        <CardContent className="p-0">
          <TabsContent
            value="preview"
            className="p-0 mt-0 relative flex items-center justify-center"
            style={{
              minHeight: minimumCodeHeight,
              // maxHeight: codeBlockMaximumHeight,
            }}
          >
            {imagePreview ? (
              <Image
                src={imageUrl}
                height={1000}
                width={1000}
                className="object-contain w-full h-full object-center code-img"
                alt="no image"
                loading="lazy"
              />
            ) : (
              <>
                <DotPattern
                  className={cn(
                    "absolute backdrop-blur-[1.5px] [mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
                  )}
                  height={20}
                  width={20}
                />

                <div
                  className={
                    "w-full bg-slate-100 dark:bg-transparent dark:border-gray-800/10 flex items-center justify-center p-10 backdrop-blur-[1.5px]"
                  }
                  style={{ minHeight: minimumCodeHeight }}
                >
                  <Component />
                </div>
              </>
            )}
          </TabsContent>

          {!github && (
            <TabsContent value="code" className="p-0 mt-0">
              <CodeBlock
                minimumCodeHeight={minimumCodeHeight}
                code={sourceCode!}
                maximumHeight={codeBlockMaximumHeight}
                language="javascript"
                copyButton={copyButton}
              />
            </TabsContent>
          )}
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default CodePreview;

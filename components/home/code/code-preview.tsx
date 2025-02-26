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

interface CodePreviewProps {
  sourcePath: string;
  copyButton?: boolean;
  packageSource?: string;
  componentName: string;
  codeBlockMaximumHeight?: string;
  minimumCodeHeight?: string;
}

const CodePreview = async ({
  sourcePath,
  componentName,
  minimumCodeHeight = "500px",
  copyButton = false,
  codeBlockMaximumHeight = "500px",
  packageSource = "npx default code",
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
            <TabsTrigger
              value="code"
              className="relative rounded-t-sm px-2 py-0 data-[state=active]:text-chai data-[state=active]:shadow-none data-[state=active]:bg-hidden hover:cursor-pointer before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[4px] before:bg-chai before:rounded-t-lg data-[state=active]:before:scale-x-100 before:scale-x-0 before:transition-transform before:duration-300"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <CardTitle
            className={`text-base font-heading ${
              copyButton ? "ml-20" : "-ml-20"
            }`}
          >
            {cardComponentName}
          </CardTitle>
          <div className="flex items-center justify-center gap-x-2">
            {copyButton && <CopyCode packageCode={packageSource!} />}
            <CopyButton componentSource={sourceCode!} />
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
            <DotPattern
              className={cn(
                "absolute [mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
              )}
              height={20}
              width={20}
            />
            <div
              className="w-full backdrop-blur-[1.5px] bg-slate-100 dark:bg-transparent dark:border-gray-800/10 flex items-center justify-center p-10"
              style={{ minHeight: minimumCodeHeight }}
            >
              <Component />
            </div>
          </TabsContent>

          <TabsContent value="code" className="p-0 mt-0">
            <CodeBlock
              minimumCodeHeight={minimumCodeHeight}
              code={sourceCode!}
              maximumHeight={codeBlockMaximumHeight}
              language="javascript"
            />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default CodePreview;

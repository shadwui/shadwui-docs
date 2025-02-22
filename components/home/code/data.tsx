import React from "react";
import CodeBlock from "./CodeBlock";
import CopyButton from "./CopyButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/components/card";
import { cn } from "@/registry/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/tab";
import { DotPattern } from "@/registry/components/dot-pattern";
import { Separator } from "@radix-ui/react-separator";
import CopyCode from "./copy-code";

interface DataProps {
  sourcePath?: string;
  copyButton?: boolean;
  packageSource?: string;
  componentName?: string;
  codeBlockMaximumHeight?: string;
}

const Data = async ({
  sourcePath,
  componentName,
  copyButton = false,
  codeBlockMaximumHeight,
  packageSource = "npx default code",
}: DataProps) => {
  // const Component = await readComponentPath(sourcePath, componentName);
  // const source = await readComponentSource(sourcePath, componentName);
  
    // const capitalizeComponentName =
    //   componentName.charAt(0).toUpperCase() + componentName.slice(1);
    // const cardComponentName = capitalizeComponentName.split("-").join(" ");

  const source = "<div>Hello </div> ";

  const cardComponentName = "Login 01";

  return (
    <Tabs defaultValue="preview">
      <Card className="overflow-hidden">
        <CardHeader className="p-0 pr-2 space-y-0 flex-row items-center justify-between bg-fd-accent ">
          <TabsList className="pb-0 h-10 rounded-md bg-hidden">
            <TabsTrigger
              value="preview"
              className="rounded-sm px-2 py-1.5 data-[state=active]:text-chai data-[state=active]:underline data-[state=active]:underline-offset-10 data-[state=active]:decoration-3 hover:cursor-pointer data-[state=active]:bg-hidden"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="rounded-sm px-2 py-1.5 data-[state=active]:text-chai data-[state=active]:underline data-[state=active]:underline-offset-10 data-[state=active]:decoration-3 hover:cursor-pointer data-[state=active]:bg-hidden"
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
            <CopyButton componentSource={source!} />
          </div>
        </CardHeader>

        <Separator className="bg-fd-border" />

        <CardContent className="p-0">
          <TabsContent
            value="preview"
            className="p-0 mt-0 relative flex items-center justify-center"
          >
            <DotPattern
              className={cn(
                "absolute [mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
              )}
              height={20}
              width={20}
            />
            <div className="w-full backdrop-blur-[1.5px] bg-transparent dark:bg-transparent dark:border-gray-800/10 flex items-center justify-center min-h-[250px] p-10">
              {/* <Component /> */} Hello Comp
            </div>
          </TabsContent>

          <TabsContent value="code" className="p-0 mt-0">
            <CodeBlock
              code={source!}
              maximumHeight={codeBlockMaximumHeight}
              language="javascript"
            />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default Data;

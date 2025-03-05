"use client";

import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/src/components/ui/tab";
import { Separator } from "@radix-ui/react-separator";
import { RiCodeSSlashLine } from "@remixicon/react";
import CodeBlock from "@/components/home/code/CodeBlock";
import CopyButton from "@/components/home/code/CopyButton";
import ColorWheel from "./color-wheel";
import WomanLaptopSitting from "@/registry/src/illustration/general/woman-laptop-sitting";

interface SvgBoxProps {
  sourcePath?: string;
  copyButton?: boolean;
  minimumCodeHeight?: string;
  codeBlockMaximumHeight?: string;
}

const initialSvgCode = `<svg className="w-auto max-w-[20rem]" aria-hidden="true" width="608" height="495" viewBox="0 0 608 495" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Paste the full SVG code here, replacing #1F2A37 with {{COLOR}} -->
  <path fill-rule="evenodd" clip-rule="evenodd" d="M583.698..." fill="{{COLOR}}"/>
  <!-- ... other paths -->
</svg>`;

export const SvgBox = ({
  copyButton = false,
  minimumCodeHeight = "500px",
  codeBlockMaximumHeight = "500px",
}: SvgBoxProps) => {
  const [selectedColor, setSelectedColor] = useState("#1F2A37");
  const [sourceCode, setSourceCode] = useState(initialSvgCode);

  useEffect(() => {
    const updatedCode = initialSvgCode.replace(/\{\{COLOR\}\}/g, selectedColor);
    setSourceCode(updatedCode);
  }, [selectedColor]);

  return (
    <Tabs defaultValue="preview">
      <Card className={"overflow-hidden"}>
        <CardHeader className="p-0 pr-2 space-y-0 flex-row items-center justify-between bg-fd-accent ">
          <TabsList className="pb-0 h-10 rounded-md bg-hidden">
            <TabsTrigger
              value="preview"
              className="relative rounded-t-sm px-2 py-0 data-[state=active]:text-chai data-[state=active]:shadow-none data-[state=active]:bg-hidden hover:cursor-pointer before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[4px] before:bg-chai before:rounded-t-lg data-[state=active]:before:scale-x-100 before:scale-x-0 before:transition-transform before:duration-300"
            >
              Svg
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative rounded-t-sm px-2 py-0 data-[state=active]:text-chai data-[state=active]:shadow-none data-[state=active]:bg-hidden hover:cursor-pointer before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[4px] before:bg-chai before:rounded-t-lg data-[state=active]:before:scale-x-100 before:scale-x-0 before:transition-transform before:duration-300"
            >
              <span className="md:hidden">
                <RiCodeSSlashLine />
              </span>
              <span className="hidden md:block">Code</span>
            </TabsTrigger>
          </TabsList>

          <CardTitle
            className={`text-base font-heading line-clamp-1 
           
          `}
          >
            Illustration svg name
          </CardTitle>
          <div className="flex items-center justify-center gap-x-3">
            <ColorWheel
              color={selectedColor}
              onColorChange={setSelectedColor}
            />
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
            }}
          >
            <div
              className={
                "w-full bg-slate-100 dark:bg-transparent dark:border-gray-800/10 flex items-center justify-center p-10 backdrop-blur-[1.5px]"
              }
              style={{ minHeight: minimumCodeHeight }}
            >
              <WomanLaptopSitting color={selectedColor} />
            </div>
          </TabsContent>
          <TabsContent value="code" className="p-0 mt-0">
            <CodeBlock
              minimumCodeHeight={minimumCodeHeight}
              code={sourceCode!}
              maximumHeight={codeBlockMaximumHeight}
              language="javascript"
              copyButton={copyButton}
            />
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
};
//  Enables client-side rendering for this component

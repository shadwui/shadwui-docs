"use client";

import * as React from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/src/components/ui/collapsible";
import { cn } from "@/registry/src/lib/utils";
 
interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-48")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>

        <div
          className={cn(
            "absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 overflow-hidden bottom-0 left-0 w-full ",
            isOpened ? "inset-x-0 bottom-6 left-0 h-12 rounded-b-lg" : ""
          )}
        >
          <CollapsibleTrigger className="" asChild>
            <div className="py-3 text-base hover:cursor-pointer">
              {isOpened ? "Collapse" : expandButtonTitle}
            </div>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}

import { cn } from "@/registry/src/lib/utils";
import React from "react";

const BetaBanner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "text-center py-0.5 text-xs border border-chai bg-chai-light/30 rounded-xl px-2 text-chai-light select-none line-clamp-1",
        className
      )}
    >
      🚀 Beta mode be careful of the bugs
    </div>
  );
};

export default BetaBanner;

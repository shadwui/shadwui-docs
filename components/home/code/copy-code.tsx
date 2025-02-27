"use client";

import { Input } from "@/registry/src/components/ui/input";
import CopyButton from "./CopyButton";
import { useRef } from "react";

export default function CopyCode({ packageCode }: { packageCode: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        className="pe-9 focus:outline-none focus-visible:ring-[0px] focus-visible:border-ring-hidden w-40 bg-fd-border border-fd-muted"
        type="text"
        defaultValue={packageCode}
        readOnly
      />
      <CopyButton className="absolute" componentSource={packageCode} />
    </div>
  );
}

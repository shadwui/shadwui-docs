// Dependencies: npm install lucide-react

import { Button } from "@/registry/src/components/ui/button"; 
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ButtonDemo() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <Image
        className="rounded-full"
        src={"/avatars/profile-female-1.avif"}
        alt="Profile image"
        width={40}
        height={40}
        aria-hidden="true"
      />
      <ChevronDown size={16} strokeWidth={2} className="ms-2 opacity-60" aria-hidden="true" />
    </Button>
  );
}

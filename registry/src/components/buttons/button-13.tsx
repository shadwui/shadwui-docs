// Dependencies: npm install lucide-react

import { Button } from "@/registry/src/components/ui/button";
import { LoaderCircle } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button disabled>
      <LoaderCircle
        className="-ms-1 me-2 animate-spin"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}

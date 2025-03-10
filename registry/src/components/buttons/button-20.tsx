// Dependencies: npm install lucide-react

import { Button } from "@/registry/src/components/ui/button";
import { Plus } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button className="rounded-full" variant="outline" size="icon" aria-label="Add new item">
      <Plus size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}

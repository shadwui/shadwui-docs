"use client";

import { Label } from "@/registry/src/components/ui/label";
import { Slider } from "@/registry/src/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="space-y-4">
      <Label>Slider with multiple thumbs</Label>
      <Slider
        defaultValue={[25, 50, 100]}
        aria-label="Slider with multiple thumbs"
      />
    </div>
  );
}

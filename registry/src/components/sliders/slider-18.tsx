"use client";

import { Label } from "@/registry/src/components/ui/label";
import { Slider } from "@/registry/src/components/ui/slider";
import { useState } from "react";

export default function SliderDemo() {
  const [value, setValue] = useState([3]);

  const emojis = ["😡", "🙁", "😐", "🙂", "😍"];

  return (
    <div className="space-y-3">
      <Label>Rate your experience</Label>
      <div className="flex items-center gap-2">
        <Slider
          value={value}
          onValueChange={setValue}
          min={1}
          max={5}
          aria-label="Rate your experience"
        />
        <span className="text-2xl">{emojis[value[0] - 1]}</span>
      </div>
    </div>
  );
}

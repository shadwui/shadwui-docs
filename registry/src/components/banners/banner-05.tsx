"use client";

import { Card, CardContent } from "@/registry/src/components/ui/card";
import { Button } from "@/registry/src/components/ui/button";
import { Eclipse, X } from "lucide-react";
import { useState } from "react";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="py-4 w-96">
      <CardContent className="py-0 flex">
        <div className="flex grow gap-2  ">
          <Eclipse
            className="shrink-0 opacity-60 mt-1"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="space-y-2">
            <h5>
              It&lsquo;s live and ready to use! Start exploring the latest
              addition to your toolkit.
            </h5>
            <div className="flex gap-2 max-md:flex-wrap">
              <Button size="sm" className="text-sm">
                Download
              </Button>
              <Button variant="outline" size="sm" className="text-sm">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent } from "@/registry/src/components/ui/card";
import { Button } from "@/registry/src/components/ui/button";
import { ArrowRight, Eclipse, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="py-4 w-96">
      <CardContent className="py-0 flex">
        <div className="flex grow gap-2">
          <Eclipse
            className="mt-1 shrink-0 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div>
            <h5>We just added some thing to make your experience even better.</h5>
            <Link
              href="#"
              className="group whitespace-nowrap text-sm font-medium"
            >
              Learn more
              <ArrowRight
                className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
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

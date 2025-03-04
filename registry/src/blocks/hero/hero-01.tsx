import React from "react";
import { Heading } from "@/registry/src/components/ui/heading";
import { Button } from "@/registry/src/components/ui/button";
import { Badge } from "@/registry/src/components/ui/badge";
import { Description } from "@/registry/src/components/ui/description";

const Hero_01 = () => {
  return (
    <section className="text-center space-y-7 py-14">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white/50 rounded-full px-2.5 py-1 border border-white w-fit text-xs">
          <Badge>New</Badge> 🚀 Shadwui launch today...
        </div>
      </div>
      <div className="space-y-3">
        <Heading variant="h1">We invest in the world’s potential</Heading>
        <div className="flex items-center justify-center">
          <Description
            variant="p"
            className="text-fd-muted-foreground text-xl leading-0.5 max-w-4xl"
          >
            Here at shadwui we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Description>
        </div>
      </div>
      <div className="space-x-4">
        <Button>Get started</Button>
        <Button variant="outline">Learn more</Button>
      </div>
      <div className="flex gap-6 items-center justify-center mt-6">
        <div className="text-4xl">Image 1</div>
        <div className="text-4xl">Image 2</div>
        <div className="text-4xl">Image 3</div>
        <div className="text-4xl">Image 4</div>
        <div className="text-4xl">Image 5</div>
      </div>
    </section>
  );
};

export default Hero_01;

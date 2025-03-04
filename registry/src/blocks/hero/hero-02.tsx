import React from "react";
import { Heading } from "@/registry/src/components/ui/heading";
import { Button } from "@/registry/src/components/ui/button";
import { Badge } from "@/registry/src/components/ui/badge";
import { Description } from "@/registry/src/components/ui/description";
import Image from "next/image";

const Hero_02 = () => {
  return (
    <section className="grid md:grid-cols-2 gap-x-4 items-center py-10">
      <div className="space-y-7">
        <div>
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
              Here at shadwui we focus on markets where technology, innovation.
            </Description>
          </div>
        </div>
        <div className="space-x-4">
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={"/thumbs/placeholder.avif"}
          alt="mockup"
          width={100}
          height={100}
          className="w-96 h-96"
        />
      </div>
    </section>
  );
};

export default Hero_02;

import Hero_01 from "@/registry/src/blocks/hero/hero-01";
import Hero_02 from "@/registry/src/blocks/hero/hero-02";
import TheamBorder from "@/registry/src/premium/components/theam-border";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Title title="Hero 01" />
      <TheamBorder />
      <Hero_01 />
      <TheamBorder />
      <Title title="Hero 02" />
      <TheamBorder />
      <Hero_02 />
    </div>
  );
};

export default Hero;

const Title = ({ title }: { title: string }) => {
  return (
    <div className="py-2 text-chai-light text-center text-2xl font-heading font-semibold">
      {title}
    </div>
  );
};

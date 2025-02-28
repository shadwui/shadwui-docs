import CustomButton from "@/components/_components/custom-button";
import { AnimatedAvatar } from "@/registry/src/premium/components/animated-avatar";
import React from "react";

const people = [
  {
    name: "Sahil Kumar",
    image: "/owner.avif",
  },
  {
    name: "No Contributors",
    image: "/avatars/no-profile.avif",
  },
  {
    name: "No Contributors",
    image: "/avatars/no-profile.avif",
  },
];

const HeroPage = () => {
  return (
    <div className="max-w-4xl max-sm:text-center mb-10 mt-14">
      <h1 className="text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
        One click Auth & Built in React & Tailwind CSS Components
      </h1>
      <p className="text-muted-foreground mb-4 text-base">
        A collection of sleek, UI components, built using Tailwind CSS and React
        for fast and seamless app development
      </p>

      <div className="flex items-center gap-x-6">
        <CustomButton link="/docs" title={"Browse Components"} />
        <div className="flex flex-row items-center justify-center">
          <AnimatedAvatar items={people} />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

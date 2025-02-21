import CustomButton from "@/components/_components/custom-button";
import { AnimatedAvatar } from "@/registry/premium/components/animated-avatar";
import React from "react";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/logo-yt.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/logo-yt.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/logo-yt.png",
  },
];

const HeroPage = () => {
  return (
    <div className="max-w-4xl max-sm:text-center mb-10">
      <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
        One click Auth & UI Components Built in React & Tailwind CSS
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

import CustomButton from "@/components/_components/custom-button";
import { SubscribeButton } from "@/components/home/components/subscribe-button";
import PreviewPage from "@/components/home/pages/preview-page";
import React from "react";

const HomePage = () => {
  return (
    <div data-home>
      <div className="max-w-4xl max-sm:text-center">
        <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          One click Auth & UI Components Built in React & Tailwind CSS
        </h1>
        <p className="text-muted-foreground mb-4 text-lg">
          A collection of sleek, copy-and-paste UI components with one-click
          auth, built using Tailwind CSS and React for fast and seamless app
          development
        </p>
        <CustomButton />
      </div>

      <PreviewPage />
      <SubscribeButton />
    </div>
  );
};

export default HomePage;

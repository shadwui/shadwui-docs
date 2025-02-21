import { SubscribeButton } from "@/components/home/components/subscribe-button";
import TestimonialPage from "@/components/home/pages/testimonial-page";
import PreviewPage from "@/components/home/pages/preview-page";
import HeroPage from "@/components/home/pages/Hero-page";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <PreviewPage />
      <TestimonialPage />
      <SubscribeButton />
    </div>
  );
};

export default HomePage;

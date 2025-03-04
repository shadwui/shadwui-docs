import { InfiniteMovingCards } from "@/registry/src/premium/components/infinite-moving-card";
import TheamBorder from "@/registry/src/premium/components/theam-border";
import { getRandomTestimonials } from "@/utils/testimonials";
import React from "react";

const TestimonialPage = () => {
  const shuffledTestimonials_one = getRandomTestimonials();
  const shuffledTestimonials_two = getRandomTestimonials();
  const shuffledTestimonials_three = getRandomTestimonials();

  return (
    <>
      <TheamBorder />

      <div className="mt-20 mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-semibold font-heading">
            Loved by thousands of people
          </h1>
          <p className="leading-8">
            Here&apos;s what some of our users have to say about Shadw UI
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 overflow-hidden sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <InfiniteMovingCards
            items={shuffledTestimonials_one}
            onMobile={true}
          />
          <InfiniteMovingCards
            items={shuffledTestimonials_two}
            direction="down"
            speed="fast"
          />
          <InfiniteMovingCards
            items={shuffledTestimonials_three}
            onMobile={true}
          />
        </div>
      </div>

      <TheamBorder />
    </>
  );
};

export default TestimonialPage;

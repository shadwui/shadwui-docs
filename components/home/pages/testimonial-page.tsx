import { InfiniteMovingCards } from "@/registry/premium/components/infinite-moving-card";
import TheamBorder from "@/registry/premium/components/theam-border";
import React from "react";
const socialTestimonials = [
  {
    name: "Sarah Thompson",
    username: "@TechGuruSarah",
    image: "/avatars/male.png",
    socialMedia: "youtube",
    description:
      "Just hit 10K followers using this platform&apos;s analytics tools 🚀 The audience insights helped me double my engagement rate in 3 weeks! #GameChanger",
  },
  {
    name: "Priya K.",
    username: "@CodeWithPriya",
    image: "/avatars/profile-female-3.png",
    socialMedia: "linkedin",
    description:
      "Collaboration features helped me partner with 15+ developers worldwide 🌍 Finally a platform that understands tech creators&apos; needs!",
  },
  {
    name: "Michael Chen",
    username: "@DesignMike_",
    image: "/owner.jpg",
    socialMedia: "x",
    description:
      "From 500 to 50K followers in 6 months! The content scheduler is a lifesaver for managing multiple client accounts. Best investment I&apos;ve made 💯",
  },
  {
    name: "Emily R.",
    username: "@HealthNutEmily",
    image: "/avatars/profile-female-1.png",
    socialMedia: "linkedin",
    description:
      "The community features helped me connect with 200+ wellness creators. Finally found a platform that actually supports growth, not just vanity metrics 🌱",
  },
  {
    name: "James O&apos;kumar",
    username: "@TravelWithJames",
    image: "/avatars/profile-female-2.png",
    socialMedia: "instagram",
    description:
      "Went viral TWICE this month using the trend prediction tools 📈 1M+ views on my latest travel reel! Never going back to manual posting.",
  },
  {
    name: "Alex Dubois",
    username: "@FoodieAlex95",
    socialMedia: "instagram",
    image: "/avatars/profile-female-4.png",
    description:
      "500K foodies in my network and counting! The recipe video builder boosted my content quality 10x 🍳 Don&apos;t sleep on this platform!",
  },
];
const TestimonialPage = () => {
  return (
    <>
      <TheamBorder />

      <div className="mt-20 mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-semibold font-heading">
            Loved by thousands of people
          </h1>
          <p className="leading-8">
            Here's what some of our users have to say about Shadw UI
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 overflow-hidden sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <InfiniteMovingCards items={socialTestimonials} />
          <InfiniteMovingCards
            items={socialTestimonials}
            direction="down"
            speed="fast"
          />
          <InfiniteMovingCards items={socialTestimonials} />
        </div>
      </div>

      <TheamBorder />
    </>
  );
};

export default TestimonialPage;

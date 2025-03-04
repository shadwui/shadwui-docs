"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/src/components/ui/card";
import { cn } from "@/registry/src/lib/utils";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";

export interface TestimonialProps {
  socialMedia: "linkedin" | "instagram" | "x" | "youtube";
  description: string;
  name: string;
  username: string;
  image?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "up",
  speed = "normal",
  pauseOnHover = true,
  className,
  onMobile = false,
}: {
  items: TestimonialProps[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  onMobile?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useLayoutEffect(() => {
    initializeAnimation();
  });

  function initializeAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    // Calculate required duplicates to fill viewport
    const containerHeight = containerRef.current.offsetHeight;
    const scrollerHeight = scrollerRef.current.scrollHeight;
    const requiredDuplicates = Math.ceil(containerHeight / scrollerHeight) * 2;

    // Clear existing duplicates
    while (scrollerRef.current.children.length > items.length) {
      scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
    }

    // Add new duplicates
    const originalItems = Array.from(scrollerRef.current.children);
    for (let i = 0; i < requiredDuplicates; i++) {
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });
    }

    setAnimationProperties();
    setStart(true);
  }

  function setAnimationProperties() {
    if (!containerRef.current || !scrollerRef.current) return;

    const totalHeight = scrollerRef.current.scrollHeight;
    containerRef.current.style.setProperty(
      "--total-height",
      `${totalHeight}px`
    );

    const durationMap = {
      fast: totalHeight / 75,
      normal: totalHeight / 50,
      slow: totalHeight / 25,
    };

    containerRef.current.style.setProperty(
      "--animation-duration",
      `${durationMap[speed]}s`
    );
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "up" ? "normal" : "reverse"
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden h-[500px]",
        "[mask-image:linear-gradient(to_bottom,transparent_2%,white_15%,white_85%,transparent_98%)]",
        onMobile ? "h-0 md:h-[500px]" : "",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "gap-8",
          onMobile ? "hidden md:flex md:flex-col" : "flex flex-col",
          start && "animate-scroll-infinite",
          pauseOnHover && "hover:[animation-play-state:paused]",
          // className
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <Card className="w-full dark:bg-[#18181B] bg-gray-100 px-5 py-4 dark:shadow-lg">
              <CardHeader className="flex-row justify-between p-0 space-y-0">
                <div className="flex items-center gap-x-3">
                  <Image
                    height={100}
                    width={100}
                    src={item.image || "/owner.avif"}
                    alt={item.name}
                    className="w-10 h-10 rounded-full border-2 object-cover border-fd-accent"
                  />

                  <div>
                    <h4 className="text-lg font-medium leading-5 font-heading">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 line-clamp-1 text-sm text-left">
                      {item.username}
                    </p>
                  </div>
                </div>
                <Image
                  height={100}
                  width={100}
                  src={
                    `/social/${item.socialMedia}.svg` || "/social/linkedin.svg"
                  }
                  alt={item.name}
                  className="w-6 h-6 rounded-full"
                />
              </CardHeader>

              <CardContent className="p-0 pt-4">
                <p>{`${item.description}`}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

import Image from "next/image";
import React from "react";

export const AnimatedAvatar = ({
  items,
}: {
  items: {
    name: string;
    image: string;
  }[];
}) => {
  return (
    <>
      {items.map((item, idx) => (
        <div className="-mr-3 relative group" key={idx}>
          <Image
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover object-top rounded-full size-9 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500 hover:scale-110 grayscale-50 hover:grayscale-0"
          />
        </div>
      ))}
    </>
  );
};

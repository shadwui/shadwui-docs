import Image from "next/image";
import React from "react";

export const AnimatedAvatar = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  return (
    <>
      {items.map((item) => (
        <div className="-mr-2 relative group" key={item.name}>
          <Image
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full size-9 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500 hover:cursor-pointer hover:scale-110"
          />
        </div>
      ))}
    </>
  );
};

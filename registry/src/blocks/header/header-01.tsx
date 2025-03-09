import Link from "next/link";
import React from "react";
import { Button } from "@/registry/src/components/ui/button";

const navItem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Header_01 = () => {
  return (
    <header className="flex justify-between items-center w-full border-b-[0.5px] border-b-muted-foreground py-3 pl-2 shadow-xs">
      <Link href="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Shadwui
        </span>
      </Link>

      <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
        <ul className="flex items-center justify-center gap-x-2">
          {navItem.map((item) => (
            <li key={item.title} className="px-2.5">
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-2.5">
        <Button>Log in</Button>
        <Button variant={"ghost"}>Get started</Button>
      </div>
    </header>
  );
};

export default Header_01;

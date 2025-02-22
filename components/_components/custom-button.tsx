import { Button } from "@/registry/components/button";
import Link from "next/link";
import React from "react";

const CustomButton = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link}>
      <Button className="hover:cursor-pointer">{title}</Button>
    </Link>
  );
};

export default CustomButton;

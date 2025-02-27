import { Card, CardContent } from "@/registry/src/components/ui/card";
import { RiNextjsFill, RiReactjsFill, RiReactjsLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";

interface TabsProps {
  href: string;
  title: string;
  idx: number;
  icon: React.ReactNode;
}

const items: TabsProps[] = [
  {
    href: "/docs/installation/nextjs",
    title: "Nextjs",
    idx: 0,
    icon: <RiNextjsFill size={55} />,
  },
  {
    href: "/docs/installation/react",
    title: "React",
    icon: <RiReactjsFill size={55} />,
    idx: 1,
  },
  {
    href: "/docs/installation/manual",
    title: "Manual",
    icon: <RiReactjsLine size={55} />,
    idx: 2,
  },
];

const Tabs = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-8">
      {items.map((item) => (
        <Link href={item.href} key={item.idx} className="no-underline">
          <Card className="hover:bg-fd-border">
            <CardContent className="flex flex-col text-center items-center justify-center text-xl text-bold font-heading py-12 gap-x-2">
              {item.icon}
              {item.title}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;

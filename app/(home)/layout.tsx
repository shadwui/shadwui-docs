import type { ReactNode } from "react";
// import { HomeLayout } from "fumadocs-ui/layouts/home";
// import { baseOptions } from "@/app/layout.config";
import LayoutDesign from "@/components/_components/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutDesign>{children}</LayoutDesign>;
}

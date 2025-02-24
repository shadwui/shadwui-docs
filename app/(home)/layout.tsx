import type { ReactNode } from "react";
import LayoutDesign from "@/components/_components/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutDesign>{children}</LayoutDesign>;
}

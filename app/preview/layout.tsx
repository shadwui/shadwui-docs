import PreviewLayoutDesign from "@/components/preview/layout";
import { ReactNode } from "react";

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return <PreviewLayoutDesign>{children}</PreviewLayoutDesign>;
}

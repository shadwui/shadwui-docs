import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import Header from "@/components/home/components/header";
import "../../styles/docs.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      nav={{
        component: (
          <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}

import LayoutDesign from "@/components/_components/layout";
import { Button } from "@/registry/src/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <LayoutDesign>
      <div className="min-h-[490px] flex flex-col items-center justify-center">
        <div className="mb-4 text-center">
          <h1 className="font-heading text-foreground text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1] mb-3">
            404
          </h1>
          <p className="text-muted-foreground text-lg">
            The page you&apos;re looking for does not exist or is no longer
            here.
          </p>
        </div>
        <div className="text-center">
          <Button asChild className="rounded-full">
            <Link href="/docs/components">Browse components</Link>
          </Button>
        </div>
      </div>
    </LayoutDesign>
  );
}

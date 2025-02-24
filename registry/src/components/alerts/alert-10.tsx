import { ArrowRight, TriangleAlert } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg bg-amber-400 bg-opacity-20 px-4 text-amber-700 dark:bg-opacity-10 dark:text-amber-600">
      <div className="flex gap-3 items-center">
        <TriangleAlert
          className="shrink-0 opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <div className="flex grow items-center justify-between gap-3">
          <p className="text-sm">Some information is missing!</p>
          <a href="#" className="group whitespace-nowrap text-sm font-medium">
            Link
            <ArrowRight
              className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

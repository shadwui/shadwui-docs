import { TriangleAlert } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg bg-amber-300 bg-opacity-20 px-4 text-amber-800 dark:bg-opacity-10 dark:text-amber-700">
      <p className="text-sm">
        <TriangleAlert
          className="-mt-0.5 me-3 inline-flex opacity-60 dark:opacity-100"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}

import { CircleCheck } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="border-border rounded-lg border px-4">
      <p className="text-sm">
        <CircleCheck
          className="-mt-0.5 me-3 inline-flex text-emerald-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Completed successfully!
      </p>
    </div>
  );
}

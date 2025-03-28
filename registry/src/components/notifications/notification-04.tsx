import { Button } from "@/registry/src/components/ui/button";
import { Info, X } from "lucide-react";

export default function NotificationDemo() {
  return (
    <div className="z-[100] max-w-[400px] rounded-lg border border-border bg-background px-4 py-3 shadow-lg shadow-black/5">
      <div className="flex gap-2">
        <p className="grow text-sm">
          <Info
            className="-mt-0.5 me-3 inline-flex text-blue-500"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Just a quick note!
        </p>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}

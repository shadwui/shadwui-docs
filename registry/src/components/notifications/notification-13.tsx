import { Button } from "@/components/ui/button";
import { CircleCheck, X } from "lucide-react";

export default function NotificationDemo() {
  return (
    <div className="z-[100] max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5">
      <div className="flex gap-2">
        <div className="flex gap-3 mt-0">
          <CircleCheck
            className="mt-0.5 shrink-0 text-emerald-500"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="grow gap-3">
            <div className="space-y-1  w-fit " >
              <p className="text-sm leading-0 font-medium">Your request was completed!</p>
              <p className="text-sm text-muted-foreground">
                It demonstrates that the task or request has been processed.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Learn more</Button>
            </div>
          </div>
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
    </div>
  );
}

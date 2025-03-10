import { Label } from "@/registry/src/components/ui/label";
import { Textarea } from "@/registry/src/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-07">Textarea with gray background</Label>
      <Textarea
        id="textarea-07"
        className="border-transparent bg-muted shadow-none"
        placeholder="Leave a comment"
      />
    </div>
  );
}

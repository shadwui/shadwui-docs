import { Label } from "@/registry/src/components/ui/label";
import { Textarea } from "@/registry/src/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-09">Disabled textarea</Label>
      <Textarea id="textarea-09" disabled placeholder="Leave a comment" />
    </div>
  );
}

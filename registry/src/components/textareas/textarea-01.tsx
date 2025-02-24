import { Label } from "@/registry/src/components/ui/label";
import { Textarea } from "@/registry/src/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-01">Simple textarea</Label>
      <Textarea id="textarea-01" placeholder="Leave a comment" />
    </div>
  );
}

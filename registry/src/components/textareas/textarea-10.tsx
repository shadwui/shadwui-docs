import { Button } from "@/registry/src/components/ui/button";
import { Label } from "@/registry/src/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-10">Textarea with left button</Label>
      <Textarea id="textarea-10" placeholder="Leave a comment" />
      <Button variant="outline">Send</Button>
    </div>
  );
}

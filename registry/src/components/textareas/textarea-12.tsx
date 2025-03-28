import { Button } from "@/registry/src/components/ui/button";
import { Label } from "@/registry/src/components/ui/label";
import { Textarea } from "@/registry/src/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-12">Textarea with button</Label>
      <Textarea id="textarea-12" placeholder="Leave a comment" />
      <Button variant="outline" className="w-full">
        Send
      </Button>
    </div>
  );
}

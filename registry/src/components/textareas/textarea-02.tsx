import { Label } from "@/registry/src/components/ui/label";
import { Textarea } from "@/registry/src/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-02">
        Required textarea <span className="text-destructive">*</span>
      </Label>
      <Textarea id="textarea-02" placeholder="Leave a message" required />
    </div>
  );
}

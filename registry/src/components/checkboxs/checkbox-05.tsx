import { Checkbox } from "@/registry/src/components/ui/checkbox";
import { Label } from "@/registry/src/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-05" defaultChecked />
      <Label htmlFor="checkbox-05" className="peer-data-[state=checked]:line-through">
        Simple todo item
      </Label>
    </div>
  );
}

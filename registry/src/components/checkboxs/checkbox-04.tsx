import { Checkbox } from "@/registry/src/components/ui/checkbox";
import { Label } from "@/registry/src/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-04" disabled />
      <Label htmlFor="checkbox-04">Disabled checkbox</Label>
    </div>
  );
}

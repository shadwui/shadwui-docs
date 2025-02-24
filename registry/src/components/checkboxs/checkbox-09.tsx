import { Checkbox } from "@/registry/src/components/ui/checkbox";
import { Label } from "@/registry/src/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center justify-between gap-2">
      <Checkbox id="checkbox-09" className="order-1" />
      <Label htmlFor="checkbox-09">Right aligned checkbox</Label>
    </div>
  );
}

import { Checkbox } from "@/registry/src/components/ui/checkbox";
import { Label } from "@/registry/src/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-07" />
      <Label htmlFor="checkbox-07">
        I agree to the{" "}
        <a className="underline" href="#" target="_blank">
          terms of service
        </a>
      </Label>
    </div>
  );
}

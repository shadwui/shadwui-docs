import { Checkbox } from "@/registry/src/components/ui/checkbox";
import { Label } from "@/registry/src/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-start gap-2">
      <Checkbox id="checkbox-10" aria-describedby="checkbox-10-description" />
      <div className="grid grow gap-2">
        <Label htmlFor="checkbox-10">
          Label{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <h5 id="checkbox-08-description" className="text-xs text-muted-foreground">
          You can use this checkbox with a label and a description.
        </h5>
      </div>
    </div>
  );
}

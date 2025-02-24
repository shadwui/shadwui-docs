import { Label } from "@/registry/src/components/ui/label";
import { Slider } from "@/registry/src/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="space-y-4">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25]} aria-label="Simple slider" />
    </div>
  );
}

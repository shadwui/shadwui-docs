import { Label } from "@/registry/src/components/ui/label";
import { Slider } from "@/registry/src/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="space-y-4">
      <Label>Slider with square thumb</Label>
      <Slider
        defaultValue={[25]}
        max={100}
        step={10}
        className="[&>:last-child>span]:rounded"
        aria-label="Slider with square thumb"
      />
    </div>
  );
}

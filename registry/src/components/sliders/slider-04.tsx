import { Label } from "@/registry/src/components/ui/label";
import { Slider } from "@/registry/src/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="space-y-4">
      <Label>Slider with solid thumb</Label>
      <Slider
        defaultValue={[25]}
        className="[&>:first-child>span]:opacity-70 [&>:last-child>span]:bg-primary"
        aria-label="Slider with solid thumb"
      />
    </div>
  );
}

import { Button } from "@/registry/src/components/ui/button";
import { Card, CardContent } from "@/registry/src/components/ui/card";

export default function ButtonDemo() {
  return (
    <Card>
      <CardContent className="py-6">
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </CardContent>
    </Card>
  );
}

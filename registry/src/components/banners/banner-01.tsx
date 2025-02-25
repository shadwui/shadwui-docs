import { Card, CardContent } from "@/registry/src/components/ui/card";
import { ArrowRight } from "lucide-react"; 

export default function BannerDemo() {
  return (
    <Card className="py-4 flex items-center justify-center">
      <CardContent className="flex items-center gap-2 py-0">
        <h5>
          ✨ Introducing transactional marketing email templates.
        </h5>
        <ArrowRight
          className="inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
          size={18}
          strokeWidth={2}
          aria-hidden="true"
        />
      </CardContent>
    </Card>
  );
}

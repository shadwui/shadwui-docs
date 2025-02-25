import { Card, CardContent } from "@/registry/src/components/ui/card";
import Link from "next/link";

export default function BannerDemo() {
  return (
    <Card className="py-4 w-96">
      <CardContent className="py-0">
        <h5>
          Get the most out of your app with real-time updates and analytics.
        </h5>

        <Link href="#" className="font-medium underline hover:no-underline">
          Upgrade
        </Link>
      </CardContent>
    </Card>
  );
}

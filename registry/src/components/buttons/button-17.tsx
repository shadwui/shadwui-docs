import { Button } from "@/registry/src/components/ui/button";
import Image from "next/image";

export default function ButtonDemo() {
  return (
    <Button className="rounded-full py-0 ps-0">
      <div className="me-0.5 flex aspect-square h-full p-1.5">
        <Image
          className="h-auto w-full rounded-full"
          src={"/avatars/profile-female-1.avif"}
          alt="Profile image"
          width={24}
          height={24}
          aria-hidden="true"
        />
      </div>
      @georgelucas
    </Button>
  );
}

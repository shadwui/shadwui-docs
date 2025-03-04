import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/src/components/ui/select";
import Image from "next/image";

export default function SelectDemo() {
  return (
    <Select defaultValue="s1">
      <SelectTrigger
        id="select-40"
        className="h-auto ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Choose a plan" />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
        <SelectItem value="s1">
          <span className="flex items-center gap-2">
            <Image
              className="size-10 rounded-full"
              src={"/avatars/profile-female-1.avif"}
              alt="Jenny Hamilton"
              width={40}
              height={40}
            />
            <span>
              <span className="block font-medium">Jenny Hamilton</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                @jennyCodes
              </span>
            </span>
          </span>
        </SelectItem>
        <SelectItem value="s2">
          <span className="flex items-center gap-2">
            <Image
              className="size-10 rounded-full"
              src={"/avatars/profile-female-1.avif"}
              alt="Paul Smith"
              width={40}
              height={40}
            />
            <span>
              <span className="block font-medium">Paul Smith</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                @paulSmith
              </span>
            </span>
          </span>
        </SelectItem>
        <SelectItem value="s3">
          <span className="flex items-center gap-2">
            <Image
              className="size-10 rounded-full"
              src={"/avatars/profile-female-1.avif"}
              alt="Luna Wen"
              width={40}
              height={40}
            />
            <span>
              <span className="block font-medium">Luna Wen</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                @wenLuna
              </span>
            </span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

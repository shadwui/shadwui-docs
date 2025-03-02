import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";

export default async function ExternalLink({
  text,
  href,
  target = true,
}: {
  text: string;
  href: string;
  target?: boolean;
}) {
  return (
    <Link
      className="inline-flex gap-0.5 text-sm hover:underline items-center hover:text-muted-foreground"
      href={href}
      target={target ? "_blank" : ""}
    >
      {text}
      <span className="hidden sm:inline">
        {" "}
        <RiArrowRightUpLine
          className="text-muted-foreground/80"
          size={18}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

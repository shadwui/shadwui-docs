import ExternalLink from "@/components/_components/external-link";
import ThemeToggle from "@/components/_components/theam-toggler";
import { githubUrl } from "@/utils/project-link";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 
        before:absolute 
        before:-inset-x-32
        before:bottom-0 
        before:h-px
        relative mb-14"
    >
      <div
        className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="outline-ring/30 dark:outline-ring/40 rounded-full outline-offset-2 focus-visible:outline-2"
        >
          <span className="sr-only">Shadw UI</span>
          <Image
            src={"/logo-light.svg"}
            alt="Shadw UI logo"
            width={180}
            height={100}
            className="dark:hidden"
          />
          <Image
            src={"/logo-dark.svg"}
            alt="Shadw UI logo"
            width={180}
            height={100}
            className="hidden dark:block"
          />
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <ExternalLink text="GitHub" href={githubUrl} />
          <ExternalLink text="Follow us" href={githubUrl} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

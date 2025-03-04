// import BetaBanner from "@/components/_components/beta-banner";
// import ExternalLink from "@/components/_components/external-link";
// import { Heading } from "@/registry/src/components/ui/heading";
// import ThemeToggle from "@/registry/src/default/theam-toggler";
// import { githubUrl, linkedInUrl } from "@/utils/project-link";
// import Image from "next/image";
// import Link from "next/link";

// export default function Header({ docHeader = false }: { docHeader?: boolean }) {
//   const navItems = [
//     {
//       name: "Auth",
//       href: "/authentication",
//     },
//     {
//       name: "Blocks",
//       href: "/blocks",
//     },
//     {
//       name: "Components",
//       href: "/components",
//     },
//   ];
//   return (
//     <header
//       className="
//         before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]
//         before:absolute
//         before:-inset-x-32
//         before:bottom-0
//         before:h-px
//         relative"
//     >
//       <div
//         className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
//         aria-hidden="true"
//       />

//       <div
//         className={`mx-auto flex h-[72px] w-full items-center justify-between gap-3 ${
//           docHeader ? "max-w-7xl" : "max-w-6xl"
//         }`}
//       >
//         <div className="flex items-center justify-center gap-10">
//           <Link
//             href="/"
//             aria-label="Home"
//             className="outline-ring/30 dark:outline-ring/40 rounded-full outline-offset-2 focus-visible:outline-2"
//           >
//             <span className="sr-only">Shadw UI</span>
//             <Image
//               src={"/logo-light.svg"}
//               alt="Shadw UI logo"
//               width={160}
//               height={100}
//               className="dark:hidden"
//             />
//             <Image
//               src={"/logo-dark.svg"}
//               alt="Shadw UI logo"
//               width={160}
//               height={100}
//               className="hidden dark:block"
//             />
//           </Link>

//           <div className="flex gap-4">
//             {navItems.map((item, idx) => (
//               <Link href={`/docs/${item.href}`} key={idx}>
//                 <Heading
//                   variant="h5"
//                   className="text-muted-foreground hover:text-chai-light hover:transition-all "
//                 >
//                   {item.name}
//                 </Heading>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="flex items-center gap-4 sm:gap-8">
//           <BetaBanner />
//           <ExternalLink text="GitHub" href={githubUrl} />
//           <ExternalLink text="Follow us" href={linkedInUrl} />
//           <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }

import BetaBanner from "@/components/_components/beta-banner";
import ExternalLink from "@/components/_components/external-link";
import { Heading } from "@/registry/src/components/ui/heading";
import ThemeToggle from "@/registry/src/default/theam-toggler";
import { githubUrl, linkedInUrl } from "@/utils/project-link";
import Image from "next/image";
import Link from "next/link";

export default function Header({ docHeader = false }: { docHeader?: boolean }) {
  const navItems = [
    {
      name: "Auth",
      href: "/authentication",
    },
    {
      name: "Blocks",
      href: "/blocks",
    },
    {
      name: "Components",
      href: "/components",
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 
        before:absolute 
        before:-inset-x-32
        before:bottom-0 
        before:h-px
        relative"
      >
        {/* ... existing desktop header structure ... */}
        <div
          className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
          aria-hidden="true"
        />

        <div
          className={`mx-auto flex h-[72px] w-full items-center justify-between gap-3 ${
            docHeader ? "max-w-7xl" : "max-w-6xl"
          }`}
        >
          <div className="flex items-center justify-center gap-10">
            <Link
              href="/"
              aria-label="Home"
              className="outline-ring/30 dark:outline-ring/40 rounded-full outline-offset-2 focus-visible:outline-2"
            >
              <span className="sr-only">Shadw UI</span>
              <Image
                src={"/logo-light.svg"}
                alt="Shadw UI logo"
                width={160}
                height={100}
                className="dark:hidden"
              />
              <Image
                src={"/logo-dark.svg"}
                alt="Shadw UI logo"
                width={160}
                height={100}
                className="hidden dark:block"
              />
            </Link>

            <div className="gap-4 hidden md:flex">
              {navItems.map((item, idx) => (
                <Link href={`/docs/${item.href}`} key={idx}>
                  <Heading
                    variant="h5"
                    className="text-muted-foreground hover:text-chai-light hover:transition-all"
                  >
                    {item.name}
                  </Heading>
                </Link>
              ))}
            </div>
          </div>
          <BetaBanner className="md:hidden" />
          <div className="hidden md:flex items-center gap-4 sm:gap-8">
            <BetaBanner />
            <ExternalLink text="GitHub" href={githubUrl} />
            <ExternalLink text="Follow us" href={linkedInUrl} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
        <div className="mx-auto flex h-16 items-center justify-between px-4">
          <nav className="flex gap-4 overflow-x-auto flex-1">
            {navItems.map((item) => (
              <Link
                href={`/docs/${item.href}`}
                key={item.name}
                className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap px-2 py-1 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 ml-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

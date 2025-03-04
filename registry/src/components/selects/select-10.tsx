// "use client";

// import { Check, ChevronDown } from "lucide-react";
// import { useState } from "react";

// import { Button } from "@/registry/src/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { cn } from "@/registry/src/lib/utils";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
//   {
//     value: "angular",
//     label: "Angular",
//   },
//   {
//     value: "vue",
//     label: "Vue.js",
//   },
//   {
//     value: "react",
//     label: "React",
//   },
//   {
//     value: "ember",
//     label: "Ember.js",
//   },
//   {
//     value: "gatsby",
//     label: "Gatsby",
//   },
//   {
//     value: "eleventy",
//     label: "Eleventy",
//   },
//   {
//     value: "solid",
//     label: "SolidJS",
//   },
//   {
//     value: "preact",
//     label: "Preact",
//   },
//   {
//     value: "qwik",
//     label: "Qwik",
//   },
//   {
//     value: "alpine",
//     label: "Alpine.js",
//   },
//   {
//     value: "lit",
//     label: "Lit",
//   },
// ];

// export default function SelectDemo() {
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<string>("");

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           id="select-41"
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20"
//         >
//           <span className={cn("truncate", !value && "text-muted-foreground")}>
//             {value
//               ? frameworks.find((framework) => framework.value === value)?.label
//               : "Select framework"}
//           </span>
//           <ChevronDown
//             size={16}
//             strokeWidth={2}
//             className="shrink-0 text-muted-foreground/80"
//             aria-hidden="true"
//           />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent
//         className="w-full min-w-[var(--radix-popper-anchor-width)] p-0"
//         align="start"
//       >
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue: string) => {
//                     setValue(currentValue === value ? "" : currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   {framework.label}
//                   <Check
//                     className={cn(
//                       "ml-auto",
//                       value === framework.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }


import React from 'react'

const Select = () => {
  return (
    <div>Select</div>
  )
}

export default Select
import dynamic from "next/dynamic";

// import ComponentPage from "@/components/home/code/component-page";
// import CodePreview from "@/components/home/code/code-preview";
import { Steps, Step } from "fumadocs-ui/components/steps";
import CodeBlock from "@/components/home/code/CodeBlock";
import { Tab, Tabs as DocTabs } from "fumadocs-ui/components/tabs";
import { CodeBlockWrapper } from "./CodeWrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/src/components/ui/tab";
import { Separator } from "@/registry/src/components/ui/separator";

const ComponentPage = dynamic(() => import("@/components/home/code/component-page"))
const CodePreview = dynamic(() => import("@/components/home/code/code-preview"))


export {
  Tab,
  DocTabs,
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
  Step,
  Steps,
  CodeBlock,
  Separator,
  CodePreview,
  ComponentPage,
  CodeBlockWrapper,
};

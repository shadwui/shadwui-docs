import dynamic from "next/dynamic";
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
import { Callout } from 'fumadocs-ui/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';

const ComponentPage = dynamic(() => import("@/components/home/code/component-page"))
const CodePreview = dynamic(() => import("@/components/home/code/code-preview"))


export {
  Tab,
  DocTabs,
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
  Card, 
  Cards,
  Step,
  Steps,
  Callout,
  CodeBlock,
  Separator,
  CodePreview,
  ComponentPage,
  CodeBlockWrapper,
};

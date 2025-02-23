import React from "react";
import NavbarLayout from "../components/navbar-layout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/src/components/ui/tab";
import {
  AuthTab,
  BlockTab,
  BoxTab,
  TemplateTab,
} from "../components/tabs-components";

const tabListData = [
  {
    name: "Authentication",
    component: <AuthTab />,
  },
  {
    name: "Components",
    component: <BoxTab />,
  },
  {
    name: "Blocks",
    component: <BlockTab />,
  },
  {
    name: "Templates",
    component: <TemplateTab />,
  },
];

const tabContentData: typeof tabListData = [...tabListData];

const PreviewPage = () => {
  return (
    <>
      <Tabs defaultValue="Authentication">
        <NavbarLayout>
          <TabsList className="bg-opacity-0 px-0 h-12 gap-x-2 ">
            {tabListData.map((item, idx) => (
              <TabsTrigger
                key={idx}
                className="py-1 px-2.5 bg-opacity-0 rounded-full data-[state=active]:bg-fd-accent hover:cursor-pointer"
                value={item.name}
              >
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </NavbarLayout>

        {tabContentData.map((item, idx) => (
          <TabsContent value={item.name} key={idx}>
            {item.component}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default PreviewPage;

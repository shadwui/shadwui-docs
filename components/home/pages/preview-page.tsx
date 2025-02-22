import React from "react";
import NavbarLayout from "../components/navbar-layout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/tab";
import { AuthTab, BoxTab } from "../components/tabs-components";

const tabListData = [
  {
    name: "Components",
    component: <BoxTab />,
  },
  {
    name: "Authentication",
    component: <AuthTab />,
  },
  {
    name: "Blocks",
    component: <div className="my-44">Component for tab Blocks</div>,
  },
  {
    name: "Templates",
    component: <div className="my-44">Component for tab Templates</div>,
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

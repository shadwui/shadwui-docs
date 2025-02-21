import React from "react";
import NavbarLayout from "../components/navbar-layout";
import { BoxGridLayout } from "@/components/_components/box";
import { categories } from "@/utils/components";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/tab";

const tabListData = [
  {
    name: "1",
    component: (
      <BoxGridLayout
        items={categories.map((category) => ({
          ...category,
          components: category.components
            ?.map((component) => component.name)
            .join(", "),
        }))}
      />
    ),
  },
  {
    name: "2",
    component: <div>Component for tab 2</div>,
  },
];

const tabContentData: typeof tabListData = [...tabListData];

const PreviewPage = () => {
  return (
    <>
      <Tabs defaultValue="1">
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

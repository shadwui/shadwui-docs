import React from "react";
import NavbarLayout from "../components/navbar-layout";
import { Box } from "@/components/_components/box";
import { categories } from "@/utils/components";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/components/tab";

const PreviewPage = () => {
  return (
    <div className="">
      <Tabs defaultValue="account">
        <TabsList>
          <NavbarLayout>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </NavbarLayout>
        </TabsList>

        <TabsContent value="account">
          <div>
            <div className="relative my-8">
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                  <Box
                    key={category.slug}
                    slug={category.slug}
                    name={category.name}
                    componentsCount={category.components.length}
                  />
                ))}
                <Box slug="timeline" name="Timeline" />
                <Box slug="easings" name="Easing Classes" isEasing={true} />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default PreviewPage;

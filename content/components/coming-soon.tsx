import React from "react";
import CustomButton from "@/components/_components/custom-button";

const ComingSoon = () => {
  return (
    <div className="text-fd-muted-foreground w-full h-96 flex flex-col items-center justify-center text-5xl font-semibold font-heading gap-4">
      Coming Soon...
      <h1 className="text-fd-muted-foreground text-sm">
        If you want to contribute...
      </h1>
      <div className="-mt-10">
        <CustomButton
          link="https://github.com/vercel/next.js"
          title="👋 Contribute"
        />
      </div>
    </div>
  );
};

export default ComingSoon;

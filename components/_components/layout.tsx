import React from "react";
import Footer from "../home/components/footer";
import Header from "../home/components/header";
import Background from "../home/components/background";

const LayoutDesign = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
      <div
        className="
      before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 

      after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 
      
      before:absolute 
      before:inset-y-0 
      before:-left-12
      before:w-px 
      
      after:absolute 
      after:inset-y-0 
      after:-right-12 
      after:w-px

      relative mx-auto w-full max-w-6xl"
      >
        <Background />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutDesign;

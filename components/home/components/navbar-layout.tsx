import React from "react";

interface NavbarLayoutProps {
  children: React.ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <div>
      <div className="absolute w-full">
        <div
          className="      
          before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 
          
          before:h-px
          before:top-0 
          before:left-0
          before:absolute 
          before:-inset-x-12 
          
          relative mx-auto"
        />
        <div
          className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-top-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-top-px after:-right-12 after:z-10 after:-mr-px after:size-[3px]"
          aria-hidden="true"
        />
      </div>

      {children}

      <div className="absolute w-full">
        <div
          className="
          before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 
          
          before:h-px
          before:bottom-0 
          before:absolute 
          before:-inset-x-12
          
          relative"
        />
        <div
          className="
          before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default NavbarLayout;

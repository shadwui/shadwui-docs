import React from "react";

const TheamBorder = () => {
  return (
    <div className="absolute w-full">
      <div
        className="      
      before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] 
      
      before:h-px
      before:top-0
      before:absolute 
      before:-inset-x-12 
      
      relative"
      />
      <div
        className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-top-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-top-px after:-right-12 after:z-10 after:-mr-px after:size-[3px]"
        aria-hidden="true"
      />
    </div>
  );
};

export default TheamBorder;

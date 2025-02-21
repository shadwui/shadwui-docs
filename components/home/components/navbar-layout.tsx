import TheamBorder from "@/registry/premium/components/theam-border";
import React from "react";

interface NavbarLayoutProps {
  children: React.ReactNode;
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <div>
      <TheamBorder />
      {children}
      <TheamBorder />
    </div>
  );
};

export default NavbarLayout;

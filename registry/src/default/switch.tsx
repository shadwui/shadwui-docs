import React from "react";
import { Switch } from "@/registry/src/components/ui/switch";
import { Label } from "@/registry/src/components/ui/label";

const SwitchDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default SwitchDemo;

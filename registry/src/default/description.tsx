import React from "react";
import { Description } from "@/registry/src/components/ui/description";

const DescriptionDemo = () => {
  return (
    <div>
      <Description variant="p">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </Description>
      <Description variant="blockquote">
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </Description>
      <div>
        Shadwui {"  "}
        <Description variant="underline">underline</Description>
      </div>
    </div>
  );
};

export default DescriptionDemo;

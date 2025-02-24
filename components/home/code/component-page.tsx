import React from "react";
import CodePreview from "./code-preview";

interface ComponentPageProps {
  sourcePath: string;
  files: string[];
}

export default function ComponentPage({
  files,
  sourcePath,
}: ComponentPageProps) {
  return (
    <div className="space-y-8">
      {files.map((file) => {
        return (
          <CodePreview
            key={file}
            sourcePath={sourcePath}
            componentName={file}
            minimumCodeHeight="250px"
            codeBlockMaximumHeight="250px"
          />
        );
      })}
    </div>
  );
}

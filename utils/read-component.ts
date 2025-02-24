// import { promises as fs } from "fs";
// import path from "path";

// export const readComponentSource = async (
//   sourcePath: string,
//   componentName: string
// ) => {
//   const parts = sourcePath.split("/").filter((part) => part !== "");

//   const filePath = path.join(
//     process.cwd(),
//     "data",
//     parts[0],
//     parts[1],
//     `${componentName}.tsx`
//   );
//   try {
//     const source = await fs.readFile(filePath, "utf8");
//     return source;
//   } catch (error) {
//     console.error(`Error reading file ${filePath}:`, error);
//     return null;
//   }
// };

import { promises as fs } from "fs";
import path from "path";

export const readComponentSource = async (
  sourcePath: string,
  componentName: string
) => {
  const normalizedPath = sourcePath.replace(/^@\//, 'registry/'); 

  const isFullPath = normalizedPath.endsWith('.tsx');
   
  const filePath = isFullPath
    ? path.join(process.cwd(), normalizedPath)
    : path.join(process.cwd(), normalizedPath, `${componentName}.tsx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
};

export const readComponentPath = async (
  sourcePath: string,
  componentName: string
) => {
  try {
    const Component = (await import(`@/registry/${sourcePath}/${componentName}`))
      .default;
    return Component;
  } catch (error) {
    console.error(`Error reading file ${sourcePath}:`, error);
    return null;
  }
};

// export const readComponentPath = async (
//   sourcePath: string,
//   componentName: string
// ) => {
//   try {
//     // Normalize paths and remove extensions
//     const cleanSource = sourcePath
//       .replace(/^\/+|\/+$/g, '') // Trim slashes
//       .replace(/\.tsx$/g, ''); // Remove .tsx extension

//     const cleanComponent = componentName
//       .replace(/^\/+|\/+$/g, '') // Trim slashes
//       .replace(/\.tsx$/g, ''); // Remove .tsx extension

//     // Construct POSIX-style path for consistent imports
//     const importPath = [
//       '@/registry',
//       cleanSource,
//       cleanComponent
//     ].filter(Boolean).join('/');

//     const Component = (await import(importPath)).default;
//     return Component;
//   } catch (error) {
//     console.error(`Error importing component from }:`, error);
//     return null;
//   }
// };
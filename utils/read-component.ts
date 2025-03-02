import { promises as fs } from "fs";
import path from "path";

export const readComponentSource = async (
  sourcePath: string,
  componentName: string
) => {
  const normalizedPath = sourcePath.replace(/^@\//, "registry/");

  const isFullPath = normalizedPath.endsWith(".tsx");

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
    const Component = (
      await import(`@/registry/${sourcePath}/${componentName}`)
    ).default;
    return Component;
  } catch (error) {
    console.error(`Error reading file ${sourcePath}:`, error);
    return null;
  }
};

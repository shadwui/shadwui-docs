import { promises as fs } from "fs";
import path from "path";

export const readComponentSource = async (
  // directory: string,
  sourcePath: string,
  componentName: string
) => {
  const parts = sourcePath.split("/").filter((part) => part !== "");

  const filePath = path.join(
    process.cwd(),
    "data",
    parts[0],
    parts[1],
    `${componentName}.tsx`
  );
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
    const Component = (await import(`@/data/${sourcePath}${componentName}`))
      .default;
    return Component;
  } catch (error) {
    console.error(`Error reading file ${sourcePath}:`, error);
    return null;
  }
};

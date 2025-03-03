export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/src\/components\/ui/g, "@/components/ui")
    .replace(/@\/registry\/src\/hooks/g, "@/hooks")
    .replace(/@\/registry\/src\/lib/g, "@/lib");
};

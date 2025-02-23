interface HeadingProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Heading = ({
  children,
  variant = "h4",
  className = "",
}: HeadingProps) => {
  const Tag = variant;

  const variantClasses = {
    h1: "text-4xl/[1.1] font-bold md:text-5xl/[1.1]",
    h2: "text-3xl/[1.1] font-bold md:text-4xl/[1.1]",
    h3: " text-xl/[1.1] font-bold md:text-2xl/[1.1]",
    h4: "text-lg/[1.1] md:text-xl/[1.1]",
    h5: "text-base",
    h6: "text-sm",
  };

  const combinedClasses = `${variantClasses[variant]} ${className}`;

  return <Tag className={combinedClasses.trim()}>{children}</Tag>;
};

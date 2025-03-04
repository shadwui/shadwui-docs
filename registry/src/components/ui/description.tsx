import React from "react";

/**
 * Description component that renders different HTML elements
 * based on the 'variant' prop.
 *
 * @param {Object} props - Component props.
 * @param {'p' | 'blockquote' | 'underline'} [props.variant='p'] - The variant determining the HTML element to render.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content to render.
 * @returns {JSX.Element} The rendered component.
 */

interface DescriptionProps {
  children: React.ReactNode;
  variant?: "p" | "blockquote" | "underline";
  className?: string;
}

export const Description = ({
  children,
  variant = "p",
  className = "",
}: DescriptionProps) => {
  const Tag = variant === "underline" ? "span" : variant;

  const variantClasses = {
    p: "leading-7 text-base",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    underline: "font-medium text-primary underline underline-offset-4",
  };
  const combinedClasses = `${variantClasses[variant]} ${className}`;

  return <Tag className={combinedClasses.trim()}>{children}</Tag>;
};

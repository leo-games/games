import { cn } from "../../lib/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag className={cn("gradient-text font-heading font-extrabold", className)}>
      {children}
    </Tag>
  );
}

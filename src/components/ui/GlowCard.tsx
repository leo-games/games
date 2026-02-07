import { cn } from "../../lib/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className={cn("glow-card border border-border p-6", className)}>
      {children}
    </div>
  );
}

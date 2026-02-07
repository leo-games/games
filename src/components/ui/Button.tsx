import { cn } from "../../lib/cn";
import { Link } from "react-router-dom";

type ButtonVariant = "gradient" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-heading font-semibold text-sm transition-all duration-200 active:scale-95 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  gradient:
    "bg-gradient-to-r from-grad-blue via-grad-purple to-grad-pink text-white shadow-lg shadow-grad-purple/25 hover:shadow-grad-purple/40 hover:brightness-110",
  ghost:
    "border border-border text-text hover:bg-surface-lit hover:border-grad-purple/50",
};

export function Button({
  variant = "gradient",
  children,
  className,
  to,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

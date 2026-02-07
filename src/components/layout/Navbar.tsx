import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Menu, X } from "lucide-react";
import { cn } from "../../lib/cn";

const links = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold">
          <Gamepad2 className="h-6 w-6 text-grad-purple" />
          <span className="gradient-text">LEO GAMES</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "font-heading text-sm font-medium transition-colors hover:text-text",
                pathname === link.to ? "text-text" : "text-text-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="text-text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 font-heading text-sm font-medium transition-colors hover:bg-surface-lit",
                  pathname === link.to ? "text-text" : "text-text-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

import { Gamepad2, Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-grad-purple to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 md:flex-row md:justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold">
          <Gamepad2 className="h-5 w-5 text-grad-purple" />
          <span className="gradient-text">LEO GAMES</span>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-text-muted">Made by Leo</p>
      </div>
    </footer>
  );
}

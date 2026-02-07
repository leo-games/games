import { useState } from "react";
import { Play, Maximize2, Gamepad2 } from "lucide-react";

interface GameEmbedProps {
  slug: string;
  title: string;
}

export function GameEmbed({ slug, title }: GameEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const src = `/games/${slug}/index.html`;

  const toggleFullscreen = () => {
    const el = document.getElementById("game-frame");
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  if (!playing) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface-lit to-surface">
        <Gamepad2 className="absolute h-32 w-32 text-text-muted/10" />
        <button
          onClick={() => setPlaying(true)}
          className="group relative z-10 flex flex-col items-center gap-3"
        >
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-grad-purple to-grad-pink shadow-xl shadow-grad-purple/30">
            <div className="pulse-ring absolute inset-0 rounded-full bg-grad-purple/30" />
            <Play className="h-8 w-8 text-white" fill="white" />
          </div>
          <span className="font-heading text-sm font-semibold text-text-muted group-hover:text-text">
            Click to Play {title}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border">
      <iframe
        id="game-frame"
        src={src}
        title={title}
        className="aspect-video w-full"
        allow="autoplay"
        sandbox="allow-scripts allow-same-origin"
      />
      <button
        onClick={toggleFullscreen}
        className="absolute right-3 top-3 rounded-lg bg-background/80 p-2 text-text-muted backdrop-blur-sm transition-colors hover:text-text"
        aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
      >
        <Maximize2 className="h-4 w-4" />
      </button>
    </div>
  );
}

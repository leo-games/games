import { Link } from "react-router-dom";
import { GlowCard } from "../../components/ui/GlowCard";
import type { Game } from "../../data/types";
import { Gamepad2, Users, Play } from "lucide-react";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/games/${game.slug}`}>
      <GlowCard className="group h-full">
        <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-surface-lit to-surface">
          <Gamepad2 className="h-14 w-14 text-text-muted/30 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {game.communityMade && (
            <span className="flex items-center gap-1 rounded-full bg-grad-pink/10 px-2 py-0.5 font-mono text-xs text-grad-pink">
              <Users className="h-3 w-3" />
              Community
            </span>
          )}
          {game.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-lit px-2.5 py-0.5 font-mono text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-1 font-heading text-lg font-bold">{game.title}</h3>
        <p className="mb-3 text-sm text-text-muted">{game.description}</p>
        {game.playable && (
          <span className="inline-flex items-center gap-1 text-sm font-medium text-grad-purple">
            <Play className="h-3.5 w-3.5" />
            Play Now
          </span>
        )}
      </GlowCard>
    </Link>
  );
}

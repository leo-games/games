import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";
import { GameEmbed } from "../features/games/GameEmbed";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { GradientText } from "../components/ui/GradientText";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Users } from "lucide-react";

export function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <GradientText as="h1" className="mb-4 text-4xl">
          Game Not Found
        </GradientText>
        <p className="mb-6 text-text-muted">
          This game doesn't exist or hasn't been added yet.
        </p>
        <Button to="/games">
          <ArrowLeft className="h-4 w-4" />
          Back to Games
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <AnimatedSection>
        <Link
          to="/games"
          className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Games
        </Link>

        <GradientText as="h1" className="mb-2 text-3xl sm:text-4xl">
          {game.title}
        </GradientText>

        <div className="mb-6 flex flex-wrap items-center gap-2">
          {game.communityMade && (
            <span className="flex items-center gap-1 rounded-full bg-grad-pink/10 px-2.5 py-0.5 font-mono text-xs text-grad-pink">
              <Users className="h-3 w-3" />
              Community Made
            </span>
          )}
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-lit px-2.5 py-0.5 font-mono text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-8 text-text-muted">{game.description}</p>

        <GameEmbed slug={game.slug} title={game.title} />
      </AnimatedSection>
    </div>
  );
}

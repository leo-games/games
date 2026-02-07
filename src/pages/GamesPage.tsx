import { AnimatedSection } from "../components/ui/AnimatedSection";
import { GradientText } from "../components/ui/GradientText";
import { GameCard } from "../features/games/GameCard";
import { games } from "../data/games";

export function GamesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <AnimatedSection>
        <GradientText as="h1" className="mb-4 text-4xl sm:text-5xl">
          All Games
        </GradientText>
        <p className="mb-10 max-w-lg text-text-muted">
          Browse games from Leo and the community. Click any game to learn more
          or play.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game, i) => (
          <AnimatedSection key={game.slug} delay={i * 0.1}>
            <GameCard game={game} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

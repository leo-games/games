import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { GlowCard } from "../../components/ui/GlowCard";
import { GradientText } from "../../components/ui/GradientText";
import { Button } from "../../components/ui/Button";
import { games } from "../../data/games";
import { Play, Users, Gamepad2 } from "lucide-react";

export function FeaturedGames() {
  const featured = games.find((g) => g.featured);
  const others = games.filter((g) => !g.featured);

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-4 py-20">
      <GradientText as="h2" className="mb-10 text-3xl sm:text-4xl">
        Featured Games
      </GradientText>

      {/* Spotlight card */}
      {featured && (
        <AnimatedSection delay={0.1}>
          <GlowCard className="group relative mb-8 overflow-hidden p-0">
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail area */}
              <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-grad-purple/20 to-grad-blue/20 md:h-auto md:w-1/2">
                <Gamepad2 className="h-20 w-20 text-grad-purple/40 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
                <div className="mb-2 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-grad-purple/10 px-2.5 py-0.5 font-mono text-xs text-grad-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mb-6 text-text-muted">{featured.description}</p>
                <div>
                  <Button to={`/games/${featured.slug}`}>
                    <Play className="h-4 w-4" />
                    Play Now
                  </Button>
                </div>
              </div>
            </div>
          </GlowCard>
        </AnimatedSection>
      )}

      {/* Other games */}
      <div className="grid gap-6 sm:grid-cols-2">
        {others.map((game, i) => (
          <AnimatedSection key={game.slug} delay={0.2 + i * 0.1}>
            <GlowCard className="group">
              <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-surface-lit to-surface">
                <Gamepad2 className="h-12 w-12 text-text-muted/30 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="mb-2 flex items-center gap-2">
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
              <p className="text-sm text-text-muted">{game.description}</p>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}

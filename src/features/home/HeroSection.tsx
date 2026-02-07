import { GradientText } from "../../components/ui/GradientText";
import { Button } from "../../components/ui/Button";
import { Play, Gamepad2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <GradientText
        as="h1"
        className="text-5xl leading-tight tracking-tight sm:text-7xl md:text-8xl"
      >
        LEO GAMES
      </GradientText>

      <p className="mt-4 max-w-md text-lg text-text-muted sm:text-xl">
        Games by Leo &amp; the community
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button to="/games/bounceback">
          <Play className="h-4 w-4" />
          Play Bounceback
        </Button>
        <Button variant="ghost" to="/games">
          <Gamepad2 className="h-4 w-4" />
          Browse Games
        </Button>
      </div>
    </section>
  );
}

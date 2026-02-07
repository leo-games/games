import { HeroSection } from "../features/home/HeroSection";
import { WhatsNew } from "../features/home/WhatsNew";
import { FeaturedGames } from "../features/home/FeaturedGames";
import { YouTubeSection } from "../features/home/YouTubeSection";
import { CommunitySection } from "../features/home/CommunitySection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatsNew />
      <FeaturedGames />
      <YouTubeSection />
      <CommunitySection />
    </>
  );
}

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { GradientText } from "../../components/ui/GradientText";
import { videos } from "../../data/videos";
import { ExternalLink } from "lucide-react";

export function YouTubeSection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-10 flex items-end justify-between">
        <GradientText as="h2" className="text-3xl sm:text-4xl">
          YouTube
        </GradientText>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text"
        >
          Visit Channel
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <AnimatedSection key={video.id} delay={i * 0.1}>
            <div className="overflow-hidden rounded-xl border border-border">
              <LiteYouTubeEmbed id={video.youtubeId} title={video.title} />
              <div className="bg-surface p-3">
                <h3 className="font-heading text-sm font-semibold">
                  {video.title}
                </h3>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}

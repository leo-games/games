import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { GlowCard } from "../../components/ui/GlowCard";
import { GradientText } from "../../components/ui/GradientText";
import { posts } from "../../data/posts";
import { Megaphone } from "lucide-react";

export function WhatsNew() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-4 py-20">
      <GradientText as="h2" className="mb-10 text-3xl sm:text-4xl">
        What's New
      </GradientText>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <AnimatedSection key={post.id} delay={i * 0.1}>
            <GlowCard>
              <div className="mb-3 flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-grad-purple" />
                <span className="font-mono text-xs text-text-muted">
                  {post.date}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm text-text-muted">{post.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-lit px-2.5 py-0.5 font-mono text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}

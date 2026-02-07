import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { GradientText } from "../../components/ui/GradientText";
import { PostCard } from "../posts/PostCard";
import { posts } from "../../data/posts";

export function CommunitySection() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-4 py-20">
      <GradientText as="h2" className="mb-10 text-3xl sm:text-4xl">
        Community
      </GradientText>

      <div className="flex flex-col gap-6">
        {[...posts].reverse().map((post, i) => (
          <AnimatedSection key={post.id} delay={i * 0.1}>
            <PostCard post={post} />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}

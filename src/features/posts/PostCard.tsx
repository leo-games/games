import { useState } from "react";
import { GlowCard } from "../../components/ui/GlowCard";
import { CommentThread } from "./CommentThread";
import { CommentForm } from "./CommentForm";
import { useLocalComments } from "../../hooks/useLocalComments";
import type { Post } from "../../data/types";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { comments, addComment } = useLocalComments(post.id);

  return (
    <GlowCard>
      <div className="mb-2 flex items-center gap-2">
        <span className="font-heading text-sm font-bold text-grad-purple">
          {post.author}
        </span>
        <span className="font-mono text-xs text-text-muted">{post.date}</span>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-lit px-2 py-0.5 font-mono text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mb-2 font-heading text-lg font-bold">{post.title}</h3>
      <p className="text-sm text-text-muted">{post.body}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
      >
        <MessageCircle className="h-4 w-4" />
        {comments.length} {comments.length === 1 ? "comment" : "comments"}
        {expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {expanded && (
        <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4">
          <CommentThread comments={comments} />
          <CommentForm onSubmit={addComment} />
        </div>
      )}
    </GlowCard>
  );
}

import type { Comment } from "../../data/types";
import { MessageCircle } from "lucide-react";

interface CommentThreadProps {
  comments: Comment[];
}

export function CommentThread({ comments }: CommentThreadProps) {
  if (comments.length === 0) {
    return (
      <p className="flex items-center gap-2 text-sm text-text-muted/50">
        <MessageCircle className="h-4 w-4" />
        No comments yet — be the first!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {comments.map((comment) => (
        <div key={comment.id} className="rounded-lg bg-surface-lit/50 px-4 py-3">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-heading text-sm font-semibold">
              {comment.name}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {comment.date}
            </span>
          </div>
          <p className="text-sm text-text-muted">{comment.message}</p>
        </div>
      ))}
    </div>
  );
}

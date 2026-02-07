import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Send } from "lucide-react";

interface CommentFormProps {
  onSubmit: (name: string, message: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimName = name.trim();
    const trimMsg = message.trim();
    if (!trimName || !trimMsg) return;
    onSubmit(trimName, trimMsg);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text placeholder:text-text-muted/50 focus:border-grad-purple focus:outline-none"
        maxLength={50}
      />
      <textarea
        placeholder="Write a comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        className="resize-none rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text placeholder:text-text-muted/50 focus:border-grad-purple focus:outline-none"
        maxLength={500}
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted/50">
          Comments are saved locally in your browser
        </span>
        <Button type="submit" className="px-4 py-2 text-xs">
          <Send className="h-3 w-3" />
          Post
        </Button>
      </div>
    </form>
  );
}

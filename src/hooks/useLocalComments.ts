import { useCallback, useSyncExternalStore } from "react";
import type { Comment } from "../data/types";
import { getItem, setItem } from "../lib/storage";

const STORAGE_KEY = "leo-games-comments";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function notify() {
  cachedComments = getItem<Comment[]>(STORAGE_KEY, []);
  listeners.forEach((cb) => cb());
}

let cachedComments: Comment[] = getItem<Comment[]>(STORAGE_KEY, []);

function getSnapshot(): Comment[] {
  return cachedComments;
}

export function useLocalComments(postId: string) {
  const allComments = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const comments = allComments.filter((c) => c.postId === postId);

  const addComment = useCallback(
    (name: string, message: string) => {
      const comment: Comment = {
        id: `${postId}-${Date.now()}`,
        postId,
        name,
        message,
        date: new Date().toISOString().split("T")[0],
      };
      const updated = [...cachedComments, comment];
      setItem(STORAGE_KEY, updated);
      notify();
    },
    [postId],
  );

  return { comments, addComment };
}

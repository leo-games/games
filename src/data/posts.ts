import type { Post } from "./types";

export const posts: Post[] = [
  {
    id: "welcome",
    title: "Welcome to Leo Games!",
    body: "Hey everyone! This is the official hub for all my games and community creations. Feel free to browse the games, watch some videos, and leave comments. More games coming soon!",
    author: "Leo",
    date: "2026-02-01",
    tags: ["Announcement"],
  },
  {
    id: "bounceback-update",
    title: "Bounceback v1.2 — New Levels!",
    body: "Just pushed a huge update to Bounceback with 10 new levels, a new power-up system, and improved physics. The combo system has been reworked to feel snappier. Let me know what you think!",
    author: "Leo",
    date: "2026-02-05",
    tags: ["Update", "Bounceback"],
  },
  {
    id: "community-games",
    title: "Community Games Now Accepted!",
    body: "Exciting news — we're now accepting community game submissions! If you've built an HTML5 game and want it featured on the site, reach out. Games can be built with any engine: vanilla JS, Phaser, Godot, you name it.",
    author: "Leo",
    date: "2026-02-07",
    tags: ["Announcement", "Community"],
  },
];

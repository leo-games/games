import type { Game } from "./types";

export const games: Game[] = [
  {
    slug: "bounceback",
    title: "Bounceback",
    description:
      "A fast-paced arcade game where you bounce off walls, dodge obstacles, and rack up combos. Leo's flagship game!",
    thumbnail: "/games/bounceback/thumbnail.png",
    tags: ["Arcade", "Action", "Flagship"],
    featured: true,
    playable: true,
  },
  {
    slug: "pixel-dash",
    title: "Pixel Dash",
    description:
      "A retro-style endless runner with pixel art graphics and chiptune music.",
    thumbnail: "",
    tags: ["Platformer", "Retro"],
    communityMade: true,
  },
  {
    slug: "star-dodge",
    title: "Star Dodge",
    description:
      "Navigate through a field of stars without getting hit. How long can you survive?",
    thumbnail: "",
    tags: ["Casual", "Space"],
    communityMade: true,
  },
];

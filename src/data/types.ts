export interface Game {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  featured?: boolean;
  communityMade?: boolean;
  playable?: boolean;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  tags: string[];
}

export interface Comment {
  id: string;
  postId: string;
  name: string;
  message: string;
  date: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

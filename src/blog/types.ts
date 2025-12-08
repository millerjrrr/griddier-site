export type { SiteKey } from "../assets/interface";

export type GlobModule = {
  default: string; // markdown content
};

export interface PostMeta {
  title?: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  thumbnail?: string;
  featured?: boolean;
  [key: string]: unknown;
}

export interface PostSummary extends PostMeta {
  slug: string;
}

export interface Post extends PostMeta {
  slug: string;
  content: string;
}

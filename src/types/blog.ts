export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  author?: string;
  date: string;
  tags?: string[];
  readingTime?: number;
}

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  image?: string;
  author?: string;
  date: string;
  tags?: string[];
}

export interface BlogPostError {
  code: "NOT_FOUND" | "INVALID_CONTENT" | "READ_ERROR";
  message: string;
  slug: string;
}

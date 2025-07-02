import fs from "fs";
import path from "path";

import matter from "gray-matter";

import {logger} from "@/lib/logger";

import type {BlogPost, BlogPostFrontmatter, BlogPostError} from "@/types/blog";

const BLOG_POSTS_DIR = path.join(process.cwd(), "src/content/blog");

/**
 * Validates if a blog post frontmatter contains all required fields.
 * @param {any} data - The frontmatter data to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateBlogPostData(data: any): data is BlogPostFrontmatter {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.title === "string" &&
    data.title.trim().length > 0 &&
    typeof data.description === "string" &&
    data.description.trim().length > 0 &&
    typeof data.date === "string" &&
    !isNaN(Date.parse(data.date))
  );
}

/**
 * Calculates reading time for a blog post based on word count.
 * @param {string} content - The blog post content
 * @returns {number} Estimated reading time in minutes
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Loads and parses a blog post by slug.
 * @param {string} slug - The blog post slug
 * @returns {Promise<BlogPost | BlogPostError>} BlogPost object or BlogPostError if failed
 */
export async function getBlogPost(
  slug: string,
): Promise<BlogPost | BlogPostError> {
  try {
    const filePath = path.join(BLOG_POSTS_DIR, `${slug}.mdx`);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return {
        code: "NOT_FOUND",
        message: `Blog post "${slug}" not found`,
        slug,
      };
    }

    // Read and parse the file
    const source = fs.readFileSync(filePath, "utf8");
    const {content, data} = matter(source);

    // Validate frontmatter data
    if (!validateBlogPostData(data)) {
      return {
        code: "INVALID_CONTENT",
        message: `Blog post "${slug}" has invalid frontmatter data`,
        slug,
      };
    }

    // Calculate reading time
    const readingTime = calculateReadingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      content,
      image: data.image,
      author: data.author,
      date: data.date,
      tags: data.tags,
      readingTime,
    };
  } catch (error) {
    logger.error(`Error loading blog post "${slug}":`, error);
    return {
      code: "READ_ERROR",
      message: `Failed to load blog post "${slug}"`,
      slug,
    };
  }
}

/**
 * Gets all available blog post slugs.
 * @returns {string[]} Array of blog post slugs
 */
export function getBlogPostSlugs(): string[] {
  try {
    if (!fs.existsSync(BLOG_POSTS_DIR)) {
      return [];
    }

    return fs
      .readdirSync(BLOG_POSTS_DIR)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    logger.error("Error reading blog posts directory:", error);
    return [];
  }
}

/**
 * Gets all blog posts with their metadata.
 * @returns {Promise<BlogPost[]>} Array of blog posts sorted by date (newest first)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogPostSlugs();
  const posts: BlogPost[] = [];

  for (const slug of slugs) {
    const result = await getBlogPost(slug);
    if ("code" in result) {
      logger.warn(`Skipping invalid blog post: ${slug}`);
      continue;
    }
    posts.push(result);
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

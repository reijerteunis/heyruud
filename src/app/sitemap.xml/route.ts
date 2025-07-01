import fs from "fs";
import path from "path";

import matter from "gray-matter";
import {NextResponse} from "next/server";

/**
 * Represents a single URL entry in the sitemap.
 * @typedef {object} SitemapUrl
 * @property {string} loc - The absolute URL of the page.
 * @property {string} [lastmod] - The ISO date string of the last modification (optional).
 * @property {string} changefreq - The frequency at which the page is likely to change.
 * @property {number} priority - The priority of this URL relative to other URLs on the site.
 */
interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: number;
}

/**
 * Handles GET requests to generate a dynamic sitemap.xml for the site.
 *
 * - Includes the homepage, blog index, and all blog posts found in src/app/blog/[slug].
 * - Blog posts use their frontmatter 'date' as <lastmod> if available.
 * - All URLs include <changefreq> and <priority> for SEO.
 * @returns {NextResponse} XML response containing the sitemap.
 */
export async function GET() {
  // The base URL for all sitemap entries
  const baseUrl = "https://www.heyruud.com";
  // Directory containing blog post .mdx files
  const blogDir = path.join(process.cwd(), "src/app/blog/[slug]");
  // List all files in the blog directory
  const files = fs.readdirSync(blogDir);
  // Filter for .mdx files (blog posts)
  const blogPosts = files.filter((file) => file.endsWith(".mdx"));

  /**
   * Static URLs: homepage and blog index
   * @type {SitemapUrl[]}
   */
  const urls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/blog`,
      changefreq: "weekly",
      priority: 0.8,
    },
  ];

  // Add each blog post to the sitemap
  for (const file of blogPosts) {
    const filePath = path.join(blogDir, file);
    // Read the MDX file and parse frontmatter
    const source = fs.readFileSync(filePath, "utf8");
    const {data} = matter(source);
    urls.push({
      loc: `${baseUrl}/blog/${file.replace(/\.mdx$/, "")}`,
      lastmod: data.date ? new Date(data.date).toISOString() : undefined,
      changefreq: "weekly",
      priority: 0.7,
    });
  }

  /**
   * Generates the XML sitemap string from the URLs array.
   * @param {SitemapUrl[]} urls - The array of URLs to include in the sitemap.
   * @returns {string} The XML sitemap as a string.
   */
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      ({loc, lastmod, changefreq, priority}) =>
        `  <url>\n    <loc>${loc}</loc>\n${
          lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""
        }    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  // Return the XML response
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

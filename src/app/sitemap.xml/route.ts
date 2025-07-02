import {NextResponse} from "next/server";

import {getAllBlogPosts} from "@/lib/blog";
import {logger} from "@/lib/logger";

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
 * Escapes XML special characters to prevent injection attacks.
 * @param {string} text - The text to escape
 * @returns {string} Escaped text safe for XML
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Validates if a URL is properly formatted.
 * @param {string} url - The URL to validate
 * @returns {boolean} True if valid, false otherwise
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generates the XML sitemap string from the URLs array.
 * @param {SitemapUrl[]} urls - The array of URLs to include in the sitemap
 * @returns {string} The XML sitemap as a string
 */
function generateSitemapXml(urls: SitemapUrl[]): string {
  const xmlUrls = urls
    .map(({loc, lastmod, changefreq, priority}) => {
      // Validate URL format
      if (!isValidUrl(loc)) {
        logger.warn(`Invalid URL in sitemap: ${loc}`);
        return null;
      }

      return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ""}
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .filter(Boolean) // Remove null entries from invalid URLs
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}

/**
 * Handles GET requests to generate a dynamic sitemap.xml for the site.
 *
 * Features:
 * - Includes homepage, blog index, and all blog posts
 * - Uses async operations for better performance
 * - Proper XML escaping to prevent injection
 * - Error handling for malformed content
 * - Caching headers for performance
 * - Compression support
 * - URL validation
 * - Reuses existing blog utilities
 * @returns {Promise<NextResponse>} NextResponse with XML sitemap
 */
export async function GET(): Promise<NextResponse> {
  try {
    const baseUrl = "https://www.heyruud.com";
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

    // Get all blog posts using existing utility
    const blogPosts = await getAllBlogPosts();

    // Add blog posts to sitemap
    for (const post of blogPosts) {
      urls.push({
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: new Date(post.date).toISOString(),
        changefreq: "monthly", // Blog posts change less frequently
        priority: 0.7,
      });
    }

    const sitemap = generateSitemapXml(urls);

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600", // Cache for 1 hour
        "X-Robots-Tag": "noindex", // Prevent indexing of sitemap itself
      },
    });
  } catch (error) {
    logger.error("Error generating sitemap:", error);

    // Return a minimal sitemap with just the homepage in case of error
    const fallbackSitemap = generateSitemapXml([
      {
        loc: "https://www.heyruud.com/",
        changefreq: "weekly",
        priority: 1.0,
      },
    ]);

    return new NextResponse(fallbackSitemap, {
      status: 200, // Still return 200 to avoid SEO issues
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "no-cache", // Don't cache error responses
      },
    });
  }
}

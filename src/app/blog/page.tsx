import Link from "next/link";

import {getAllBlogPosts} from "@/lib/blog";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Blog - Hey Ruud",
  description:
    "Thoughts on engineering leadership, team scaling, and technology.",
};

/**
 * Blog index page that displays all available blog posts.
 * @returns {Promise<import("react").JSX.Element>} The blog listing page.
 */
export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  // Schema.org structured data for the blog listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Hey Ruud Blog",
    "description":
      "Thoughts on engineering leadership, team scaling, and technology.",
    "url": "https://heyruud.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Hey Ruud",
      "url": "https://heyruud.com",
    },
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": post.image
        ? {
            "@type": "ImageObject",
            "url": post.image,
            "alt": post.title,
          }
        : undefined,
      "author": post.author
        ? {
            "@type": "Person",
            "name": post.author,
          }
        : undefined,
      "datePublished": post.date,
      "dateModified": post.date,
      "url": `https://heyruud.com/blog/${post.slug}`,
      "keywords": post.tags?.join(", "),
      "wordCount": post.content.split(/\s+/).length,
      "timeRequired": post.readingTime ? `PT${post.readingTime}M` : undefined,
    })),
  };

  return (
    <div
      className="mx-auto max-w-4xl py-12"
      itemScope
      itemType="https://schema.org/Blog"
    >
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900" itemProp="name">
          Blog
        </h1>
        <p className="text-xl text-gray-600" itemProp="description">
          Thoughts on engineering leadership, team scaling, and technology.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">No blog posts found.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className={`
                rounded-lg border border-gray-200 p-6 transition-shadow
                hover:shadow-md
              `}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="mb-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className={`
                    text-2xl font-bold text-gray-900
                    hover:text-blue-600
                  `}
                  itemProp="headline"
                >
                  {post.title}
                </Link>
              </div>

              <p className="mb-4 text-gray-600" itemProp="description">
                {post.description}
              </p>

              <div
                className={`
                  flex flex-wrap items-center gap-4 text-sm text-gray-500
                `}
              >
                {post.author && (
                  <span
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <meta itemProp="name" content={post.author} />
                    By {post.author}
                  </span>
                )}
                {post.date && (
                  <span>
                    <meta itemProp="datePublished" content={post.date} />
                    <meta itemProp="dateModified" content={post.date} />
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                )}
                {post.readingTime && (
                  <span>
                    <meta
                      itemProp="timeRequired"
                      content={`PT${post.readingTime}M`}
                    />
                    {post.readingTime} min read
                  </span>
                )}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <meta itemProp="keywords" content={post.tags.join(", ")} />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        rounded-full bg-gray-100 px-3 py-1 text-xs font-medium
                        text-gray-700
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <meta
                itemProp="url"
                content={`https://heyruud.com/blog/${post.slug}`}
              />
              <meta
                itemProp="wordCount"
                content={post.content.split(/\s+/).length.toString()}
              />
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

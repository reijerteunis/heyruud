import type {BlogPost} from "@/types/blog";

interface BlogSchemaProps {
  post: BlogPost;
}

/**
 * Blog post Schema.org structured data component.
 * @param {BlogSchemaProps} props - The blog post object.
 * @returns {import("react").JSX.Element} The structured data script tag.
 */
export default function BlogSchema({post}: BlogSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
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
    "dateModified": post.date, // Assuming same as published date, could be updated if we track modifications
    "publisher": {
      "@type": "Organization",
      "name": "Hey Ruud",
      "url": "https://heyruud.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://heyruud.com/blog/${post.slug}`,
    },
    "keywords": post.tags?.join(", "),
    "articleSection": "Blog",
    "wordCount": post.content.split(/\s+/).length,
    "timeRequired": post.readingTime ? `PT${post.readingTime}M` : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  );
}

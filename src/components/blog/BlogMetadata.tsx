import type {BlogPost} from "@/types/blog";

interface BlogMetadataProps {
  post: BlogPost;
}

/**
 * Blog post metadata component that displays author, date, and reading time.
 * @param {BlogMetadataProps} props - The blog post object.
 * @returns {import("react").JSX.Element} The rendered metadata section.
 */
export default function BlogMetadata({post}: BlogMetadataProps) {
  return (
    <div
      className={`
        mb-8 flex flex-wrap items-center gap-4 border-b border-gray-200 pb-4
        text-sm text-gray-500
      `}
    >
      {post.author && (
        <span
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
          className="flex items-center gap-2"
        >
          <meta itemProp="name" content={post.author} />
          <span className="font-medium">By {post.author}</span>
        </span>
      )}
      {post.date && (
        <time dateTime={post.date} className="flex items-center gap-2">
          <meta itemProp="datePublished" content={post.date} />
          <meta itemProp="dateModified" content={post.date} />
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      )}
      {post.readingTime && (
        <span className="flex items-center gap-2">
          <meta itemProp="timeRequired" content={`PT${post.readingTime}M`} />
          <span className="font-medium">{post.readingTime} min read</span>
        </span>
      )}
    </div>
  );
}

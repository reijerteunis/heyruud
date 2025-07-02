import type {BlogPost} from "@/types/blog";

interface BlogTagsProps {
  post: BlogPost;
}

/**
 * Blog post tags component that displays the post tags.
 * @param {BlogTagsProps} props - The blog post object.
 * @returns {import("react").JSX.Element} The rendered tags section or null if no tags.
 */
export default function BlogTags({post}: BlogTagsProps) {
  if (!post.tags || post.tags.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <meta itemProp="keywords" content={post.tags.join(", ")} />
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`
              rounded-full bg-gray-100 px-3 py-1 text-xs font-medium
              text-gray-700 transition-colors
              hover:bg-gray-200
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

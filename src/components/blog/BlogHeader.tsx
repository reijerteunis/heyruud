import type {BlogPost} from "@/types/blog";

interface BlogHeaderProps {
  post: BlogPost;
}

/**
 * Blog post header component that displays the title and description.
 * @param {BlogHeaderProps} props - The blog post object.
 * @returns {import("react").JSX.Element} The rendered blog header.
 */
export default function BlogHeader({post}: BlogHeaderProps) {
  return (
    <header className="mb-8">
      <h1
        className="mb-4 text-4xl font-bold text-yellow-500"
        itemProp="headline"
      >
        {post.title}
      </h1>

      {post.description && (
        <p className="mb-6 text-xl text-black-100" itemProp="description">
          {post.description}
        </p>
      )}
    </header>
  );
}

import Image from "next/image";

import type {BlogPost} from "@/types/blog";

interface BlogImageProps {
  post: BlogPost;
}

/**
 * Blog post featured image component.
 * @param {BlogImageProps} props - The blog post object.
 * @returns {import("react").JSX.Element} The rendered featured image or null if no image.
 */
export default function BlogImage({post}: BlogImageProps) {
  if (!post.image) {
    return null;
  }

  return (
    <div className="mb-8">
      <Image
        src={post.image}
        alt={post.title}
        width={1000}
        height={1000}
        className="h-auto w-full rounded-lg shadow-lg"
        itemProp="image"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

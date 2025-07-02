import {MDXRemote} from "next-mdx-remote/rsc";

import BlogHeader from "@/components/blog/BlogHeader";
import BlogImage from "@/components/blog/BlogImage";
import BlogMetadata from "@/components/blog/BlogMetadata";
import BlogPostClient from "@/components/blog/BlogPostClient";
import BlogSchema from "@/components/blog/BlogSchema";
import BlogTags from "@/components/blog/BlogTags";
import {createMdxComponents} from "@/components/blog/MDX/mdxComponents";

import type {BlogPost} from "@/types/blog";

interface BlogDetailsProps {
  post: BlogPost;
}

/**
 * Blog post details component that renders the blog post content with metadata.
 * @param {BlogDetailsProps} props - The blog post object.
 * @returns {import("react").JSX.Element} The rendered blog post with metadata.
 */
export default function Details({post}: BlogDetailsProps) {
  // Create fresh MDX components for this blog post
  const mdxComponents = createMdxComponents();

  return (
    <article
      className="mx-auto max-w-3xl py-12"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Schema.org structured data */}
      <BlogSchema post={post} />

      {/* Article header */}
      <BlogHeader post={post} />

      {/* Featured image */}
      <BlogImage post={post} />

      {/* Blog post metadata */}
      <BlogMetadata post={post} />

      {/* Tags */}
      <BlogTags post={post} />

      {/* Client-side wrapper for interactive features */}
      <BlogPostClient
        postTitle={post.title}
        postDescription={post.description}
        postDate={post.date}
      >
        <MDXRemote source={post.content} components={mdxComponents} />
      </BlogPostClient>
    </article>
  );
}

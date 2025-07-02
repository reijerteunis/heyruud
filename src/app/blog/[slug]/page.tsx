import BlogError from "@/components/blog/BlogError";
import Details from "@/components/blog/Details";
import {getBlogPost} from "@/lib/blog";

import type {Metadata} from "next";

interface BlogPageProps {
  params: Promise<{slug: string}>;
}

/**
 * Generates metadata (title, description) for the blog post page based on the MDX frontmatter.
 * @param {BlogPageProps} props - The route parameters containing the slug.
 * @returns {Promise<Metadata>} The metadata object for the page.
 */
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const {slug} = await params;
  const result = await getBlogPost(slug);

  if ("code" in result) {
    return {
      title: `Post Not Found - ${slug}`,
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: result.title,
    description: result.description,
  };
}

/**
 * Dynamic blog post page. Loads and renders the MDX file matching the slug parameter.
 * @param {BlogPageProps} props - The route parameters containing the slug.
 * @returns {Promise<import("react").JSX.Element>} The rendered blog post page or error component.
 */
export default async function BlogPage({params}: BlogPageProps) {
  const {slug} = await params;
  const result = await getBlogPost(slug);

  if ("code" in result) {
    return <BlogError error={result} />;
  }

  return <Details post={result} />;
}

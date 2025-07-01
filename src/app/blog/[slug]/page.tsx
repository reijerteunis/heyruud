import fs from "fs";
import path from "path";

import matter from "gray-matter";
import Image from "next/image";
import {MDXRemote} from "next-mdx-remote/rsc";

import {mdxComponents} from "@/components/blog/MDX/mdxComponents";

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
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  let source;
  try {
    source = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error("Error reading blog post:", err);
    return {
      title: slug,
      description: "",
    };
  }
  const {data} = matter(source);
  return {
    title: data.title || slug,
    description: data.description || "",
  };
}

/**
 * Dynamic blog post page. Loads and renders the MDX file matching the slug parameter.
 * @param {BlogPageProps} props - The route parameters containing the slug.
 * @returns {Promise<import("react").JSX.Element>} The rendered blog post page or a not found message.
 */
export default async function BlogPage({params}: BlogPageProps) {
  const {slug} = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return <div>Post not found.</div>;
  }
  let source;
  try {
    source = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error("Error reading blog post:", err);
    return <div>Post not found.</div>;
  }
  const {content, data} = matter(source);
  return (
    <article className="mx-auto max-w-3xl py-12">
      {data.image && (
        <Image
          src={data.image}
          alt={data.title || slug}
          width={1000}
          height={1000}
          className="mb-8 rounded"
        />
      )}
      <div
        className={`
          mb-6 flex flex-row items-center gap-4 text-sm text-black-200
        `}
      >
        {data.author && <span>By {data.author}</span>}
        {data.date && (
          <span>
            {new Date(data.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        )}
      </div>
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  );
}

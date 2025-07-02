import Link from "next/link";

import type {BlogPostError} from "@/types/blog";

interface BlogErrorProps {
  error: BlogPostError;
}

/**
 * Blog error component that displays different error states with helpful messages.
 * @param {BlogErrorProps} props - The error object containing code, message, and slug.
 * @returns {import("react").JSX.Element} The error display component.
 */
export default function BlogError({error}: BlogErrorProps) {
  const getErrorContent = () => {
    switch (error.code) {
      case "NOT_FOUND":
        return {
          title: "Post Not Found",
          message: "The blog post you're looking for doesn't exist.",
          action: "Browse all posts",
          href: "/blog",
        };
      case "INVALID_CONTENT":
        return {
          title: "Invalid Content",
          message:
            "This blog post has invalid content and cannot be displayed.",
          action: "Go back home",
          href: "/",
        };
      case "READ_ERROR":
        return {
          title: "Loading Error",
          message:
            "There was an error loading this blog post. Please try again later.",
          action: "Go back home",
          href: "/",
        };
      default:
        return {
          title: "Something went wrong",
          message: "An unexpected error occurred.",
          action: "Go back home",
          href: "/",
        };
    }
  };

  const content = getErrorContent();

  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          {content.title}
        </h1>
        <p className="mb-6 text-lg text-gray-600">{content.message}</p>
        {error.code === "NOT_FOUND" && (
          <p className="mb-6 text-sm text-gray-500">
            Slug:{" "}
            <code className="rounded bg-gray-100 px-2 py-1">{error.slug}</code>
          </p>
        )}
      </div>

      <Link
        href={content.href}
        className={`
          inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm
          font-medium text-white
          hover:bg-blue-700
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          focus:outline-none
        `}
      >
        {content.action}
      </Link>
    </div>
  );
}

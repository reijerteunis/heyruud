"use client";

import {useEffect, useState} from "react";

interface BlogPostClientProps {
  children: React.ReactNode;
  postTitle: string;
  postDescription: string;
  postDate: string;
}

/**
 * Client-side wrapper for blog post interactive features.
 * Handles reading progress and share functionality.
 * @param {BlogPostClientProps} props - The blog post data and children.
 * @returns {import("react").JSX.Element} The client-side blog post wrapper.
 */
export default function BlogPostClient({
  children,
  postTitle,
  postDescription,
  postDate,
}: BlogPostClientProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress indicator
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-200"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={readingProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-yellow-500 transition-all duration-300 ease-out"
          style={{width: `${readingProgress}%`}}
        />
      </div>

      {/* Main content */}
      <div className="max-w-none" itemProp="articleBody">
        {children}
      </div>

      {/* Article footer */}
      <footer className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Published on {new Date(postDate).toLocaleDateString()}</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                navigator
                  .share?.({
                    title: postTitle,
                    text: postDescription,
                    url: window.location.href,
                  })
                  .catch(() => {
                    // Fallback: copy URL to clipboard
                    navigator.clipboard.writeText(window.location.href);
                  });
              }}
              className={`
                transition-colors
                hover:text-yellow-500
              `}
              aria-label="Share this article"
            >
              Share
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

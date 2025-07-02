"use client";

import * as React from "react";

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}

/**
 * Table of Contents component for blog posts.
 * Provides navigation links to different sections of the article.
 * @param {TableOfContentsProps} props - The headings data.
 * @returns {import("react").JSX.Element} The table of contents component.
 */
export default function TableOfContents({headings}: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    headings.forEach(({id}) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      className={`
        sticky top-8 hidden max-h-[calc(100vh-4rem)] overflow-y-auto
        lg:block
      `}
      aria-label="Table of contents"
    >
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`
                block text-sm transition-colors duration-200
                ${
                  heading.level === 2
                    ? "pl-0 font-medium"
                    : `pl-4 text-gray-600`
                }
                ${
                  activeId === heading.id
                    ? "text-yellow-500"
                    : `
                      text-gray-700
                      hover:text-yellow-500
                    `
                }
              `}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({behavior: "smooth"});
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

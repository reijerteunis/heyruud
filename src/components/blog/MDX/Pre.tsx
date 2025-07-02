"use client";

import * as React from "react";

import {preVariants} from "./styles";
import {PreProps} from "./types";

export const Pre: React.FC<PreProps> = ({children, className, ...props}) => {
  const [copied, setCopied] = React.useState(false);
  const preRef = React.useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      const textToCopy =
        codeElement?.textContent || preRef.current.textContent || "";

      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Silently handle clipboard errors
        setCopied(false);
      }
    }
  };

  return (
    <div className="group relative">
      <pre
        ref={preRef}
        className={preVariants({className})}
        itemProp="text"
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className={`
          absolute top-2 right-2 rounded bg-black-700 px-2 py-1 text-xs
          font-medium text-gray-300 opacity-0 transition-opacity duration-200
          group-hover:opacity-100
          hover:bg-black-700 hover:text-white
          focus:opacity-100 focus:ring-2 focus:ring-yellow-500
          focus:outline-none
        `}
        aria-label={copied ? "Copied!" : "Copy code block"}
        title={copied ? "Copied!" : "Copy code block"}
      >
        {copied ? "✓ Copied!" : "📋 Copy"}
      </button>
    </div>
  );
};

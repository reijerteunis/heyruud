"use client";

import * as React from "react";

import {codeVariants} from "./styles";
import {CodeProps} from "./types";

export const Code: React.FC<CodeProps> = ({children, className, ...props}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (typeof children === "string") {
      try {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Silently handle clipboard errors
        setCopied(false);
      }
    }
  };

  return (
    <code className={codeVariants({className})} itemProp="text" {...props}>
      {children}
      {typeof children === "string" && children.length > 10 && (
        <button
          onClick={handleCopy}
          className={`
            ml-2 text-xs text-gray-400 transition-colors
            hover:text-yellow-500
          `}
          aria-label={copied ? "Copied!" : "Copy code"}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? "✓" : "📋"}
        </button>
      )}
    </code>
  );
};

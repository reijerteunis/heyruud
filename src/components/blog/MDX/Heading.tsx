"use client";

import * as React from "react";

import {headingVariants} from "./styles";
import {HeadingProps} from "./types";

const tagMap = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

type TagType = keyof React.JSX.IntrinsicElements;

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  id,
  ...props
}) => {
  const Tag = tagMap[level] as TagType;

  // Generate ID from children if not provided
  const headingId =
    id ||
    (typeof children === "string"
      ? children
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      : undefined);

  // Add appropriate itemProp for headings
  const headingProps = {
    ...props,
    id: headingId,
    itemProp: level === 1 ? "headline" : undefined,
  };

  return React.createElement(
    Tag,
    {className: headingVariants({level, className}), ...headingProps},
    children,
  );
};

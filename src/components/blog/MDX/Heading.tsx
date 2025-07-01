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
  ...props
}) => {
  const Tag = tagMap[level] as TagType;
  return React.createElement(
    Tag,
    {className: headingVariants({level, className}), ...props},
    children,
  );
};

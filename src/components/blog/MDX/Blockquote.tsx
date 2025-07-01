import * as React from "react";

import {blockquoteVariants} from "./styles";
import {BlockquoteProps} from "./types";

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  className,
  ...props
}) => (
  <blockquote className={blockquoteVariants({className})} {...props}>
    {children}
  </blockquote>
);

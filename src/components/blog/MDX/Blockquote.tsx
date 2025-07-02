import * as React from "react";

import {blockquoteVariants} from "./styles";
import {BlockquoteProps} from "./types";

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  className,
  ...props
}) => (
  <blockquote
    className={blockquoteVariants({className})}
    itemProp="text"
    role="blockquote"
    {...props}
  >
    <div className="flex items-start gap-3">
      <span className="mt-1 text-2xl text-yellow-500" aria-hidden="true">
        "
      </span>
      <div className="flex-1">{children}</div>
      <span className="mt-1 text-2xl text-yellow-500" aria-hidden="true">
        "
      </span>
    </div>
  </blockquote>
);

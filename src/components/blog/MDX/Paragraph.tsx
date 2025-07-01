import * as React from "react";

import {paragraphVariants} from "./styles";
import {ParagraphProps} from "./types";

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...props
}) => (
  <p className={paragraphVariants({className})} {...props}>
    {children}
  </p>
);

import * as React from "react";

import {codeVariants} from "./styles";
import {CodeProps} from "./types";

export const Code: React.FC<CodeProps> = ({children, className, ...props}) => (
  <code className={codeVariants({className})} {...props}>
    {children}
  </code>
);

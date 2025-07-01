import * as React from "react";

import {preVariants} from "./styles";
import {PreProps} from "./types";

export const Pre: React.FC<PreProps> = ({children, className, ...props}) => (
  <pre className={preVariants({className})} {...props}>
    {children}
  </pre>
);

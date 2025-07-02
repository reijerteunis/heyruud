import * as React from "react";

import {subtitleVariants} from "./styles";

export const SubTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h2
    className={subtitleVariants({className})}
    itemProp="alternativeHeadline"
    {...props}
  >
    {children}
  </h2>
);

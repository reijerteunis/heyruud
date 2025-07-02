import * as React from "react";

import {
  unorderedListVariants,
  orderedListVariants,
  listItemVariants,
} from "./styles";
import {ListProps, ListItemProps} from "./types";

export const List: React.FC<ListProps> = ({
  type,
  children,
  className,
  ...props
}) => {
  if (type === "ol") {
    return (
      <ol
        className={orderedListVariants({className})}
        itemProp="text"
        {...props}
      >
        {children}
      </ol>
    );
  }
  return (
    <ul
      className={unorderedListVariants({className})}
      itemProp="text"
      {...props}
    >
      {children}
    </ul>
  );
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  ...props
}) => (
  <li className={listItemVariants({className})} itemProp="text" {...props}>
    {children}
  </li>
);

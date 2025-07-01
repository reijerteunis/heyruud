import Link from "next/link";

import {buttonVariants, iconStyles} from "./styles";
import {ButtonProps} from "./types";

const Button = ({
  href,
  children,
  leadingIcon,
  trailingIcon,
  ariaLabel,
  external,
  className,
  size,
}: ButtonProps) => {
  const isExternal = external || href.startsWith("http");

  return (
    <Link
      href={href}
      className={buttonVariants({className, size})}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      role="button"
      tabIndex={0}
    >
      {leadingIcon && (
        <span className={iconStyles} aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <span>{children}</span>
      {trailingIcon && (
        <span className={iconStyles} aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </Link>
  );
};

export default Button;

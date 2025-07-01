import {buttonVariants} from "./styles";

import type {VariantProps} from "class-variance-authority";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  ariaLabel?: string;
  external?: boolean;
  className?: string;
  // size?: "md" | "lg" | "xl"; // Available via VariantProps
}

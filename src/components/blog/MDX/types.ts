import {HTMLAttributes, ReactNode} from "react";

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
}

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

export interface ListProps
  extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  type: "ul" | "ol";
  children: ReactNode;
  className?: string;
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
}

export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export interface PreProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

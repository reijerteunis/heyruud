import React from "react";

import {Blockquote} from "./Blockquote";
import {CallToAction} from "./CallToAction";
import {Code} from "./Code";
import {Heading} from "./Heading";
import {List, ListItem} from "./List";
import {Paragraph} from "./Paragraph";
import {Pre} from "./Pre";
import {SubTitle} from "./SubTitle";

export const mdxComponents = {
  h1: ({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={1} {...props}>
      {children}
    </Heading>
  ),
  h2: ({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={2} {...props}>
      {children}
    </Heading>
  ),
  h3: ({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={3} {...props}>
      {children}
    </Heading>
  ),
  h4: ({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={4} {...props}>
      {children}
    </Heading>
  ),
  p: ({children, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Paragraph {...props}>{children}</Paragraph>
  ),
  ul: ({children, ...props}: React.HTMLAttributes<HTMLUListElement>) => (
    <List type="ul" {...props}>
      {children}
    </List>
  ),
  ol: ({children, ...props}: React.HTMLAttributes<HTMLOListElement>) => (
    <List type="ol" {...props}>
      {children}
    </List>
  ),
  li: ({children, ...props}: React.HTMLAttributes<HTMLLIElement>) => (
    <ListItem {...props}>{children}</ListItem>
  ),
  blockquote: ({children, ...props}: React.HTMLAttributes<HTMLElement>) => (
    <Blockquote {...props}>{children}</Blockquote>
  ),
  code: ({children, ...props}: React.HTMLAttributes<HTMLElement>) => (
    <Code {...props}>{children}</Code>
  ),
  pre: ({children, ...props}: React.HTMLAttributes<HTMLElement>) => (
    <Pre {...props}>{children}</Pre>
  ),
  SubTitle: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <SubTitle {...props}>{children}</SubTitle>
  ),
  CallToAction: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <CallToAction {...props}>{children}</CallToAction>
  ),
};

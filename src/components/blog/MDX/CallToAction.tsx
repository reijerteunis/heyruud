import {IconArrowRight} from "@tabler/icons-react";
import * as React from "react";

import {Button} from "@/components/shared/Button";

export const CallToAction: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div
    className={`
      my-8 inline-flex flex-col gap-8 rounded-xl border-l-4 border-yellow-500
      bg-black-800 p-6 text-lg font-medium shadow-md
    `}
    itemProp="text"
    {...props}
  >
    {children}
    <Button
      className="w-fit"
      href="https://www.linkedin.com/in/ruudvanengelenhoven/"
      trailingIcon={<IconArrowRight />}
      size="md"
    >
      Let's connect
    </Button>
  </div>
);

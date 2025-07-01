import {cva} from "class-variance-authority";

export const headingVariants = cva("", {
  variants: {
    level: {
      1: "mt-10 mb-6 text-4xl font-bold text-yellow-500",
      2: "mt-8 mb-4 text-3xl font-semibold text-black-100",
      3: "mt-6 mb-3 text-2xl font-medium text-black-100",
      4: "mt-4 mb-2 text-xl font-semibold text-yellow-100",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export const paragraphVariants = cva("mb-4 text-black-100");
export const unorderedListVariants = cva("mb-4 list-disc pl-6");
export const orderedListVariants = cva("mb-4 list-decimal pl-6");
export const listItemVariants = cva("mb-1 text-black-100");
export const blockquoteVariants = cva(
  "my-6 border-l-4 border-yellow-500 pl-4 text-black-100 italic",
);
export const codeVariants = cva(
  "rounded bg-black-800 px-1 py-0.5 text-yellow-500",
);
export const preVariants = cva("mb-4 overflow-x-auto rounded bg-black-800 p-4");
export const subtitleVariants = cva(
  "mt-8 mb-4 text-xl font-medium text-yellow-500",
);

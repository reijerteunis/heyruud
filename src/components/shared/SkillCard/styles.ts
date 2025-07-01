import {cva} from "class-variance-authority";

export const skillCard = cva("flex flex-col items-start justify-start gap-4", {
  variants: {},
  defaultVariants: {},
});

export const skillCardTitle = cva("text-yellow-500 uppercase", {
  variants: {},
  defaultVariants: {},
});

export const skillCardList = cva(
  `
    flex list-inside list-disc flex-col items-start justify-start gap-2 text-lg
    font-normal text-black-100
  `,
  {
    variants: {},
    defaultVariants: {},
  },
);

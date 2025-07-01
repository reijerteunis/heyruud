import {cva} from "class-variance-authority";

export const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-1.5 overflow-hidden
    transition-all duration-300 ease-in-out
  `,
  {
    variants: {
      variant: {
        default: [
          "rounded-lg bg-black-800 px-6 py-4",
          `
            shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18)]
          `,
          "uppercase outline-1 outline-offset-[-1px] outline-yellow-500",
          "hover:scale-105 hover:bg-black-700",
          `
            hover:shadow-[0px_2px_4px_0px_rgba(10,13,18,0.1),inset_0px_-1px_0px_0px_rgba(10,13,18,0.1),inset_0px_0px_0px_1px_rgba(10,13,18,0.25)]
          `,
          "focus:scale-105 focus:bg-black-700",
          `
            focus:shadow-[0px_2px_4px_0px_rgba(10,13,18,0.1),inset_0px_-1px_0px_0px_rgba(10,13,18,0.1),inset_0px_0px_0px_1px_rgba(10,13,18,0.25)]
          `,
          `
            focus-visible:ring-2 focus-visible:ring-yellow-400
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-yellow-400
          `,
          "active:scale-95",
          `
            active:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18)]
          `,
        ],
      },
      size: {
        md: ["px-4 py-2 text-base"],
        lg: ["px-5 py-3 text-lg"],
        xl: ["px-6 py-4 text-xl"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  },
);

export const iconStyles = "flex items-center justify-center text-yellow-500";

export const buttonFocusStyles =
  "focus-visible:outline-2 focus-visible:outline-yellow-400 focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-opacity-50";

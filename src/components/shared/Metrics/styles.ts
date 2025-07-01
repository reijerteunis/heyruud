import {cva} from "class-variance-authority";

export const metricsContainer = cva(
  "inline-flex flex-col items-start justify-start gap-2.5",
);

export const metricsValue = cva("text-4xl font-medium text-white");

export const metricsSuffix = cva("text-yellow-500");

export const metricsLabel = cva(
  `
    text-sm leading-loose font-normal text-black-100
    md:text-base
  `,
);

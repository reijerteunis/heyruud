import React from "react";

import {
  metricsContainer,
  metricsValue,
  metricsSuffix,
  metricsLabel,
} from "./styles";

import type {MetricsProps} from "./types";

const Metrics: React.FC<MetricsProps> = ({value, valueSuffix, label}) => (
  <div className={metricsContainer()}>
    <span className="inline-flex flex-col items-start justify-center gap-1">
      <span className={metricsValue()}>
        {value}
        {valueSuffix && <span className={metricsSuffix()}>{valueSuffix}</span>}
      </span>
      <span className={metricsLabel()}>{label}</span>
    </span>
  </div>
);

export default Metrics;

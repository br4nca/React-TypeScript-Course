import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
interface ChartProps {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

const Chart: React.FC<ChartProps> = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

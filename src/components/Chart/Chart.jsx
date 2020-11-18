import React from "react";
import LineChart from "react-linechart";
import "./Chart.css";

const Chart = ({ data }) => {
  const convertedData = [
    {
      color: "steelblue",
      points: data.points,
    },
  ];
  return (
    <div className="container-chart">
      <LineChart
        width={600}
        height={400}
        data={convertedData}
        xLabel="time"
        yLabel="value"
      />
    </div>
  );
};
export default Chart;

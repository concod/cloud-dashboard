// src/components/charts/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data, title }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Usage",
        data: data.map((item) => item.usage),
        borderColor: "rgba(75, 192, 192, 0.6)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;

// components/charts/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, title }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Usage",
        data: data.map((item) => item.usage),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;

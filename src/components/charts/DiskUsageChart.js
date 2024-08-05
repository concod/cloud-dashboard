// src/components/charts/DiskUsageChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DiskUsageChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Disk Usage",
        data: data.map((item) => item.usage),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Disk Usage</h3>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DiskUsageChart;

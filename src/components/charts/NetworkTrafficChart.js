// src/components/charts/NetworkTrafficChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const NetworkTrafficChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Inbound Traffic",
        data: data.map((item) => item.inbound),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Outbound Traffic",
        data: data.map((item) => item.outbound),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h3>Network Traffic</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default NetworkTrafficChart;

// src/components/charts/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, title }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Status",
        data: data.map((item) => (item.status === "Running" ? 1 : 0)),
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;

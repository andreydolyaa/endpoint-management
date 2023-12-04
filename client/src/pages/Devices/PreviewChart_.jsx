import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

const PreviewChart = ({ cpuUsageCalculated }) => {
  const [data, setData] = useState({
    labels: cpuUsageCalculated.map((x, i) => `c${i}`),
    datasets: [
      {
        label: null,
        data: [],
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        display: false, // Set this to false to hide the y-axis labels
      },
    },
    plugins: {
      legend: {
        display: false, // Set this to false to hide the legend
      },
    },
  };

  useEffect(() => {
    updateData(cpuUsageCalculated);
    console.log(data);
  }, [cpuUsageCalculated]);

  const updateData = (cpuUsageCalculated) => {
    setData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: cpuUsageCalculated,
        },
      ],
    }));
  };

  return (
    <div style={{ maxWidth: "100%", height: "150px" }}>
      <Line data={data} options={chartOptions} style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default PreviewChart;

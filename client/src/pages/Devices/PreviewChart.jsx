import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

const PreviewChart = ({ point }) => {
  const [points, setPoints] = useState([]);
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        borderWidth: 1,
      },
    ],
  });

  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  useEffect(() => {
    updatePoints(point);
  }, [point]);

  useEffect(() => {
    updateData();
  }, [points]);

  const updatePoints = (point) => {
    if (points.length < 20) {
      setPoints((prev) => [...prev, point]);
    } else {
      const updated = [...points];
      points[updated.length - 1] = point;
      setPoints(updated);
    }
  };

  const updateData = () => {
    setData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: points,
        },
      ],
    }));
  };

  return <Line data={data} />;
};

export default PreviewChart;

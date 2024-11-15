import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./mydoughnut.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataDoghnut = {
  labels: ["Actif", "Non actif"],
  datasets: [
    {
      data: [3, 1],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)"],
      borderWidth: 1,
    },
  ],
};

const Mydoughnut = () => {
  return (
    <div className="mydoughnut">
      <div className="doughnutContainer">
        <Doughnut data={dataDoghnut} />
      </div>
    </div>
  );
};
export default Mydoughnut;

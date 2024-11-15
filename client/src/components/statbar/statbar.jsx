import React from 'react'
import { Bar } from "react-chartjs-2";
import "./statbar.scss"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

const statbar = ({ data}) => {
  return (
    <div className='statbar'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default statbar
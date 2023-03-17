import {
    Chart as ChartJS,
    ChartType,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    registerables,
  } from 'chart.js';
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ...registerables);

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
    },
  },
};
const barData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const lineData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 2000 - 1000),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 2000 - 1000),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const ChartContainer = () => {
    const items = [
        {
            type: 'pie',
            data: pieData,
            options: options
        },
        {
            type: 'bar',
            data: barData,
            options: options
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, idx) => <Chart key={idx} type={item.type} data={item.data} options={item.options} />)
            }
        </Carousel>
    )
}

export default ChartContainer;
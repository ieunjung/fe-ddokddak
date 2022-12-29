import React, { useRef, useState } from 'react';
import { Button, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

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
      text: 'Chart.js Bar Chart',
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

const StatisticsPage = () => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('pie');
  const chartBarRef = useRef();
  const chartLineRef = useRef();
  const chartPieRef = useRef();

  const changeChartType = (newType: 'bar' | 'line' | 'pie') => {
    console.log(chartPieRef.current);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (chartBarRef.current) {
      console.log(chartBarRef);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      chartBarRef.destroy();
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (chartLineRef.current && chartLineRef.current.chart) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      chartLineRef.current.chart.destroy();
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (chartPieRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      chartPieRef.current.chartInstance.destroy();
    }
    setChartType(newType);
  };
  return (
    <div>
      <h1>통계 페이지</h1>
      <Button onClick={() => changeChartType('pie')}>PIE</Button>
      <Button onClick={() => changeChartType('line')}>LINE</Button>
      <Button onClick={() => changeChartType('bar')}>BAR</Button>
      {chartType === 'pie' && <Pie data={pieData} ref={chartPieRef} redraw />}
      {chartType === 'bar' && (
        <Bar
          data={barData}
          options={options}
          width="894px"
          height="320px"
          ref={chartBarRef}
          redraw
        />
      )}
      {chartType === 'line' && (
        <Line data={lineData} options={options} ref={chartLineRef} redraw />
      )}
    </div>
  );
};

export default StatisticsPage;

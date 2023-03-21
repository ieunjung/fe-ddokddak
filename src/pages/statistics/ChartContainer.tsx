import { Container, Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  registerables,
} from 'chart.js';
import { MouseEvent, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import Carousel from 'react-material-ui-carousel';

import Circle from '@/components/common/Circle';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ...registerables);

const pieData = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      // label: '# of Votes',
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
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

/* 임시 데이터 */
const datasets = [
  { title: '업무', color: 'pink', value: 50 },
  { title: '야근', color: 'grey', value: 30 },
  { title: '출장', color: 'black', value: 90 },
];

const ChartContainer = () => {
  const carouselOption = {
    autoPlay: false,
    animation: 'slide',
    duration: 0,
    fullHeightHoverWrapper: {
      height: '100%',
      top: '0',
    },
  };

  const pieChartRef = useRef<ChartJS>(null);
  const handleClickPieChart = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = pieChartRef;

    if (!chart) {
      return;
    }

    console.log(chart.getDatasetMeta(0), event);
  };

  const barChartRef = useRef<ChartJS>(null);
  const handleClickBarChart = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = barChartRef;

    if (!chart) {
      return;
    }

    const xClick = chart.scales.x.getValueForPixel(event.nativeEvent.offsetX);
    const element = chart.getDatasetMeta(0).data[xClick];
    console.log(chart.getDatasetMeta(0), xClick, element);
  };

  return (
    <>
      <Carousel {...carouselOption}>
        <Box
          sx={{
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Chart
            ref={pieChartRef}
            type={'pie'}
            data={pieData}
            options={options}
            onClick={handleClickPieChart}
          />
        </Box>
        <Box
          sx={{ height: '400px', display: 'flex', justifyContent: 'center' }}
        >
          <Chart
            ref={barChartRef}
            type={'bar'}
            data={barData}
            options={options}
            onClick={handleClickBarChart}
          />
        </Box>
      </Carousel>

      {datasets.map((data, idx) => (
        <Box
          key={idx}
          sx={{
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '20px',
          }}
        >
          <Circle color={data.color} size={40} />
          <progress id={`progress-${idx}`} max="100" value={data.value}>
            {data.value}%
          </progress>
          <Typography>{data.title}</Typography>
        </Box>
      ))}
    </>
  );
};

export default ChartContainer;

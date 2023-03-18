import { Paper, Button } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  registerables,
} from 'chart.js';
import { MouseEvent, useRef } from 'react';
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';
import Carousel from 'react-material-ui-carousel';

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

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

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

    console.log(chart.getDatasetMeta(0));

    // console.log(getDatasetAtEvent(chart, event));
    // console.log(getElementAtEvent(chart, event));
    // console.log(getElementsAtEvent(chart, event));
  };

  const barChartRef = useRef<ChartJS>(null);
  const handleClickBarChart = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = barChartRef;

    const xClick = chart.scales.x.getValueForPixel(event.nativeEvent.offsetX);
    const element = chart.getDatasetMeta(0).data[xClick];
    console.log(chart.getDatasetMeta(0), xClick, element);
  };

  return (
    <>
      <Carousel {...carouselOption}>
        <Chart
          ref={pieChartRef}
          type={'pie'}
          data={pieData}
          options={options}
          onClick={handleClickPieChart}
        />
        <Chart
          ref={barChartRef}
          type={'bar'}
          data={barData}
          options={options}
          onClick={handleClickBarChart}
        />
      </Carousel>
    </>
  );
};

export default ChartContainer;

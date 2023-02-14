import { Button, Box, AppBar, Tabs, Tab } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  registerables,
} from 'chart.js';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

import CommonHeader from '@/components/layout/CommonHeader';
import SubHeader from '@/components/layout/SubHeader';

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

const periodTypes = ['일별', '주별', '달별', '연별'] as const;

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const StatisticsPage = () => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('pie');

  const chartData = {
    bar: barData,
    line: lineData,
    pie: pieData,
  };

  const changeChartType = (newType: 'bar' | 'line' | 'pie') => {
    setChartType(newType);
  };

  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const [periodType, setPeriodType] = useState(0);

  const handlePeriodTypeChange = (event: SyntheticEvent, newValue: number) => {
    setPeriodType(newValue);
  };

  return (
    <>
      <CommonHeader title={'통계'} isShowBackButton={true} />
      {/* <SubHeader titleList={['일별', '주별', '달별', '연별']} /> */}
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static">
          <Tabs
            value={periodType}
            onChange={handlePeriodTypeChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs"
          >
            {periodTypes.map((title, idx) => (
              <Tab
                key={'sub-header-' + idx}
                label={title}
                {...a11yProps(idx)}
              />
            ))}
          </Tabs>
        </AppBar>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="koKR">
          <DatePicker
            inputFormat="MM월 DD일 x요일"
            value={value}
            onChange={handleChange}
            renderInput={(params: TextFieldProps) => <TextField {...params} />}
          />
          {/* <DatePicker
            label="일별"
            value={value}
            onChange={(newValue) => {
              console.log(newValue);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )}
          /> */}
        </LocalizationProvider>
      </Box>
      {/* <Button onClick={() => changeChartType('bar')}>BAR</Button> */}
      <Chart type={chartType} data={chartData[chartType]} options={options} />
    </>
  );
};

export default StatisticsPage;

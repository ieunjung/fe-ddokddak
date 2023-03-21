import { AppBar, Tabs, Tab, Box, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState, SyntheticEvent, useEffect } from 'react';

import WeekPicker from './WeekPicker';

dayjs.extend(utc);

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type PeriodType = 'BY_DAY' | 'BY_WEEK' | 'BY_MONTH' | 'BY_YEAR';

export interface IPeriodType {
  title: string;
  id: PeriodType;
}

const periodTypeList: IPeriodType[] = [
  { title: '일별', id: 'BY_DAY' },
  { title: '주별', id: 'BY_WEEK' },
  { title: '월별', id: 'BY_MONTH' },
  { title: '연별', id: 'BY_YEAR' },
];

const Period = () => {
  const [periodType, setPeriodType] = useState<PeriodType>(
    periodTypeList[0].id,
  );
  const handlePeriodChange = (e: SyntheticEvent, value: PeriodType) => {
    setPeriodType(value);
  };

  const currDate = new Date().toISOString().slice(0, 10);
  const [value, setValue] = useState(dayjs(currDate));

  useEffect(() => {
    if (periodType === 'BY_DAY') {
      console.log('BY_DAY: ', value);
    } else if (periodType === 'BY_MONTH') {
      console.log('BY_MONTH: ', value.month() + 1);
    } else if (periodType === 'BY_WEEK') {
      console.log('BY_WEEK: ', value);
    } else if (periodType === 'BY_YEAR') {
      console.log('BY_YEAR: ', value.year());
    }
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* 날짜 선택 타입 시작 */}
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static">
          <Tabs
            value={periodType}
            onChange={handlePeriodChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs"
          >
            {periodTypeList.map((period, idx) => (
              <Tab
                key={'period-selector-' + idx}
                label={period.title}
                value={period.id}
                {...a11yProps(idx)}
              />
            ))}
          </Tabs>
        </AppBar>
      </Box>
      {/* 날짜 선택 타입 끝 */}

      {/* 날짜 선택 시작 */}
      <Grid
        container
        sx={{
          direction: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
          borderBottom: 1,
        }}
      >
        {periodType === 'BY_DAY' && (
          <TextField
            type="date"
            value={value}
            onChange={(newValue) => {
              setValue(dayjs(newValue.target.value));
            }}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: '2023-01-01',
              max: currDate,
            }}
          />
        )}
        {periodType === 'BY_WEEK' && (
          <WeekPicker value={value} setValue={setValue} />
        )}
        {periodType === 'BY_MONTH' && (
          <DatePicker
            views={['year', 'month']}
            value={value}
            minDate={dayjs('2023-01-01')}
            maxDate={dayjs(currDate)}
            onChange={(newValue: any) => {
              if (!newValue) {
                return;
              }
              setValue(newValue);
            }}
            renderInput={(params: any) => (
              <TextField {...params} helperText={null} />
            )}
          />
        )}
        {periodType === 'BY_YEAR' && (
          <DatePicker
            views={['year']}
            value={value}
            minDate={dayjs('2023-01-01')}
            maxDate={dayjs(currDate)}
            onChange={(newValue: any) => {
              if (!newValue) {
                return;
              }
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        )}
      </Grid>
      {/* 날짜 선택 끝 */}
    </LocalizationProvider>
  );
};

export default Period;

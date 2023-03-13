import { AppBar, Tabs, Tab, Box, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { useState, SyntheticEvent } from 'react';

import WeekPicker from './WeekPicker';
import WeekPicker2 from './WeekPickerDay2';

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
  const [periodType, setPeriodType] = useState(periodTypeList[0].id);
  const handlePeriodChange = (e: SyntheticEvent, value: any) => {
    setPeriodType(value);
  };

  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-07'));
  const currDate = new Date().toISOString().slice(0, 10);

  interface ICommonState {
    value: Dayjs | null;
    minDate: Dayjs;
    maxDate: Dayjs;
    defaultValue: string;
    onChange: Function;
  }

  const commonState: ICommonState = {
    value,
    minDate: dayjs('2022-01-01'),
    maxDate: dayjs(currDate),
    defaultValue: currDate,
    onChange: (newValue: any) => {
      setValue(newValue);
    }
  }

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
            {...commonState}
            onChange={(newValue) => {
              console.log(newValue);
            }}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        {periodType === 'BY_WEEK' && (
          // <WeekPicker value={value} setValue={setValue} />
          <WeekPicker2 value={value} setValue={setValue} />
        )}
        {periodType === 'BY_MONTH' && (
          <DatePicker
            views={['year', 'month']}
            {...commonState}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} helperText={null} />}
          />
        )}
        {periodType === 'BY_YEAR' && (
          <DatePicker
            views={['year']}
            {...commonState}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
          />
        )}
      </Grid>
      {/* 날짜 선택 끝 */}
    </LocalizationProvider>
  );
};

export default Period;

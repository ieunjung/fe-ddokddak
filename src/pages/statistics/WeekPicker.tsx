import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
// import isBetweenPlugin from 'dayjs/plugin/isBetween';
// import weekdayPlugin from 'dayjs/plugin/weekday';
import { useState } from 'react';

import SelectBox from '@/components/common/SelectBox';

// dayjs.extend(isBetweenPlugin);
// dayjs.extend(weekdayPlugin);

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
})) as React.ComponentType<CustomPickerDayProps>;

const WeekPicker = ({value, setValue}: any) => {

  const renderWeekPickerDay = (
    date: Dayjs,
    selectedDates: Array<Dayjs | null>,
    pickersDayProps: PickersDayProps<Dayjs>,
  ) => {

    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }
    
    const start = value.startOf('week');
    const end = value.endOf('week');

    // console.log('start : ', value.startOf('week'));
    // console.log(end);

    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  const [startOfWeek, setStartOfWeek] = useState('S')
  const handleTypeCallback = (value: any) => {
    setStartOfWeek(value);

    // console.log(dayjs().weekday());
    // if(value === 'S'){
    //   dayjs().weekday(7);
    // }else if(value === 'M'){
    //   dayjs().weekday(0);
    // }
  }

  return (
    <>
      <SelectBox label='시작 요일' value={startOfWeek} optionList={[{title: '일', value: 'S'}, {title: '월', value: 'M'}]} callback={handleTypeCallback} />
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="M월 d일"
      />
    </>
  );
}

export default WeekPicker;

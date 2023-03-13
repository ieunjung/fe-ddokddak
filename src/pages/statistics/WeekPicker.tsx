import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

dayjs.extend(isBetweenPlugin);

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

// function Day(props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }) {
//   const { day, selectedDay, ...other } = props;

//   if (selectedDay == null) {
//     return <PickersDay day={day} {...other} />;
//   }

//   const start = selectedDay.startOf('week');
//   const end = selectedDay.endOf('week');

//   const dayIsBetween = day.isBetween(start, end, null, '[]');
//   const isFirstDay = day.isSame(start, 'day');
//   const isLastDay = day.isSame(end, 'day');

//   return (
//     <CustomPickersDay
//       {...other}
//       day={day}
//       disableMargin
//       dayIsBetween={dayIsBetween}
//       isFirstDay={isFirstDay}
//       isLastDay={isLastDay}
//     />
//   );
// }

// export default Day;
// export default function CustomDay({value, setValue}: any) {
//   return (
//     <DateCalendar
//       value={value}
//       onChange={(newValue: any) => setValue(newValue)}
//       slots={{ day: Day }}
//       slotProps={{
//         day: {
//           selectedDay: value,
//         } as any,
//       }}
//     />
//   );
// }

const WeekPicker = ({value, setValue}: any) => {
  console.log(value);
    
  const renderWeekPickerDay = (
    date: Dayjs,
    selectedDates: Array<Dayjs | null>,
    pickersDayProps: PickersDayProps<Dayjs>,
  ) => {

    console.log(selectedDates, date);
    
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value.startOf('week');
    const end = value.endOf('week');

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

  return (
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
      }}
      renderDay={renderWeekPickerDay}
      renderInput={(params) => <TextField {...params} />}
      inputFormat="'Week of' MMM d"
    />
  );
}

export default WeekPicker;

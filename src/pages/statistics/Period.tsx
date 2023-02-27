import { AppBar, Tabs, Tab, Box, Grid, TextField } from '@mui/material';
import { useState, SyntheticEvent } from 'react';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export interface IPeriodType {
  title: string;
  id: string;
}

const periodTypeList: IPeriodType[] = [
  { title: '일별', id: 'BY_DAY' },
  { title: '주별', id: 'BY_WEEK' },
  { title: '월별', id: 'BY_MONTH' },
  { title: '연별', id: 'BY_YEAR' },
];

const Period = () => {
  const [periodType, setPeriodType] = useState(periodTypeList[0].id);

  const handleChange = (e: SyntheticEvent, value: any) => {
    setPeriodType(value);
  };

  return (
    <>
      {/* 날짜 선택 타입 시작 */}
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static">
          <Tabs
            value={periodType}
            onChange={handleChange}
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
            id="date"
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      </Grid>
      {/* 날짜 선택 끝 */}
    </>
  );
};

export default Period;

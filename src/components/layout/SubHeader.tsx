import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface SubHeaderProps {
  titleList: string[];
}

export default function SubHeader(props: SubHeaderProps) {
  const [periodType, setPeriodType] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPeriodType(newValue);
  };

  return (
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
          {props.titleList.map((title, idx) => (
            <Tab key={'sub-header-' + idx} label={title} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </AppBar>
    </Box>
  );
}

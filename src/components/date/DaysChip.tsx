import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface DaysChipProps {
  title: string;
  isSelected: boolean;
}

const useStyles = makeStyles({
  chip: {
    padding: '8px',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    textAlign: 'center',
  },

  selectedChip: {
    backgroundColor: 'aqua',
  },
});

const DaysChip = (props: DaysChipProps) => {
  const classes = useStyles();
  return (
    <Box
      className={`${classes.chip} ${
        props.isSelected ? classes.selectedChip : ''
      }`}
    >
      <Typography>{props.title}</Typography>
    </Box>
  );
};

export default DaysChip;

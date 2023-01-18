import { Box, Typography } from '@mui/material';
import './DaysChip.css';

export interface DaysChipProps {
  title: string;
  isSelected: boolean;
}

const DaysChip = (props: DaysChipProps) => {
  return (
    <Box className={`chip ${props.isSelected ? 'selectedChip' : ''}`}>
      <Typography>{props.title}</Typography>
    </Box>
  );
};

export default DaysChip;

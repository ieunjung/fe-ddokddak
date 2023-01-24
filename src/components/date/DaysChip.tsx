import { Box, Typography } from '@mui/material';

export interface DaysChipProps {
  title: string;
  isSelected: boolean;
}

const DaysChip = (props: DaysChipProps) => {
  return (
    <Box
      sx={{
        padding: '8px',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        textAlign: 'center',
        backgroundColor: `${props.isSelected && 'aqua'}`,
      }}
    >
      <Typography>{props.title}</Typography>
    </Box>
  );
};

export default DaysChip;

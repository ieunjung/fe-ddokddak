import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
export interface CircleProps {
  size: number;
  color: any;
  onClick: any;
  variant: 'filled' | 'outlined';
  label?: string;
  selected?: boolean;
}

const useStyles = makeStyles(() => ({
  filledCircle: (props: CircleProps) => ({
    width: props.size + 'px',
    height: props.size + 'px',
    backgroundColor: props.color,
    borderRadius: '50%',
  }),
  outlinedCircle: (props: CircleProps) => ({
    width: props.size + 'px',
    height: props.size + 'px',
    boxShadow: `0 0 0 2px ${props.color} inset`,
    borderRadius: '50%',
  }),
  selected: {
    border: '2px solid red',
  },
}));

const Circle = (props: CircleProps) => {
  const classes = useStyles(props);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className={`${classes.filledCircle} ${props.selected ?? classes.selected}`} />

      {props.label && (
        <Typography
          variant="subtitle2"
          sx={{
            padding: '8px',
          }}
        >
          {props.label}
        </Typography>
      )}
    </div>
  );
};

export default Circle;

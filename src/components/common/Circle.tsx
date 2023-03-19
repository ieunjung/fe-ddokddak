import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export interface CircleProps {
  size: number;
  color: any;
  onClick?: any;
  label?: string;
  selected?: boolean;
}

const Circle = (props: CircleProps) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {props.selected ? (
        <div
          style={{
            width: props.size + 'px',
            height: props.size + 'px',
            backgroundColor: props.color,
            borderRadius: '50%',
            border: '2px solid red',
          }}
        />
      ) : (
        <div
          style={{
            width: props.size + 'px',
            height: props.size + 'px',
            backgroundColor: props.color,
            boxShadow: `0 0 0 2px ${props.color} inset`,
            borderRadius: '50%',
          }}
        />
      )}

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

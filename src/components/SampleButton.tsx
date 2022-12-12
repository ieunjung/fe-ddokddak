import { Button } from '@mui/material';
import React from 'react';


export interface SampleButtonProps {
  title: string;
}

const SampleButton = (props: SampleButtonProps) => {
  return <Button>{props.title}</Button>;
};

export default SampleButton;

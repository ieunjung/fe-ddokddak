import { Button } from '@mui/material';
import React from 'react';

export interface SampleButtonProps {
  title: string;
}

const SampleButton = (props: SampleButtonProps) => {
  return (
    <>
      <Button color="primary">{props.title}</Button>
      <Button color="secondary">{props.title}</Button>
      <Button color="error">{props.title}</Button>
      <Button color="warning">{props.title}</Button>
    </>
  );
};

export default SampleButton;

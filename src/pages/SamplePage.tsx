import { Typography } from '@mui/material';
import SampleButton from '../components/SampleButton';
import React from 'react';

const SamplePage = () => {
  return (
    <>
      <Typography variant="h1">HELLO! </Typography>
      <Typography variant="h2">This is DDOK-DDAK!</Typography>
      <SampleButton title="say hi!" />
    </>
  );
};

export default SamplePage;

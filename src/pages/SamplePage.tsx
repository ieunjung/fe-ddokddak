import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { getDummyUsers, UsersResponse } from '@/api/sample.api';
import SampleButton from '@/components/SampleButton';

const SamplePage = () => {
  const [users, setUsers] = useState<UsersResponse>();

  const search = async () => {
    const data = await getDummyUsers();
    console.log(data);
    setUsers(data);
  };

  return (
    <>
      <Typography variant="h1">HELLO! </Typography>
      <Typography variant="h2">This is DDOK-DDAK!</Typography>
      <SampleButton title="say hi!" />
      <Box>
        <Button onClick={search}>조회하기!</Button>
        <Button onClick={() => setUsers(undefined)}>리셋</Button>
      </Box>
      {users && <p>{users?.total}명이 조회되었습니다.</p>}
      {users &&
        users?.users?.map((el) => (
          <div
            key={el.userId}
          >{`First name : ${el.firstname}, Last name : ${el.lastname}`}</div>
        ))}
    </>
  );
};

export default SamplePage;

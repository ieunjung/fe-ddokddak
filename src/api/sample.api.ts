import { callAPI } from './common/api';

interface User {
  userId: string;
  firstname: string;
  lastname: string;
  friends: { id: string }[];
}

export interface UsersResponse {
  users: User[];
  total: string;
}

export const getDummyUsers = async (): Promise<UsersResponse> => {
  const response = await callAPI({
    url: `/users`,
    method: 'GET',
  });

  const returnData:UsersResponse ={
    users: response.users,
    total: response.total,
  }

  return returnData;
};

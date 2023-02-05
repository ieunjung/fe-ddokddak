import { callAPI } from './common/api';

export interface StaticsResponse {
  
}

export const getTest = async (): Promise<StaticsResponse> => {
  const response = await callAPI({
    url: `/users`,
    method: 'GET',
  });

  const returnData:StaticsResponse ={
    users: response.users,
    total: response.total,
  }

  return returnData;
};
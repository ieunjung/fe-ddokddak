import { Method } from 'axios';

import CommonResponse, { getInstance } from '../http';

export interface APIContract {
  method: Method;
  url: string;
  params?: object;
  body?: object;
}

export const callAPI = async <T = any>(
  { url, method, params, body }: APIContract,
  isLoading?: boolean,
): Promise<any> => {
  let response: CommonResponse = {
    successOrNot: 'N',
    statusCode: '',
    data: {},
  };

  try {
    response = await getInstance(isLoading).request({
      url,
      method,
      params,
      data: body,
    });
  } catch (error) {
    response.data = error;
  }

  // return response as CommonResponse<T>; 추후에 response 정해지면 any 대신 사용
  return response as any;
};

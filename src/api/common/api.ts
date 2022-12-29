import { Method } from 'axios';
import CommonResponse from '../http';

export interface APIContract {
  method: Method;
  url: string;
  params?: object;
  body?: object;
}

export const callAPI = async <T = any>(
  { ...contract }: APIContract,
  isLoading: boolean,
): Promise<CommonResponse<T>> => {
    let response: CommonResponse = {
        successOrNot: "N",
        statusCode: "",
        data: {}
    }

    // try {
    //     // response = await getInstan
    // }

  return await callAPI<T>(
    {
      ...contract,
    },
    isLoading,
  );
};

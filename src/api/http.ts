import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default interface CommonResponse<T = any> {
  successOrNot: string;
  statusCode: string;
  errorMessage?: string;
  data?: any;
}

export const getInstance = (isLoading = true, params?: any): AxiosInstance => {
  // const baseURL = `${process.env.REACT_APP_URL}`;
  const baseURL = `http://localhost:8080`;

  const instance = axios.create({
    baseURL: baseURL,
    params: { ...params },
  });

  instance.interceptors.request.use(
    async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
      const sessionUser = {
        idToken: '1111',
        sessionId: '213123',
      };

      if (config.headers) {
        config.headers['x-correation-id'] = '';
        config.headers['x-api-key'] = '';

        if (sessionUser.idToken) {
          config.headers['Authorization'] = sessionUser.idToken;
        }

        if (sessionUser.sessionId) {
          config.headers['x-session-id'] = sessionUser.sessionId;
        }
      }
      return config;
    },
    (error: any): Promise<any> => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    async (response: any): Promise<any> => {
      return response.data;
    },
    async (error: any): Promise<any> => {
      const unknownError: CommonResponse = {
        successOrNot: 'N',
        statusCode: 'UNKNOWN.ERROR',
        errorMessage: error.message,
        data: {},
      };

      return unknownError;
    },
  );
  return instance;
};

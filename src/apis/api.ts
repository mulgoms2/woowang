import axios from 'axios';
import { ApiError } from '@/types/types';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json', // 커스텀 헤더 사용
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // 쿠키를 요청에 포함 및 전달받은 쿠키를 저장하는 설정. 교차출처 요청에 대해 cors 기본정책은 쿠키를 무시하도록 되어있다.
});

const axiosAuth = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosAuth.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      alert('로그인이 만료되었습니다. 로그인 후 다시 시도해주세요');
      window.location.replace('/login');
    }

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const { data } = await axiosAuth.get('/auth/refresh');

      // 예외 발생시 시도되지 않음
      const accessToken = data?.accessToken;
      localStorage.setItem('token', accessToken);

      // 새로운 액세스 토큰으로 동일 요청 재시도
      return axiosInstance(error.config);
    }

    // 401 을 제외한 에러는 그대로 통과
    return Promise.reject(error);
  },
);

export { axiosInstance };

export const withErrorHandling =
  <T extends (...args: any[]) => Promise<any>>(func: T) =>
  async (...arg: Parameters<T>): Promise<any> => {
    try {
      return await func(...arg);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const name = error?.name ?? 'Unexpected Error';
        const status = error?.response?.status ?? 500;
        const message = error.response?.data?.message ?? 'Axios error occurred';

        throw { status, message, name };
      }
      const unknownError: ApiError = {
        name: 'Unknown Error',
        status: 500,
        message: 'unknown error',
      };
      throw unknownError;
    }
  };

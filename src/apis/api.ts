import axios from 'axios';

const axiosInstance = axios.create({
  // headers: {},
  headers: {
    'Content-Type': 'application/json', // 커스텀 헤더 사용
    Authorization: 'Bearer token',
    post: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
    },
  },
  baseURL: 'https://was.woowang.store/api/v1/',
});

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

export { axiosInstance };

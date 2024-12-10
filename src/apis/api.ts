import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json', // 커스텀 헤더 사용
  },
  // baseURL: 'https://was.woowang.store/api/v1/',
  baseURL: 'http://localhost:8080/api/v1/',
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

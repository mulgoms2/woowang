import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json', // 커스텀 헤더 사용
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
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

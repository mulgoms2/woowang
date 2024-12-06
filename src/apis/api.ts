import axios from 'axios';

const axiosInstance = axios.create({
  // headers: {},
  baseURL:
    'http://ec2-54-180-9-141.ap-northeast-2.compute.amazonaws.com:8080/api/v1/',
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

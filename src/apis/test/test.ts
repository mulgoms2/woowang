import { axiosInstance } from '@/apis/api';

export const fetchTest = async () => {
  const res = await axiosInstance.get('/test');

  return res.data;
};

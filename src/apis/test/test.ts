import { axiosInstance } from '@/apis/api';

export const fetchTest = async () => {
  try {
    const res = await axiosInstance.get('/test');

    return res.data;
  } catch (e) {
    console.log('여기서 끝나야지');
  }
};

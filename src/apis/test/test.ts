import { axiosInstance, withErrorHandling } from '@/apis/api';

export const fetchTest = withErrorHandling(async () => {
  const res = await axiosInstance.get('/test');

  return res.data;
});

import { axiosInstance } from '@/apis/api';
import { UserInfo } from '@/types/types';

type LoginRequest = UserInfo;

export const fetchLogin = async (loginRequest: LoginRequest) => {
  try {
    const res = await axiosInstance.post('/login', loginRequest);
    return res;
  } catch (error) {
    console.log(error);
  }
};

import { axiosInstance, withErrorHandling } from '@/apis/api';
import { UserInfo } from '@/types/types';

type LoginRequest = UserInfo;

export const fetchLogin = withErrorHandling(
  async (loginRequest: LoginRequest) => {
    const res = await axiosInstance.post('/login', loginRequest);

    return res?.data;
  },
);

export const joinUser = async (userInfo: UserInfo) => {};

export const checkUserEmailDuplicate = withErrorHandling(
  async (email: string) => {
    const res = await axiosInstance.get('/user/valid', {
      params: {
        email,
      },
    });

    return res?.data;
  },
);

import { axiosInstance, withErrorHandling } from '@/apis/api';
import { UserInfo } from '@/types/types';

type LoginRequest = UserInfo;

interface UserJoinResponse {
  email: string;
  name: string;
}

interface LoginResponse {
  accessToken: string;
}

export const fetchLogin = withErrorHandling(
  async (loginRequest: LoginRequest) => {
    const { data } = await axiosInstance.post<LoginResponse>(
      '/login',
      loginRequest,
    );

    return data;
  },
);

export const joinUser = withErrorHandling(async (userInfo: UserInfo) => {
  const { data } = await axiosInstance.post<UserJoinResponse>(
    '/users',
    userInfo,
  );

  return data;
});

export const checkUserEmailDuplicate = withErrorHandling(
  async (email: string) => {
    const { data } = await axiosInstance.get<string>('/user/valid', {
      params: {
        email,
      },
    });

    return data;
  },
);

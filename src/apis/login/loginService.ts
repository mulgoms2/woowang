import { axiosInstance } from '@/apis/api';

interface LoginRequest {
  id: string;
  password: string;
}

export const fetchLogin = async (loginRequest: LoginRequest) => {
  try {
    const res = await axiosInstance.post('/login', loginRequest);
    return res;
  } catch (error) {
    console.log(error);
  }
};

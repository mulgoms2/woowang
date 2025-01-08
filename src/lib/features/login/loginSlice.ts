import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const selectIsLogin = (state: RootState) => state.login.isLogin;

export const { setIsLogin } = loginSlice.actions;

export default loginSlice.reducer;

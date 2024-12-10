'use client';
import React, { useReducer } from 'react';
import Link from 'next/link';

import { fetchLogin } from '@/apis/login/loginService';

interface UserInfo {
  id: string;
  password: string;
}

const inputReducer = (state: UserInfo, action: HTMLInputElement) => ({
  ...state,
  [action.name]: action.value,
});

const Page = () => {
  const [state, dispatch] = useReducer(inputReducer, { id: '', password: '' });

  const { id, password }: UserInfo = state;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(e.target);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchLogin(state);
  };

  return (
    <div>
      <div>로그인 페이지</div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            name={'id'}
            onChange={onInputChange}
            type="text"
            placeholder="id"
            value={id}
            required
          />
          <input
            name={'password'}
            onChange={onInputChange}
            type="password"
            placeholder="password"
            value={password}
            required
          />
          <button>login</button>
        </form>
      </div>
      <div>
        <Link href="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;

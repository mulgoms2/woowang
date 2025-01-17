'use client';

import React from 'react';
import Link from 'next/link';

import { useInputValues } from '@/hooks/useInputValues';
import { UserInfo } from '@/types/types';
import { fetchLogin } from '@/apis/auth/userService';

const Login = () => {
  const [state, onInputChange] = useInputValues<UserInfo>({
    email: '',
    password: '',
  });

  const { email, password }: UserInfo = state;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchLogin(state);
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            name={'email'}
            onChange={onInputChange}
            type="text"
            placeholder="email"
            value={email}
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

export default Login;

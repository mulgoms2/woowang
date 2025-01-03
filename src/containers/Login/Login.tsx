'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { fetchLogin } from '@/apis/auth/userService';
import { ApiError } from '@/types/types';
import { useAppDispatch } from '@/lib/hooks';
import { setIsLogin } from '@/lib/features/login/loginSlice';

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { accessToken } = await fetchLogin({ email, password });

      if (accessToken) {
        setToken(accessToken);
        dispatch(setIsLogin(true));
        router.push('/');
      }

      if (!accessToken) {
        setPassword('');
      }
    } catch (error) {
      const { status } = error as ApiError;

      if (status === 401) {
        alert('비밀번호가 일치하지 않습니다.');
      }
      if (status === 404) {
        alert('존재하지 않는 유저 정보입니다.');
      }
      if (status === 500) {
        alert('서버에 장애가 발생하였습니다. 나중에 다시 시도해주세요.');
      }
    }
  };

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  return (
    <div>
      <div>
        <form onSubmit={onLogin}>
          <input
            name={'email'}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            value={email}
            required
          />
          <input
            name={'password'}
            onChange={(e) => setPassword(e.target.value)}
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

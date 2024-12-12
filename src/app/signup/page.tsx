'use client';

import React from 'react';
import { useInputValues } from '@/app/hooks/useInputValues';
import { UserInfo } from '@/types/types';
import { checkUserEmailDuplicate } from '@/apis/auth/userService';

const Page = () => {
  const [state, onInputChange] = useInputValues<UserInfo>({
    email: '',
    password: '',
  });

  const { email, password }: UserInfo = state;

  const onEmailValid = () => {
    checkUserEmailDuplicate(email);
  };

  return (
    <div>
      <div>회원 가입</div>
      <div>
        <form action="">
          <div>
            <input
              name={'email'}
              type="text"
              placeholder="email"
              value={email}
              onChange={onInputChange}
              required
            />
            <button onClick={onEmailValid}>중복확인</button>
          </div>
          <div>
            <input
              name={'password'}
              type="password"
              placeholder="password"
              value={password}
              onChange={onInputChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

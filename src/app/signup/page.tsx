'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useInputValues } from '@/hooks/useInputValues';
import { UserInfo } from '@/types/types';
import { checkUserEmailDuplicate, joinUser } from '@/apis/auth/userService';

const Page = () => {
  const router = useRouter();
  const [userInfo, onInputChange] = useInputValues<UserInfo>({
    name: '',
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState(false);

  const { email, password, name }: UserInfo = userInfo;

  const onEmailValid = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await checkUserEmailDuplicate(email);
      setIsValid(true);
      alert('사용 가능한 이메일입니다.');
    } catch (error) {
      console.error(error);
      alert('사용중인 이메일 입니다.');
      setIsValid(false);
    }
  };

  const onJoin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isValid) {
      alert('회원 중복검사를 먼저 진행해주세요.');
      return;
    }

    try {
      await joinUser(userInfo);

      alert('회원가입에 성공했습니다. 로그인 해주세요.');
      router.push('/login');
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    setIsValid(false);
  }, [email]);
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
            <input
              name={'name'}
              type="text"
              placeholder="name"
              value={name}
              onChange={onInputChange}
              required
            />
            <button onClick={onJoin} disabled={!isValid}>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

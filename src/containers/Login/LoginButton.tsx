'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import s from '@/containers/TopNav/TopNav.module.scss';
import user_profile from '@/public/icon/user_profile.png';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectIsLogin, setIsLogin } from '@/lib/features/login/loginSlice';

const LoginButton = () => {
  const isLogin = useAppSelector(selectIsLogin);
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    localStorage.removeItem('token');
    dispatch(setIsLogin(false));
  };

  return (
    <div>
      {!isLogin && (
        <Link href={'/login'} className={s.btn}>
          <Image src={user_profile} alt="user_image" />
          Log in
        </Link>
      )}
      {isLogin && <button onClick={onLogOut}>Log out</button>}
    </div>
  );
};

export default LoginButton;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import s from '@/containers/TopNav/TopNav.module.scss';
import love from '@/public/icon/love.png';
import user_profile from '@/public/icon/user_profile.png';
import { NavLink } from '@/types/types';

const TopNav = () => {
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Login', href: '/login' },
    { name: 'remote', href: '/remote' },
  ];

  return (
    <header className={s.header}>
      <div>
        <Image src={love} width={24} height={24} alt="logo" />
      </div>
      <div className={s.menuBtnContainer}>
        {navLinks?.map((menu: NavLink) => (
          <Link key={menu.name} className={`${s.btn}`} href={`${menu.href}`}>
            {menu.name}
          </Link>
        ))}
      </div>
      <div className={s.login}>
        <Link href={'/login'} className={s.btn}>
          <Image src={user_profile} alt="user_image" />
          Log in
        </Link>
      </div>
    </header>
  );
};

export default TopNav;

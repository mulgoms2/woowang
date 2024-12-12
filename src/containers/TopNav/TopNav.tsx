import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import love from '@/public/icon/love.png';
import user_profile from '@/public/icon/user_profile.png';
import s from '@/containers/TopNav/TopNav.module.scss';
import { NavLink } from '@/types/types';

const TopNav = () => {
  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Login', href: '/login' },
    // { name: 'about', href: '/about' },
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
      <div>
        <Image src={user_profile} alt="user_image" />
        <Link href={'/login'} className={s.btn}>
          Log in
        </Link>
      </div>
    </header>
  );
};

export default TopNav;

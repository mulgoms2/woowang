import type { Metadata } from 'next';
import Link from 'next/link';

import s from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Moon',
  description: '토이프로젝트',
};

type Menu = {
  title: string;
  link: string;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headers: Menu[] = [
    { title: 'home', link: '/' },
    { title: 'login', link: '/login' },
    { title: 'about', link: '/about' },
  ];

  return (
    <html lang="en">
      <body>
        <header className={s.header}>
          {headers?.map((menu: Menu) => (
            <Link key={menu.title} className={s.btn} href={`${menu.link}`}>
              {menu.title}
            </Link>
          ))}
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}

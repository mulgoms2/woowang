import type { Metadata } from 'next';
import './global.scss';

import TopNav from '@/containers/TopNav/TopNav';

export const metadata: Metadata = {
  title: 'Moon',
  description: '토이프로젝트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <div>{children}</div>
      </body>
    </html>
  );
}

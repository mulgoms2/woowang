import type { Metadata } from 'next';
import Button from '@/app/components/Button';



export const metadata: Metadata = {
  title: '우왕좌왕 가족 코딩단',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Button>안녕버튼</Button>
        우왕좌왕 가족 코딩단 프론트서버
        {children}
      </body>
    </html>
  );
}

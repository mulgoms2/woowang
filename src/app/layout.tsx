import type { Metadata } from 'next';

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
        <header>
          <section>
            <div>홈</div>
          </section>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}

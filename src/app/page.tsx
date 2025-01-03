'use client';

import { fetchTest } from '@/apis/test/test';

export default function Home() {
  const onTest = () => {
    fetchTest();
  };

  return (
    <div>
      home
      <button onClick={onTest}>test</button>
    </div>
  );
}

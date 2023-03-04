import Main from '@/components/main/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>트립로그 - 여행을 떠나보아요</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}

import Head from 'next/head';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import UserInfo from '@/components/common/UserInfo';
import { ChecklistSection } from '@/components/checklist/ChecklistChecklistSection';

export default function CkecklistUserId() {
  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  if (userLoading) return <LoadingSpinner />;

  return (
    <>
      <Head>
        <title>{`${user}님의 - 체크리스트`}</title>
      </Head>

      <UserInfo user={user} message="여행 체크리스트 📝" />

      <ChecklistSection />
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  const data = await userInfo();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

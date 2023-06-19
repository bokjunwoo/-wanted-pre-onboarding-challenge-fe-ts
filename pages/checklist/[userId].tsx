import ChecklistAccordion from '@/components/checklist/ChecklistAccordion';
import Head from 'next/head';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useChecklistData } from '@/usequery/useChecklist';

export default function CkecklistUserId() {
  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  const { checklist, checklistLoading } = useChecklistData();

  const checklistContent = checklist?.content || [];

  if (userLoading || checklistLoading) return <LoadingSpinner />;

  return (
    <>
      <Head>
        <title>{`${user}님의 - 체크리스트`}</title>
      </Head>

      <h1 className="fw-bold lh-base mt-5 mb-5">
        <span style={{ color: '#198754' }}>{user}</span>
        <span> 님의 </span>
        <br></br>
        여행 체크리스트 📝
      </h1>

      <ChecklistAccordion checklist={checklistContent} />
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

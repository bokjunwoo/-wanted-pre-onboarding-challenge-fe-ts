import ChecklistAccordion from '@/components/checklist/ChecklistAccordion';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import Head from 'next/head';
import { userChecklistItem } from '../api/checklist';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';

type ChecklistItem = {
  id: number;
  item: string;
  checked: boolean;
};

export type ChecklistContent = {
  title: string;
  items: ChecklistItem[];
};

type Checklist = {
  nickname: string;
  content: ChecklistContent[];
};

const checklist: Checklist[] = [
  {
    nickname: '테스트',
    content: [
      {
        title: '기본 준비물',
        items: [
          { id: 0, item: '의류', checked: true },
          { id: 1, item: '세안용품', checked: false },
        ],
      },
      {
        title: '필수 준비물',
        items: [{ id: 0, item: '숙소', checked: false }],
      },
      {
        title: '트립로그에서 챙기기',
        items: [{ id: 0, item: '여행 일정짜기', checked: false }],
      },
      {
        title: '통신/교통 준비',
        items: [{ id: 0, item: '여행지 교통편', checked: false }],
      },
      {
        title: '즐길거리 준비',
        items: [{ id: 0, item: '관광 정보 확인하기', checked: false }],
      },
    ],
  },
];

export default function CkecklistUserId() {
  const { data: user } = useQuery(['user'], userInfo);

  const { data: checklisted, isLoading } = useQuery({
    queryKey: ['checklist'],
    queryFn: () => userChecklistItem(),
  });
  console.log(checklisted);

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

      <ChecklistAccordion checklist={checklist[0].content} />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['checklist'], () => userChecklistItem());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

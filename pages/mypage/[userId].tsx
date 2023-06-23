import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { userInfo } from '../api/sign';
import { ChecklistSection } from '@/components/checklist/ChecklistChecklistSection';
import { LedgerSection } from '@/components/ledger/LedgerSection';
import UserInfo from '@/components/common/UserInfo';
import { useQuery } from '@tanstack/react-query';
import LedgerForm from '@/components/ledger/LedgerForm';
import { activeKeyList } from '@/data/contents';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const MypageNavWithNoSSR = dynamic(import('@/components/mypage/MypageNav'), {
  ssr: false,
});

export default function MypageUserId() {
  const router = useRouter();
  const { userId } = router.query;

  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    const storedActiveKey = sessionStorage.getItem('activeTab');
    const isValidKey = ['plan', 'checklist', 'ledger', 'review'].includes(
      storedActiveKey || '',
    );

    setActiveKey(isValidKey ? storedActiveKey || 'plan' : 'plan');
  }, []);

  const handleTabSelect = (eventKey: string | null) => {
    setActiveKey(eventKey || 'plan');
    sessionStorage.setItem('activeTab', eventKey || 'plan');
  };

  if (userLoading) return <LoadingSpinner />;

  return (
    <div>
      <Head>
        <title>{`${userId} - 마이페이지`}</title>
      </Head>

      <Row className="m-auto mt-5">
        <Col md={12} lg={3}>
          <MypageNavWithNoSSR
            activeKey={activeKey}
            handleTabSelect={handleTabSelect}
          />
        </Col>
        <Col md={12} lg={1}></Col>
        <Col md={12} lg={8} className="light rounded">
          <UserInfo user={user} message={activeKeyList[activeKey]} />
          {activeKey === 'checklist' && <ChecklistSection />}
          {activeKey === 'ledger' && (
            <>
              <LedgerSection />
              <LedgerForm />
            </>
          )}
          {activeKey === 'review' && <div>작성된 여행 일정이 없습니다.</div>}
          {activeKey === 'plan' && <div>작성된 리뷰가 없습니다.</div>}
        </Col>
      </Row>
    </div>
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

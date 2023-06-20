import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';

const MypageNavWithNoSSR = dynamic(import('@/components/mypage/MypageNav'), {
  ssr: false,
});

export default function MypageUserId() {
  const router = useRouter();
  const { userId } = router.query;

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
        <Col md={12} lg={9}></Col>
      </Row>
    </div>
  );
}

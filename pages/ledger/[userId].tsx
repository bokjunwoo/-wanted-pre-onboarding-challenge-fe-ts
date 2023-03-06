import LedgerForm from '@/components/ledger/LedgerForm';
import LedgerReceipt from '@/components/ledger/LedgerReceipt';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

export type LedgerItem = {
  id: number;
  date: string;
  title: string;
  price: number;
};

type Ledger = {
  nickname: string;
  items: LedgerItem[];
};

const ledger: Ledger[] = [
  {
    nickname: '테스트',
    items: [
      { id: 0, date: '2023-03-04', title: '1번째 지출', price: 10000 },
      { id: 1, date: '2023-03-04', title: '2번째 지출', price: 20000 },
    ],
  },
];

export default function LedgerUserId() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Head>
        <title>{`${userId}님의 - 정산 내역`}</title>
      </Head>

      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <div>
            <h1 className="fw-bold lh-base mt-5 mb-4">
              <span style={{ color: '#198754' }}>{userId}</span>
              <span> 님의</span>
              <br></br>
              <span>정산 내역 💶</span>
            </h1>
          </div>

          <div>
            <p className="mb-4">
              일행과 함께 지출한 비용이 있다면,
              <br />
              총무에게 내야 할 금액을 정산해드려요.
            </p>
          </div>

          <LedgerForm />
        </Col>

        <Col>
          <LedgerReceipt ledger={ledger[0].items} />
        </Col>
      </Row>
    </>
  );
}

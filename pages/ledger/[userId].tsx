import LedgerForm from '@/components/ledger/LedgerForm';
import LedgerReceipt from '@/components/ledger/LedgerReceipt';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import { userInfo } from '../api/sign';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useLedgerData } from '@/usequery/useLedger';

export default function LedgerUserId() {
  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  const { ledger, ledgerLoading } = useLedgerData();

  const ledgerContent = ledger?.chargeList || [];

  if (userLoading || ledgerLoading) return <LoadingSpinner />;

  return (
    <>
      <Head>
        <title>{`${user}님의 - 정산 내역`}</title>
      </Head>

      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <div>
            <h1 className="fw-bold lh-base mt-5 mb-4">
              <span style={{ color: '#198754' }}>{user}</span>
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
          <LedgerReceipt ledger={ledgerContent} />
        </Col>
      </Row>
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

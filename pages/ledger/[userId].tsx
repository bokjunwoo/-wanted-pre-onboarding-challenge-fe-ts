import LedgerForm from '@/components/ledger/LedgerForm';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import { userInfo } from '../api/sign';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import UserInfo from '@/components/common/UserInfo';
import { LedgerSection } from '@/components/ledger/LedgerSection';

export default function LedgerUserId() {
  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  if (userLoading) return <LoadingSpinner />;

  return (
    <>
      <Head>
        <title>{`${user}님의 - 정산 내역`}</title>
      </Head>

      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <div className="mt-5">
            <UserInfo user={user} message="정산 내역 💶" />
          </div>

          <div className="mb-4">
            <p>
              일행과 함께 지출한 비용이 있다면,
              <br />
              총무에게 내야 할 금액을 정산해드려요.
            </p>
          </div>

          <LedgerForm />
        </Col>

        <Col className="mt-5">
          <LedgerSection />
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

import ListCard from '@/components/list/ListCard';
import CommonNav from '@/components/common/CommonNav';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Row } from 'react-bootstrap';
import React from 'react';
import { regionNames, typesNames } from '@/data/region';

export default function Type() {
  const router = useRouter();
  const { region, type } = router.query as { region: string; type: string };

  return (
    <>
      <Head>
        <title>{`${regionNames[region]} - ${typesNames[type]}`}</title>
      </Head>

      <CommonNav type={type} margin="mt-5" />

      <Row xs={1} sm={2} md={2} lg={3} className="mt-2">
        {Array.from({ length: 12 }).map((_, i) => {
          return <ListCard key={i} />;
        })}
      </Row>
    </>
  );
}

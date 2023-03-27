import ListCard from '@/components/list/ListCard';
import CommonNav from '@/components/common/CommonNav';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Row } from 'react-bootstrap';
import React from 'react';

export default function Type() {
  const router = useRouter();
  const { region, type } = router.query as { region: string; type: string };

  type RegionNames = {
    [key: string]: string;
  };

  const regionNames: RegionNames = {
    seoul: '서울',
    busan: '부산',
    gangneung: '강릉',
    gyeongju: '경주',
    jeonju: '전주',
    jeju: '제주',
  };

  type TypeNames = {
    [key: string]: string;
  };

  const typesNames: TypeNames = {
    sightseeing: '관광',
    culture: '문화',
    food: '음식',
    lodgment: '숙소',
    shopping: '쇼핑',
  };

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

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Row } from 'react-bootstrap';

export default function Search() {
  const searchParams = useSearchParams();
  const searchTitle = searchParams.get('title');

  return (
    <>
      <h1 className="fs-2 mt-5">검색 결과</h1>

      <Row xs={1} sm={2} md={2} lg={3} className="mt-2"></Row>
    </>
  );
}

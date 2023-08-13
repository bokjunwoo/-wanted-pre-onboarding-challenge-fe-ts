import { regionNames } from '@/data/region';
import { Input } from '@/styles/styled';
import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Search() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const searchTitle = searchParams.get('title');
  const region = searchParams.get('region');

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
    handlePageChange(buttonId);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handlePageChange = (buttonId: number) => {
    const selectedRegion = buttonData[buttonId - 1].name;
    const queryString = createQueryString('region', selectedRegion);
    router.push('?' + queryString);
  };

  const buttonData = [
    { id: 1, label: '서울', name: 'seoul' },
    { id: 2, label: '부산', name: 'busan' },
    { id: 3, label: '강릉', name: 'gangneung' },
    { id: 4, label: '경주', name: 'gyeongju' },
    { id: 5, label: '전주', name: 'jeonju' },
    { id: 6, label: '제주', name: 'jeju' },
  ];

  return (
    <>
      <Head>
        <title>
          {region ? `${regionNames[region]} - 결과` : '트립로그 - 검색하기'}
        </title>
      </Head>

      <div className="mt-5">
        <h1 className="fs-2 mt-5">
          지역 {region ? `| ${regionNames[region]}` : '| 전체'}
        </h1>

        {buttonData.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            className={activeButton === button.id ? 'active' : ''}
          >
            {button.label}
          </button>
        ))}
      </div>

      <Form className="d-flex align-items-center">
        <Input type="text" className="me-2" />

        <Button variant="outline-success">검색</Button>
      </Form>
    </>
  );
}

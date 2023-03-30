import { IContents } from '@/data/contents';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap/';
import styled from 'styled-components';
import LoadingSpinner from '../common/LoadingSpinner';

interface SubCardProps {
  data: IContents;
  dataLength: number;
  region: string;
}

export default function SubCard({ data, dataLength, region }: SubCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);
    Router.push(`/detail/${region}/${data.contentid}`);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Link
        href={`/detail/${region}/${data.contentid}`}
        onClick={handleLinkClick}
      >
        <Card className={`mb-4 ${data.id === dataLength ? '' : 'me-5'}`}>
          <StyledImg variant="top" src={data.firstimage} />
          <Card.Body>
            <p className="mb-0">{data.title}</p>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

const StyledImg = styled(Card.Img)`
  width: 270px;
  height: 250px;
`;

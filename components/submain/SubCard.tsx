import { IContents } from '@/data/contents';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Card } from 'react-bootstrap/';
import styled from 'styled-components';

interface SubCardProps {
  data: IContents;
  dataLength: number;
  region: string;
}

export default function SubCard({ data, dataLength, region }: SubCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/detail/seoul/126500');
  };
  
  return (
      <Card onClick={handleClick} className={`mb-4 ${data.id === dataLength ? '' : 'me-5'}`}>
        <StyledImg variant="top" src={data.firstimage} />
        <Card.Body>
          <p className="mb-0">{data.title}</p>
        </Card.Body>
      </Card>
  );
}

const StyledImg = styled(Card.Img)`
  width: 270px;
  height: 250px;
`;

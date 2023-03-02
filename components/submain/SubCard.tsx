import { PickData } from '@/data/region';
import React from 'react';
import { Card } from 'react-bootstrap/';
import styled from 'styled-components';

interface SubCardProps {
  data: PickData;
  dataLength: number;
}

export default function SubCard({ data, dataLength }: SubCardProps) {
  return (
    <Card
      className={`mb-4 ${data.id === dataLength ? '' : 'me-5'}`}
      key={data.id}
    >
      <StyledImg src={data.image} />
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

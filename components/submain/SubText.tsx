import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

interface SubTextProps {
  mainText: string;
  icon: string;
  subText: string;
}

export default function SubText({mainText, icon, subText}: SubTextProps) {
  return (
    <Row>
      <Col className="mt-5 mb-4">
        <div>
          <Title>{icon} </Title>
          <Title>{mainText}</Title>
        </div>

        <div>
          <Title style={{ visibility: 'hidden' }}>{icon} </Title>
          <span>{subText}</span>
        </div>
      </Col>
    </Row>
  );
}

export const Title = styled.span`
  font: 2rem/1 'Inter';
  @media screen and (max-width: 1200px) {
    font: 2rem/1 'Inter';
  }
  @media screen and (max-width: 992px) {
    font: 1.5rem/1 'Inter';
  }
`;

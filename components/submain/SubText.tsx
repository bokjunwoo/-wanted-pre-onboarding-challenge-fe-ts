import { Title, SubTitle } from '@/styles/styled';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface SubTextProps {
  mainText: string;
  icon: string;
  subText: string;
}

export default function SubText({ mainText, icon, subText }: SubTextProps) {
  return (
    <Row>
      <Col className="mt-5 mb-4">
        <div>
          <Title>{icon} </Title>
          <Title>{mainText}</Title>
        </div>

        <div>
          <Title style={{ visibility: 'hidden' }}>{icon} </Title>
          <SubTitle>{subText}</SubTitle>
        </div>
      </Col>
    </Row>
  );
}

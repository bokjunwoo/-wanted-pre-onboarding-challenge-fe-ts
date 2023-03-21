import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Title } from '../submain/SubText';

type PlanUserInfoProps = {
  userId: string;
};

export default function PlanUserInfo({ userId }: PlanUserInfoProps) {
  return (
    <Row>
      <Col className="mt-5">
        <Row className="mb-4 fs-6 fw-bold">
          <span>여행에 필요한 모든 것, TripLog</span>
        </Row>

        <Row className="mb-4">
          <Title>
            <span style={{ color: '#036635' }}>{userId}</span>
            <span>님의 여행계획 세우기 ✏️</span>
          </Title>
        </Row>

        <Row>
          <span className="mb-1">📆 여행 기간</span>
          <span>2023-03-04 ~ 2023-03-05</span>
        </Row>
      </Col>
    </Row>
  );
}


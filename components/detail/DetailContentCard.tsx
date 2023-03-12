import React from 'react';
import { Row, Card } from 'react-bootstrap';
import KakaoMap from '../kakao/KakaoMap';
import { Container } from './DetailImageCard';

export default function DetailContentCard() {
  return (
    <Container>
      <Card.Body className="mt-1">
        <div className="d-flex justify-content-between align-items-top mb-2">
          <Card.Title className="fs-3 fw-bold">제목</Card.Title>
          <Card.Text className="text-muted">조회수 0</Card.Text>
        </div>

        <Card.Subtitle className="mb-2 text-muted">
          📍 서울 송파구
        </Card.Subtitle>

        <Row className="mb-2">
          <span className="fw-bold mb-1 fs-5">전화</span>
          <span className="text-muted">📞 전화번호</span>
        </Row>

        <Row className="mb-2">
          <span className="fw-bold mb-1 fs-5">홈페이지</span>
          <span className="text-muted">🏠 홈페이지 정보가 없습니다.</span>
        </Row>

        <Row>
          <span className="fw-bold mb-1 fs-5">위치정보</span>
          <Card.Body className="pt-0 pb-0">
            <KakaoMap width='100%' height='174px'/>
          </Card.Body>
        </Row>
      </Card.Body>
    </Container>
  );
}

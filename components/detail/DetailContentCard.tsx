import { IItemInfo } from '@/pages/api/api';
import { Container } from '@/styles/styled';
import React from 'react';
import { Row, Card } from 'react-bootstrap';
import KakaoMap from '../kakao/KakaoMap';

export default function DetailContentCard({
  detail,
  homepageUrl,
}: {
  detail: IItemInfo;
  homepageUrl: string;
}) {
  return (
    <Container style={{ height: '500px' }}>
      <Card.Body className="mt-1">
        <div className="d-flex justify-content-between align-items-top mb-2">
          <Card.Title className="fs-3 fw-bold">{detail.title}</Card.Title>
          <Card.Text className="text-muted">
            조회수 : {detail.view + 1}
          </Card.Text>
        </div>

        <Card.Subtitle className="mb-2 text-muted">
          📍 {detail.addr1}
        </Card.Subtitle>

        <Row className="mb-2">
          <span className="fw-bold mb-1 fs-5">전화</span>
          <span className="text-muted">
            📞 {detail.tel === '' ? '등록된 전화번호가 없습니다' : detail.tel}
          </span>
        </Row>

        <Row className="mb-2">
          <span className="fw-bold mb-1 fs-5">홈페이지</span>
          <span className="text-muted">
            🏠{' '}
            {homepageUrl === '' ? (
              '등록된 홈페이지가 없습니다'
            ) : (
              <a href={homepageUrl} target="_blank" className="text-muted">
                이동하기
              </a>
            )}
          </span>
        </Row>

        <Row>
          <span className="fw-bold mb-1 fs-5">위치정보</span>
          <Card.Body className="pt-0 pb-0">
            <KakaoMap
              width="100%"
              height="194px"
              mapy={detail.mapy}
              mapx={detail.mapx}
            />
          </Card.Body>
        </Row>
      </Card.Body>
    </Container>
  );
}

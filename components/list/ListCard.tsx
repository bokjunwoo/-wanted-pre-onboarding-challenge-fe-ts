import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function ListCard() {
  return (
    <Col className='pt-3 ps-3 pe-3 pb-2'>
      <Card>
        <Card.Img variant="top" src="/images/main/card0.jpg" height='230px' className="border" />

        <Card.Body className='p-2'>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>제목</Card.Title>
            <Card.Text className="text-muted">조회수 0</Card.Text>
          </div>

          <Card.Text className="text-muted mb-2">주소</Card.Text>

          <Card.Text className="text-muted">
            <span className="me-2">⭐️ 0(0)</span>
            <span className="me-2">❤ 0</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

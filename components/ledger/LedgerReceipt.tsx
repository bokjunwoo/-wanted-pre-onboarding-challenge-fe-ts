import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { LedgerItem } from '@/pages/ledger/[userId]';

export default function LedgerReceipt({ ledger }: { ledger: LedgerItem[] }) {
  return (
    <div
      className="p-5 rounded border mt-4"
      style={{ backgroundColor: '#fafafa' }}
    >
      <div>
        <h5 className="fw-bold text-center" style={{ color: '#198754' }}>
          TripLog
        </h5>

        <h1 className="fw-bold text-center">RECEIPT</h1>

        <hr className="solid" style={{ borderTopWidth: '2px' }}></hr>
      </div>

      <div>
        <Row className="text-start">
          <Col className="fw-bold col-3 fs-5">Day</Col>
          <Col className="fw-bold col-4 fs-5">ITEM</Col>
          <Col className="fw-bold col-3 fs-5">Price</Col>
          <Col className="fw-bold col-2 fs-5">Del</Col>
        </Row>
        <hr className="solid"></hr>
      </div>
      {ledger.map((v) => {
        return (
          <Row className="text-start mb-2" key={v.id}>
            <Col className="col-3">{v.date.slice(5, 10)}</Col>
            <Col className="col-4">{v.title}</Col>
            <Col className="col-3">{v.price}원</Col>
            <Col className="col-2 text-center" style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faTrash} />
            </Col>
          </Row>
        );
      })}

      <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>

      <Row className="fs-6 mb-2">
        <Col>ITEM COUNT</Col>
        <Col className="text-end">{ledger.length}개</Col>
      </Row>

      <Row className="fs-6 mb-2">
        <Col>총 합계</Col>
        <Col className="text-end">0원</Col>
      </Row>

      <Row className="fs-6 mb-2">
        <Col>인원수 1명</Col>
        <Col className="text-end">0원</Col>
      </Row>

      <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>

      <Col className="text-end">
        <Button variant="success">초기화</Button>
      </Col>
    </div>
  );
}

import React from 'react';
import { Button, InputGroup, Form, Col } from 'react-bootstrap';

export default function LedgerForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form className="mb-4" onSubmit={handleSubmit}>
      <div>
        <span className="fw-bold fs-5">날짜</span>
        <InputGroup className="mt-2 mb-4">
          <Form.Control type="date" required />
        </InputGroup>
      </div>

      <div>
        <span className="fw-bold fs-5">내용</span>
        <InputGroup className="mt-2 mb-4">
          <Form.Control type="text" required />
        </InputGroup>
      </div>

      <div>
        <span className="fw-bold fs-5">금액</span>
        <InputGroup className="mt-2 mb-4">
          <Form.Control type="number" placeholder="숫자만 입력됩니다." required />
        </InputGroup>
      </div>

      <Col className="text-end">
        <Button variant="success" className="text-end">
          등록
        </Button>
      </Col>
    </Form>
  );
}

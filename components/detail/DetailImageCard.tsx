import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export default function DetailImageCard() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="/images/main/card0.jpg"
        height="350px"
        className="fluid border"
      />
      <Card.Body className="d-flex justify-content-center align-items-center text-center pt-2 pb-2 fs-6">
        <div className="col-3">
          <Cursor>❤️</Cursor>
          <div>0</div>
        </div>

        <div className="col-3">
          <Cursor>⭐</Cursor>
          <div>0</div>
        </div>

        <div className="col-3">
          <Cursor>🛠️</Cursor>
          <div>카카오 공유</div>
        </div>

        <div className="col-3">
          <Cursor>🛠️</Cursor>
          <div>URL 복사</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export const Container = styled(Card)`
  height: 450px;
  overflow: auto;
`;

export const Cursor = styled.span`
  cursor: pointer;
`;

import React from 'react';
import { Card, Col, Placeholder } from 'react-bootstrap';
import styled from 'styled-components';

export default function ListCardPlaceholder() {
  return (
    <Col className="pt-3 ps-3 pe-3 pb-2">
      <Card className="border-0">
        <PlaceholderBox />

        <Card.Body>
          <Placeholder as={Card.Title} xs={12} bg="secondary" />
          <Placeholder as={Card.Title} xs={8} bg="secondary" />
          <Placeholder as={Card.Title} xs={8} size="sm" bg="secondary" />
        </Card.Body>
      </Card>
    </Col>
  );
}

const PlaceholderBox = styled.div`
  background-color: #ccc;
  height: 230px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

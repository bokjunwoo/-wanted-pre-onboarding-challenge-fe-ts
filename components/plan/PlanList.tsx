import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap';
import { NumberBox } from '@/styles/styled';

export default function PlanList({ number }: { number: number }) {
  return (
    <ListGroup.Item className="ps-2 pe-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <NumberBox>{number + 1}</NumberBox>
          </div>

          <div className="ms-2">
            <span>경복궁</span>
            <br />
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-muted ms-1">23.03.03</span>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <CloseButton />
        </div>
      </div>
    </ListGroup.Item>
  );
}

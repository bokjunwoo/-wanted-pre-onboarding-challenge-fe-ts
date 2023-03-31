import React from 'react';
import { Button, CloseButton, ListGroup } from 'react-bootstrap';
import { UserIamge } from '../detail/review/ReviewContent';

export default function PlanList() {
  return (
    <ListGroup.Item className="ps-2 pe-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <UserIamge src="/images/main/card0.jpg" alt="" />
          </div>

          <div className="ms-2">
            <span>경복궁</span>
            <br />
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-muted ms-1">23.03.03</span>
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <CloseButton/>
        </div>
      </div>
    </ListGroup.Item>
  );
}

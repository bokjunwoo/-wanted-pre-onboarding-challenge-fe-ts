import { regionNames } from '@/data/region';
import { ExtendedDateObject } from '@/usequery/useUserPlan';
import React from 'react';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import PlanDetailCard from './PlanDetailCard';

interface ISearchProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: ExtendedDateObject;
}

export default function PlanDetailModal({ show, setShow, data }: ISearchProps) {
  const firstDay = data.plan[0].date;
  const lastDay = data.plan[data.plan.length - 1].date;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} aria-labelledby="example-modal-sizes-title-sm" centered>
      <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-sm">
          <img
            src="/images/Logo.png"
            style={{ width: '30px' }}
            alt="로고"
          ></img>
          TripLog
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <h4>여행 : {data.title}</h4>
          <h6 className="text-muted">지역 : {regionNames[data.region]}</h6>
          <h6 className="text-muted">
            {firstDay} ~ {lastDay}
          </h6>
        </div>

        <ListGroup variant="flush">
          {data.plan.map((v, i) => {
            return <PlanDetailCard key={i} data={v} number={i + 1} />;
          })}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" size="sm" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

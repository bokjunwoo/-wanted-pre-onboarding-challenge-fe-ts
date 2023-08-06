import React from 'react';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { ISearchDataInfo } from '@/pages/api/api';
import PlanList from '../plan/PlanList';

interface ISearchProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: ISearchDataInfo[];
  date: string;
}

export default function SearchModal({
  show,
  setShow,
  data,
  date,
}: ISearchProps) {
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
        <ListGroup variant="flush">
          {data !== null ? (
            data.map((v, i) => {
              return <PlanList listItem={v} date={date} key={i} />;
            })
          ) : (
            <div>검색결과가 없습니다.</div>
          )}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" size="sm" onClick={handleClose}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PlanListForm from '../plan/PlanListForm';

export default function SearchModal() {
  const handleClose = () => {
    // setShow(false);
  };

  const handleSuccess = () => {
    // setShow(false);
  };

  return (
    <Modal show={true} aria-labelledby="example-modal-sizes-title-sm" centered>
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
        <PlanListForm />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" size="sm" onClick={handleClose}>
          취소
        </Button>
        <Button variant="outline-success" size="sm" onClick={handleSuccess}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

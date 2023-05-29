import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IAlretModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

export default function AlretModal({ show, setShow, message }: IAlretModal) {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      size="sm"
      show={show}
      aria-labelledby="example-modal-sizes-title-sm"
      centered
    >
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

      <Modal.Body>{message}</Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary" size="sm" onClick={handleClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

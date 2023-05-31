import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ICheckModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  message1: string;
  message2?: string;
  onSubmit: () => void;
}

export default function CheckModal({
  show,
  setShow,
  message1,
  message2,
  onSubmit,
}: ICheckModal) {
  const handleClose = () => {
    setShow(false);
  };

  const handleSuccess = () => {
    onSubmit();
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

      <Modal.Body>
        {message1}
        <br />
        {message2}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" size="sm" onClick={handleSuccess}>
          확인
        </Button>
        <Button variant="outline-primary" size="sm" onClick={handleClose}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

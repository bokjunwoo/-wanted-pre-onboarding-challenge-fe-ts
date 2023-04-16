import { useRouter } from 'next/router';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ISignupSuccess {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  result: {
    status: number;
    message: string;
    duplicated: boolean;
  };
}

export default function SignSuccess({
  show,
  setShow,
  result,
}: ISignupSuccess) {
  const router = useRouter();

  const handleClose = () => {
    setShow(false);
    result.status === 201 && router.push('/');
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

      <Modal.Body>{result.message}</Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

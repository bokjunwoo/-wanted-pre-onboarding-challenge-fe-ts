import { useRouter } from 'next/router';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ILoginRequired {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginRequired({ show, setShow }: ILoginRequired) {
  const router = useRouter();

  const handleClose = () => {
    setShow(false);
  };

  const loginButton = () => {
    setShow(false);
    router.push('/login');
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

      <Modal.Body>로그인이 필요한 기능입니다.</Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary" size="sm" onClick={loginButton}>
          로그인하러가기
        </Button>
        <Button variant="outline-success" size="sm" onClick={handleClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

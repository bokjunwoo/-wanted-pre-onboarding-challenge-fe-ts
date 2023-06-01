import { ISignupResult, ILoginResult, ILogoutResult } from '@/pages/api/api';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ISignupSuccess {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  result: ISignupResult | ILoginResult | ILogoutResult;
}

export default function SignSuccess({ show, setShow, result }: ISignupSuccess) {
  const router = useRouter();

  const handleClose = () => {
    setShow(false);
    if (result.success) {
      result.type === 'login' && router.push('/');
      result.type === 'signup' && router.push('/login');
      result.type === 'logout' && router.replace('/');
    } else {
      router.replace(router.pathname);
    }
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

      <Modal.Footer className="p-1">
        <Button variant="primary" onClick={handleClose} size="sm">
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

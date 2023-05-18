import { Ledger } from '@/pages/ledger/[userId]';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ICheckModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  success: UseMutationResult<
    Ledger,
    AxiosError<unknown, any>,
    {
      user: string;
    },
    void
  >;
  user: string;
}

export default function CheckModal({ show, setShow, success, user }: ICheckModal) {
  const handleClose = () => {
    setShow(false);
  };

  const handleSuccess = () => {
    success.mutate({ user });
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
        데이터를 전체 삭제합니다
        <br />
        삭제된 데이터는 복구되지 않습니다.
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

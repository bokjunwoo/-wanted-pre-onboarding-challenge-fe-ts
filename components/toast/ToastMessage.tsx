import React from 'react';
import { Alert, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { CenterToast } from '@/styles/styled';

interface IIsLoginToast {
  message: string;
  variant: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToastMessage({
  message,
  variant,
  show,
  setShow,
}: IIsLoginToast) {
  return (
    <CenterToast>
      <Toast delay={1000} show={show} onClose={() => setShow(false)} autohide>
        <Alert variant={variant} className="m-0 p-3">
          <FontAwesomeIcon icon={faCircleExclamation} /> {message}
        </Alert>
      </Toast>
    </CenterToast>
  );
}

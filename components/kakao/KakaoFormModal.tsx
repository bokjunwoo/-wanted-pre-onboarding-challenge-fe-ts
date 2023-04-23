import { nicknameValidation } from '@/utils/sign';
import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { kakaoRegister } from '@/pages/api/sign';
import SignSuccess from '../modal/SignSuccess';
import { ISignResult } from '@/pages/api/api';

interface IKakaoFormModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export default function KakaoFormModal({ show, setShow, id }: IKakaoFormModal) {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const [nickname, onChangeNickname, nicknameResult] = useInput(
    '',
    nicknameValidation,
  );
  const [successShow, setSuccessShow] = useState(false);
  const [result, setResult] = useState<ISignResult>({
    type: 'login',
    success: false,
    message: '',
  });

  const onSubmitForm = async () => {
    if (nicknameResult.success === false) {
      if (nicknameInputRef.current !== null) {
        nicknameInputRef.current.focus();
      }
      return;
    }

    const response = await kakaoRegister(id, nickname);
    const { data } = response;
    const result: ISignResult = {
      type: data.type,
      success: data.success,
      message: data.message,
    };
    setResult(result);
    setShow(false);
    setSuccessShow(result.success);
  };

  return (
    <>
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
          <h6>사용하고 싶은 닉네임을 입력해주세요.</h6>
          <Form>
            <Form.Control
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="p-3"
              ref={nicknameInputRef}
              value={nickname}
              onChange={onChangeNickname}
            />
            <Form.Text
              className={`${
                nicknameResult.success ? 'text-success' : 'text-danger'
              } m-1`}
            >
              {nicknameResult.message}
            </Form.Text>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={onSubmitForm}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>

      <SignSuccess
        show={successShow}
        setShow={setSuccessShow}
        result={result}
      />
    </>
  );
}

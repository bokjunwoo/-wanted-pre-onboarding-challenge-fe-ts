import { nicknameValidation } from '@/utils/sign';
import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { kakaoRegister } from '@/pages/api/sign';
import SignSuccess from '../modal/SignSuccess';
import { ILoginResult } from '@/pages/api/api';
import ButtonSpinner from '../common/ButtonSpinner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface IKakaoFormModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export default function KakaoFormModal({ show, setShow, id }: IKakaoFormModal) {
  const queryClient = useQueryClient();

  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [nickname, onChangeNickname, nicknameResult] = useInput('', nicknameValidation);
  const [successShow, setSuccessShow] = useState(false);
  const [result, setResult] = useState<ILoginResult>({
    type: 'login',
    success: false,
    message: '',
    nickname: '',
  });

  const mutation = useMutation<ILoginResult, AxiosError, { id: number; nickname: string }>(
    ['user'],
    kakaoRegister,
    {
      onMutate: () => {
        setLoading(true);
      },
      onError: (error) => {
        alert(error.response?.data);
      },
      onSuccess: (result) => {
        queryClient.setQueryData(['user'], result.nickname);
        setShow(false);
        setResult(result);
        setSuccessShow(result.success);
      },
      onSettled: () => {
        setLoading(false);
      },
    },
  );

  const onSubmitForm = async () => {
    if (nicknameResult.success === false) {
      if (nicknameInputRef.current !== null) {
        nicknameInputRef.current.focus();
      }
      return;
    }

    mutation.mutate({ id, nickname });
  };

  return (
    <>
      <Modal size="sm" show={show} aria-labelledby="example-modal-sizes-title-sm" centered>
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            <img src="/images/Logo.png" style={{ width: '30px' }} alt="로고"></img>
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
            <Form.Text className={`${nicknameResult.success ? 'text-success' : 'text-danger'} m-1`}>
              {nicknameResult.message}
            </Form.Text>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={onSubmitForm} disabled={loading}>
            {loading ? <ButtonSpinner /> : '확인'}
          </Button>
        </Modal.Footer>
      </Modal>

      <SignSuccess show={successShow} setShow={setSuccessShow} result={result} />
    </>
  );
}

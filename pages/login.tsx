import LocalButton from '@/components/common/LocalButton';
import useInput from '@/components/hooks/useInput';
import KakaoLoginButton from '@/components/kakao/KakaoLoginButton';
import { emailValidation, passwordValidation } from '@/utils/sign';
import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useRef, useState } from 'react';
import { Card, Badge, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { ILoginResult } from './api/api';
import { localLogin } from './api/sign';
import SignSuccess from '@/components/modal/SignSuccess';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function login() {
  const queryClient = useQueryClient();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [email, onChangeEmail] = useInput('', emailValidation);
  const [password, onChangePassword] = useInput('', passwordValidation);
  const [loginResult, setLoginResult] = useState<ILoginResult>({
    type: 'login',
    success: false,
    message: '',
    nickname: '',
  });

  const mutation = useMutation<
    ILoginResult,
    AxiosError,
    { email: string; password: string }
  >(['user'], localLogin, {
    onMutate: () => {
      setLoading(true);
    },
    onError: (error) => {
      alert(error.response?.data);
    },
    onSuccess: (result) => {
      queryClient.setQueryData(['user'], result.nickname);
      setLoginResult(result);
      setShow(result.success);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const onSubmitFormLocal = useCallback(async () => {
    if (email === '') {
      emailInputRef.current?.focus();
      return;
    }

    if (password === '') {
      passwordInputRef.current?.focus();
      return;
    }
    mutation.mutate({ email, password });
  }, [email, password]);

  return (
    <>
      <Head>
        <title>트립로그 - 로그인</title>
      </Head>

      <Col className="col-sm-10 col-md-8 col-lg-6 col-xl-6 m-auto mt-5 mb-5">
        <Card className="p-5">
          <div className="d-flex mb-5">
            <h4>TripLog</h4>
            <Link href="/signup">
              <Badge
                bg="secondary"
                text="light"
                className="ms-2 p-1"
                style={{ fontSize: '.3rem' }}
              >
                아직 회원이 아니라면?
              </Badge>
            </Link>
          </div>

          <Form onSubmit={onSubmitFormLocal}>
            <Form.Group controlId="email">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder="아이디를 입력해주세요"
                className="p-3"
                ref={emailInputRef}
                value={email}
                onChange={onChangeEmail}
              />
              <VisibilityHidden className="text-muted">
                visibilityHidden
              </VisibilityHidden>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="p-3"
                ref={passwordInputRef}
                value={password}
                onChange={onChangePassword}
              />
              <VisibilityHidden className="text-muted">
                visibilityHidden
              </VisibilityHidden>
            </Form.Group>

            {loginResult.success === false ? (
              <div className="text-danger">{loginResult.message}</div>
            ) : (
              <SignSuccess show={show} setShow={setShow} result={loginResult} />
            )}

            <LocalButton
              text="로그인"
              onSubmitForm={onSubmitFormLocal}
              loading={loading}
            />

            <KakaoLoginButton text="카카오 로그인" />
          </Form>
        </Card>
      </Col>
    </>
  );
}

const VisibilityHidden = styled(Form.Text)`
  visibility: hidden;
`;

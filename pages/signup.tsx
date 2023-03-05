import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import LocalButton from '@/components/common/LocalButton';
import { Card, Badge, Col, Form } from 'react-bootstrap';
import Head from 'next/head';
import {
  emailValidation,
  nicknameValidation,
  passwordReinspection,
  passwordValidation,
  ValidationResult,
} from '@/utils/sign';
import useInput from '@/components/hooks/useInput';

export default function signup() {
  const [email, onChangeEmail, emailResult] = useInput('', emailValidation);
  const [password, onChangePassword, passwordResult] = useInput('', passwordValidation);
  const [nickname, onChangeNickname, nicknameResult] = useInput('', nicknameValidation);

  const [repassword, setRepassword] = useState<string>('');
  const [repasswordResult, setRepasswordResult] = useState<ValidationResult>({
    message: '',
    success: false,
  });
  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRepassword(e.target.value);
      setRepasswordResult(passwordReinspection(password, e.target.value));
    },
    [password],
  );

  return (
    <>
      <Head>
        <title>트립로그 - 회원가입</title>
      </Head>

      <Col className="col-sm-10 col-md-8 col-lg-6 col-xl-6 m-auto mt-5 mb-5">
        <Card className="p-5">
          <div className="d-flex mb-5">
            <h4>TripLog</h4>
            <Link href="/login">
              <Badge bg="secondary" text="light" className="ms-2 p-1" style={{ fontSize: '.3rem' }}>
                이미 회원이라면?
              </Badge>
            </Link>
          </div>

          <Form>
            <Form.Group controlId="email">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder="아이디를 입력해주세요"
                className="p-3"
                value={email}
                onChange={onChangeEmail}
              />
              <Form.Text className={`${emailResult.success ? 'text-success' : 'text-danger'} m-1`}>
                {emailResult.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="p-3"
                value={password}
                onChange={onChangePassword}
              />
              <Form.Text
                className={`${passwordResult.success ? 'text-success' : 'text-danger'} m-1`}
              >
                {passwordResult.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="repassword">
              <Form.Label>비밀번호 재확인</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="p-3"
                value={repassword}
                onChange={onChangePasswordCheck}
              />
              <Form.Text
                className={`${repasswordResult.success ? 'text-success' : 'text-danger'} m-1`}
              >
                {repasswordResult.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="ninkname">
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                type="text"
                placeholder="닉네임을 입력해주세요"
                className="p-3"
                value={nickname}
                onChange={onChangeNickname}
              />
              <Form.Text
                className={`${nicknameResult.success ? 'text-success' : 'text-danger'} m-1`}
              >
                {nicknameResult.message}
              </Form.Text>

              <LocalButton text="가입하기" />
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </>
  );
}

import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import FormInput from '@/components/common/FormInput';
import LocalButton from '@/components/common/LocalButton';
import { Card, Badge, Col } from 'react-bootstrap';
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

  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [repasswordResult, setRepasswordResult] = useState<ValidationResult>({
    message: '',
    success: false,
  });
  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
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

          <FormInput
            htmlFor="email"
            label="아이디"
            value={email}
            onChange={onChangeEmail}
            type="text"
            result={emailResult}
          />

          <FormInput
            htmlFor="password"
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
            type="password"
            result={passwordResult}
          />

          <FormInput
            htmlFor="passwordCheck"
            label="비밀번호 재확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            type="password"
            result={repasswordResult}
          />

          <FormInput
            htmlFor="ninkname"
            label="닉네임"
            value={nickname}
            onChange={onChangeNickname}
            type="text"
            result={nicknameResult}
          />

          <LocalButton text="가입하기" />
        </Card>
      </Col>
    </>
  );
}

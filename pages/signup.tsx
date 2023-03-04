import Link from 'next/link';
import React from 'react';
import FormInput from '@/components/common/FormInput';
import UseInput from '@/components/hooks/UseInput';
import LocalButton from '@/components/common/LocalButton';
import { Card, Badge, Col } from 'react-bootstrap';
import Head from 'next/head';

export default function signup() {
  const [email, onChangeEmail] = UseInput('');
  const [password, onChangePassword] = UseInput('');
  const [passwordCheck, onChangePasswordCheck] = UseInput('');
  const [nickname, onChangeNickname] = UseInput('');

  return (
    <>
      <Head>
        <title>트립로그 - 회원가입</title>
      </Head>

      <Col className="col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto mt-5 mb-5">
        <Card className="p-5">
          <div className="d-flex mb-5">
            <h4>TripLog</h4>
            <Link href="/login">
              <Badge
                bg="secondary"
                text="light"
                className="ms-2 p-1"
                style={{ fontSize: '.3rem' }}
              >
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
          />

          <FormInput
            htmlFor="password"
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
            type="password"
          />

          <FormInput
            htmlFor="passwordCheck"
            label="비밀번호 재확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            type="password"
          />

          <FormInput
            htmlFor="ninkname"
            label="닉네임"
            value={nickname}
            onChange={onChangeNickname}
            type="text"
          />

          <LocalButton text="가입하기" />
        </Card>
      </Col>
    </>
  );
}

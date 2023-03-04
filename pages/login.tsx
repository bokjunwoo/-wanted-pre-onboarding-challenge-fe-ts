import FormInput from '@/components/common/FormInput';
import LocalButton from '@/components/common/LocalButton';
import UseInput from '@/components/hooks/UseInput';
import KakaoLogin from '@/components/kakao/KakaoLogin';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Card, Badge, Col } from 'react-bootstrap';

export default function login() {
  const [email, onChangeEmail] = UseInput('');
  const [password, onChangePassword] = UseInput('');

  return (
    <>
      <Head>
        <title>트립로그 - 로그인</title>
      </Head>

      <Col className="col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto mt-5 mb-5">
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

          <LocalButton text="로그인" />

          <KakaoLogin text="카카오 로그인" />
        </Card>
      </Col>
    </>
  );
}

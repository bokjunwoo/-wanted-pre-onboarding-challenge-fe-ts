import LocalButton from '@/components/common/LocalButton';
import useInput from '@/components/hooks/useInput';
import KakaoLogin from '@/components/kakao/KakaoLogin';
import { emailValidation, passwordValidation } from '@/utils/sign';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Card, Badge, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';

export default function login() {
  const [email, onChangeEmail] = useInput('', emailValidation);
  const [password, onChangePassword] = useInput('', passwordValidation);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
              <Badge bg="secondary" text="light" className="ms-2 p-1" style={{ fontSize: '.3rem' }}>
                아직 회원이 아니라면?
              </Badge>
            </Link>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder="아이디를 입력해주세요"
                className="p-3"
                value={email}
                onChange={onChangeEmail}
              />
              <VisibilityHidden className="text-muted">visibilityHidden</VisibilityHidden>
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
              <VisibilityHidden className="text-muted">visibilityHidden</VisibilityHidden>
            </Form.Group>

            <LocalButton text="로그인" />

            <KakaoLogin text="카카오 로그인" />
          </Form>
        </Card>
      </Col>
    </>
  );
}

const VisibilityHidden = styled(Form.Text)`
  visibility: hidden;
`;

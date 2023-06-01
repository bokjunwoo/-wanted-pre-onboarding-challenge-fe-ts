import {
  IKakaoLoginSuccess,
  ILoginResult,
  ISignupResult,
} from '@/pages/api/api';
import { kakaoLogin } from '@/pages/api/sign';
import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoFormModal from './KakaoFormModal';
import SignSuccess from '../modal/SignSuccess';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import ButtonSpinner from '../common/ButtonSpinner';

interface KakaoLoginProps {
  text: string;
}

export default function KakaoLoginButton({ text }: KakaoLoginProps) {
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [kakaoId, setKakaoId] = useState(0);
  const [result, setResult] = useState<ISignupResult | ILoginResult>({
    type: 'signup',
    success: false,
    message: '',
  });

  const mutation = useMutation<ILoginResult, AxiosError, { id: number }>(
    ['user'],
    kakaoLogin,
    {
      onMutate: () => {
        setLoading(true);
      },
      onError: (error) => {
        alert(error.response?.data);
      },
      onSuccess: (result) => {
        queryClient.setQueryData(['user'], result.nickname);
        setResult(result);
        setShow(true);
      },
      onSettled: () => {
        setLoading(false);
      },
    },
  );

  const kakaoInit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized()) {
      kakao.init('e79b288ebffab6c35ea1c3d7624e2f3a');
    }

    return kakao;
  };

  const KakaoLoginButton = async () => {
    const kakao = kakaoInit();

    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: '/v2/user/me',
          success: async (res: IKakaoLoginSuccess) => {
            const response: ISignupResult | ILoginResult = await kakaoLogin({
              id: res.id,
            });
            if (response.type === 'login') {
              mutation.mutate({ id: res.id });
            } else {
              setResult(response);
              setShow(response.success);
              setKakaoId(res.id);
            }
          },
          fail: () => {
            const result: ISignupResult = {
              type: 'signup',
              success: false,
              message: '카카오 회원가입 도중에 문제가 발생했습니다.',
            };
            setResult(result);
            setShow(true);
          },
        });
      },
      fail: () => {
        const result: ILoginResult = {
          type: 'login',
          success: false,
          message: '카카오 로그인 도중에 문제가 발생했습니다.',
          nickname: '',
        };
        setResult(result);
        setShow(true);
      },
    });
  };

  return (
    <>
      <Btn onClick={KakaoLoginButton} type="button" disabled={loading}>
        {loading ? <ButtonSpinner /> : text}
      </Btn>

      {result.success && (
        <>
          {result.type === 'signup' && (
            <KakaoFormModal show={show} setShow={setShow} id={kakaoId} />
          )}
          {result.type === 'login' && (
            <SignSuccess show={show} setShow={setShow} result={result} />
          )}
        </>
      )}
    </>
  );
}

const Btn = styled.button`
  display: block;
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 5px;
  padding: 0.9rem;
  margin-top: 28px;
  text-align: center;
  font-weight: 700;
  color: #333;
  background-color: #ffd503;
  transition: 0.3s;

  &:hover {
    color: #333;
    background: #d0ad00;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

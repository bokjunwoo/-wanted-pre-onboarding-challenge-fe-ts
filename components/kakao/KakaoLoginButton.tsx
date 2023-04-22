import { IKakaoLoginSuccess, ISignResult } from '@/pages/api/api';
import { kakaoLogin } from '@/pages/api/sign';
import React, { useState } from 'react';
import styled from 'styled-components';

interface KakaoLoginProps {
  text: string;
}

export default function KakaoLoginButton({ text }: KakaoLoginProps) {
  const [result, setResult] = useState({});
  const kakaoInit = () => {
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
            console.log('성공', res);
            const response = await kakaoLogin(res.id);
            const { data } = response;
            const result: ISignResult = {
              type: data.type,
              success: data.success,
              message: data.message,
            };
            setResult(result);
          },
          fail: () => {},
        });
      },
      fail: () => {},
    });
  };
  console.log(result);

  const KakaoLogout = () => {
    const kakao = kakaoInit();

    console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)

    // 카카오 로그인 링크 해제
    kakao.API.request({
      url: '/v1/user/unlink',
      success: (res: any) => {
        // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
        console.log(res);
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };
  return (
    <>
      <Btn onClick={KakaoLoginButton}>{text}</Btn>
      <Btn onClick={KakaoLogout}>{text}아웃</Btn>
    </>
  );
}

const Btn = styled.div`
  display: block;
  width: inherit;
  height: 58px;
  border-radius: 5px;
  padding: 0.9rem;
  margin-top: 28px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  color: #333;
  background-color: #ffd503;
  transition: 0.3s;

  &:hover {
    color: #333;
    background: #d0ad00;
  }
`;

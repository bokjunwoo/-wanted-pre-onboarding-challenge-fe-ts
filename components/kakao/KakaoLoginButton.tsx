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
import { userNicknameState } from '@/atoms/userNicknameState';
import { useSetRecoilState } from 'recoil';

interface KakaoLoginProps {
  text: string;
}

export default function KakaoLoginButton({ text }: KakaoLoginProps) {
  const setUserNickname = useSetRecoilState(userNicknameState);

  const [show, setShow] = useState(false);
  const [kakaoId, setKakaoId] = useState(0);
  const [result, setResult] = useState<ISignupResult | ILoginResult>({
    type: 'signup',
    success: false,
    message: '',
  });

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
            const response = await kakaoLogin(res.id);
            const { data } = response;
            const result: ISignupResult | ILoginResult = {
              type: data.type,
              success: data.success,
              message: data.message,
              nickname: data.nickname,
            };
            if (result.type === 'login') {
              const loginResult = result as ILoginResult;
              setResult(loginResult);
              setShow(loginResult.success);
              setUserNickname(loginResult.nickname);
            } else {
              const signupResult = result as ISignupResult;
              setResult(signupResult);
              setShow(signupResult.success);
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

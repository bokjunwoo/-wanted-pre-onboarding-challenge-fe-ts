import React, { useEffect, useState } from 'react';
import { kakaoInit } from './KakaoLoginButton';
import { IDetailInfo } from '@/pages/api/api';
import { Cursor } from '@/styles/styled';

interface KakaoShareProps {
  detail: IDetailInfo;
  like: number;
  review: number;
}

export default function KakaoShare({ detail, like, review }: KakaoShareProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);

  const shareKakao = () => {
    const kakao = kakaoInit();

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: detail.title,
        description: detail.addr1,
        imageUrl: detail.firstimage1,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: like,
        commentCount: review,
      },
      buttons: [
        {
          title: '홈페이지 가기',
          link: {
            mobileWebUrl: 'https://triplog.shop',
            webUrl: 'https://triplog.shop',
          },
        },
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Cursor>
      <img
        onClick={shareKakao}
        src="/images/KakaoLogo.png"
        alt="카카오로고"
        width="20px"
      />
    </Cursor>
  );
}

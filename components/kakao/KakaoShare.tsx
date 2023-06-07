import React from 'react';
import { kakaoInit } from './KakaoLoginButton';
import { IDetailInfo } from '@/pages/api/api';
import { Cursor } from '@/styles/styled';
import { useRouter } from 'next/router';

interface KakaoShareProps {
  detail: IDetailInfo;
  like: number;
  review: number;
}

export default function KakaoShare({ detail, like, review }: KakaoShareProps) {
  const router = useRouter();
  const currentUrl = router.asPath;

  const shareKakao = () => {
    const kakao = kakaoInit();

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: detail.title,
        description: detail.addr1,
        imageUrl: detail.firstimage1,
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
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
            mobileWebUrl: 'http://3.35.13.65:3000/',
            webUrl: 'http://3.35.13.65:3000/',
          },
        },
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
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

import React, { useState } from 'react';
import LoginRequired from '../modal/LoginRequired';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Preparation } from '@/styles/styled';

interface ContentProps {
  content: string;
  region?: string;
}

export default function SubPreparation({ content, region }: ContentProps) {
  const router = useRouter();

  const { data: user } = useQuery(['user'], userInfo);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (user) {
      if (region) {
        router.push(`/${content}/${region}/테스트/1`);
      } else {
        router.push(`/${content}/테스트`);
      }
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <Preparation onClick={handleClick}>
        {region ? (
          <img src={`/images/submain/${content}.png`} alt={content} />
        ) : (
          <img src={`/images/submain/${content}.png`} alt={content} />
        )}
      </Preparation>

      <LoginRequired show={show} setShow={setShow} />
    </>
  );
}

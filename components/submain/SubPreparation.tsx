import React, { useState } from 'react';
import LoginRequired from '../modal/LoginRequired';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Preparation } from '@/styles/styled';
import PlanCalendarModal from '../plan/PlanCalendarModal';

interface ContentProps {
  content: string;
  region?: string;
}

export default function SubPreparation({ content, region }: ContentProps) {
  const router = useRouter();

  const { data: user } = useQuery(['user'], userInfo);

  const [show, setShow] = useState(false);
  const [calendarShow, setCalendarShow] = useState(false);

  const handleClick = () => {
    if (user) {
      if (region) {
        setCalendarShow(true);
      } else {
        router.push(`/${content}/${user}`);
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

      <PlanCalendarModal
        show={calendarShow}
        onHide={setCalendarShow}
        region={region}
      />
    </>
  );
}

import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function MainText() {
  const { data: user } = useQuery(['user'], userInfo);

  return (
    <h1 className="fw-bold lh-base mt-5 mx-lg-5 fs-md-6">
      <span style={{ color: '#198754' }}>{user ? user : '여행자'}</span>
      님,
      <br></br>TripLog에 오신걸 환영합니다!
    </h1>
  );
}

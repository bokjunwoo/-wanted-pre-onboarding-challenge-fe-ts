import React from 'react';

interface IUserInfoProps {
  user: string;
  message: string;
}

export default function UserInfo({ user, message }: IUserInfoProps) {
  return (
    <h1 className="fw-bold lh-base mt-5 mb-5">
      <span style={{ color: '#198754' }}>{user}</span>
      <span> 님의 </span>
      <br></br>
      {message}
    </h1>
  );
}

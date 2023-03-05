import React from 'react';
import styled from 'styled-components';

interface KakaoLoginProps {
  text: string;
}

export default function KakaoLogin({ text }: KakaoLoginProps) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.a`
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

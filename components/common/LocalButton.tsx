import React from 'react';
import styled from 'styled-components';

interface LocalLoginProps {
  text: string;
  onSubmitForm: () => void;
}

export default function LocalButton({ text, onSubmitForm }: LocalLoginProps) {
  return <Btn onClick={onSubmitForm}>{text}</Btn>;
}

const Btn = styled.a`
  display: block;
  width: 100%;
  height: 58px;
  border-radius: 5px;
  padding: 0.9rem;
  margin-top: 28px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background-color: #333;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background: #555;
  }
`;

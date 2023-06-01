import React from 'react';
import styled from 'styled-components';
import ButtonSpinner from './ButtonSpinner';

interface LocalLoginProps {
  text: string;
  onSubmitForm: () => void;
  loading: boolean;
}

export default function LocalButton({
  text,
  onSubmitForm,
  loading,
}: LocalLoginProps) {
  return (
    <Btn onClick={onSubmitForm} type="button" disabled={loading}>
      {loading ? <ButtonSpinner /> : text}
    </Btn>
  );
}

const Btn = styled.button`
  display: block;
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 5px;
  padding: 0.9rem;
  margin-top: 28px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  background-color: #333;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background: #555;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

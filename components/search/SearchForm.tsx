import { Input } from '@/styles/styled';
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';

export default function SearchForm() {
  const searchParams = useSearchParams();
  const region = searchParams.get('region');

  const router = useRouter();

  const [value, onChangeValue, setValue] = useInput('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const searchHelper = () => {
    if (region === null) {
      setMessage('지역을 선택해주세요.');
      setShowMessage(true);
      return;
    }
    if (value.length === 0) {
      setMessage('검색어를 입력해주세요.');
      setShowMessage(true);
      return;
    }
    setShowMessage(false);
  };

  const handleTitleChange = () => {
    const queryString = createQueryString('title', value);
    router.push('?' + queryString);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchHelper();
    handleTitleChange();
    setValue('');
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <>
      <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <Input
          type="text"
          className="me-2"
          value={value}
          onChange={onChangeValue}
        />

        <Button variant="outline-success" type="submit">
          검색
        </Button>
      </Form>

      {showMessage && <div className="text-danger">{message}</div>}
    </>
  );
}

import { Input } from '@/styles/styled';
import { useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';

export default function SearchForm() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const [value, onChangeValue, setValue] = useInput('');

  const handleTitleChange = () => {
    const queryString = createQueryString('title', value);
    router.push('?' + queryString);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    </>
  );
}

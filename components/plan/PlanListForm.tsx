import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useInput from '../hooks/useInput';

export default function PlanListForm() {
  // const searchHelper = async (search: string) => {
  //   if (search.length === 0)
  //     return { message: '검색어를 입력해주세요', success: false };
  //   return { message: '', success: true };
  // };

  const [search, onChangeSearch] = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form
      className="d-flex justify-content-center align-items-center"
      onSubmit={handleSubmit}
    >
      <Form.Control
        type="text"
        placeholder="검색어를 입력해주세요"
        className="p-1 w-50 me-2"
        value={search}
        onChange={onChangeSearch}
      />
      <Button variant="secondary">검색</Button>
    </Form>
  );
}

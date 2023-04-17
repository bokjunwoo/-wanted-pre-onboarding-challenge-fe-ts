import { Container } from '@/styles/styled';
import React from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import PlanList from './PlanList';

export default function PlanListCard() {
  const searchHelper = async (search: string) => {
    if(search.length === 0) return {message: '검색어를 입력해주세요', success: false}
    return {message: '', success: true}
  }

  const [search, onChangeSearch] = useInput('', searchHelper);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form
        className="d-flex justify-content-center mt-3"
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

      <ListGroup variant="flush" className="mt-3">
        {Array.from({ length: 10 }).map((_, i) => {
          return <PlanList key={i} />;
        })}
      </ListGroup>
    </Container>
  );
}

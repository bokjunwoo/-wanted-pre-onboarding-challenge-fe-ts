import { Input } from '@/styles/styled';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SearchForm() {
  return (
    <Form className="d-flex align-items-center">
      <Input type="text" className="me-2" />

      <Button variant="outline-success">검색</Button>
    </Form>
  );
}

import { userInfo } from '@/pages/api/sign';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, InputGroup, Form, Col } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { ledgerAdd } from '@/pages/api/ledger';
import { Ledger } from '@/pages/ledger/[userId]';

export default function LedgerForm() {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const [text, onChangeText, setText] = useInput('');
  const [price, onChangePrice, setPrice] = useInput('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const mutationAdd = useMutation(['ledger'], ledgerAdd, {
    onMutate() {
      if (!user) return;
      queryClient.setQueryData<Ledger>(['ledger'], (data) => {
        const newData = data?.chargeList || [];
        newData.push({
          id: Date(),
          date: selectedDate,
          title: text,
          price: price,
        });
        return {
          _id: '',
          nickname: '',
          chargeList: newData,
        };
      });
    },
    onSuccess() {
      setText('');
      setPrice('');
      setSelectedDate('');
    },
    onSettled() {
      queryClient.refetchQueries(['ledger']);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutationAdd.mutateAsync({
      user,
      date: selectedDate,
      title: text,
      price,
    });
  };

  return (
    <Form className="mb-4" onSubmit={handleSubmit}>
      <div>
        <span className="fw-bold fs-5">날짜</span>
        <InputGroup className="mt-2 mb-4">
          <Form.Control
            type="date"
            required
            value={selectedDate}
            onChange={handleDateChange}
          />
        </InputGroup>
      </div>

      <div>
        <span className="fw-bold fs-5">내용</span>
        <InputGroup className="mt-2 mb-4">
          <Form.Control
            type="text"
            required
            value={text}
            onChange={onChangeText}
          />
        </InputGroup>
      </div>

      <div>
        <span className="fw-bold fs-5">금액</span>
        <InputGroup className="mt-2 mb-4">
          <Form.Control
            type="number"
            placeholder="숫자만 입력됩니다."
            required
            value={price}
            onChange={onChangePrice}
          />
        </InputGroup>
      </div>

      <Col className="text-end">
        <Button variant="success" className="text-end" type="submit">
          등록
        </Button>
      </Col>
    </Form>
  );
}

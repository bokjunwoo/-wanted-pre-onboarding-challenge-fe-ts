import { userInfo } from '@/pages/api/sign';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, InputGroup, Form, Col } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { ledgerAdd } from '@/pages/api/ledger';
import ToastMessage from '../toast/ToastMessage';
import { Ledger } from '@/usequery/useLedger';

export default function LedgerForm() {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const [text, onChangeText, setText] = useInput('');
  const [price, setPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10); // 문자열을 숫자로 변환

    setPrice(parsedValue);
  };

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
      setPrice(0);
      setSelectedDate('');
    },
    onSettled() {
      queryClient.refetchQueries(['ledger']);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0) {
      setToastMessage('내용을 입력해 주세요.');
      setToast(true);
      return;
    }
    if (price === 0) {
      setToastMessage('금액을 입력해 주세요.');
      setToast(true);
      return;
    }
    mutationAdd.mutate({
      user,
      date: selectedDate,
      title: text,
      price,
    });
  };

  return (
    <>
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
            <Form.Control type="text" value={text} onChange={onChangeText} />
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

      <ToastMessage
        message={toastMessage}
        show={toast}
        setShow={setToast}
        variant="danger"
      />
    </>
  );
}

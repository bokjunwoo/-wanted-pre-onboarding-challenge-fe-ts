import React, { useCallback, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Cursor } from '@/styles/styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userInfo } from '@/pages/api/sign';
import { ledgerDelete, ledgerDeleteAll } from '@/pages/api/ledger';
import CheckModal from '../modal/CheckModal';
import { AxiosError } from 'axios';
import { Ledger, LedgerItem } from '@/usequery/useLedger';

export default function LedgerReceipt({ ledger }: { ledger: LedgerItem[] }) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const [show, setShow] = useState(false);
  const [person, setPerson] = useState(1);

  const increasePerson = () => {
    if (person < 10) {
      setPerson(person + 1);
    }
  };

  const decreasePerson = () => {
    if (person > 1) {
      setPerson(person - 1);
    }
  };

  const mutationDelete = useMutation(['ledger'], ledgerDelete, {
    onMutate({ id }) {
      if (!user) return;
      queryClient.setQueryData<Ledger>(['ledger'], (data) => {
        const newData = data?.chargeList || [];
        const updatedData = newData.filter((value) => value.id !== id);

        return {
          _id: '',
          nickname: '',
          chargeList: updatedData,
        };
      });
    },
    onSettled() {
      queryClient.refetchQueries(['ledger']);
    },
  });

  const onSubmitDelete = (id: string) => {
    mutationDelete.mutate({ user, id });
  };

  const mutationDeleteAll = useMutation<
    Ledger,
    AxiosError,
    { user: string },
    void
  >(['ledger'], ledgerDeleteAll, {
    onSettled() {
      queryClient.refetchQueries(['ledger']);
    },
  });

  const onSubmitDeleteAll = () => {
    mutationDeleteAll.mutate({ user });
  };

  const modalHandler = useCallback(() => {
    setShow(true);
  }, []);

  const totalPrice = ledger.reduce((total, item) => total + item.price, 0);
  const perAmount = totalPrice / person;
  const formattedAmount =
    perAmount % 1 === 0 ? perAmount.toFixed(0) : perAmount.toFixed(1);

  return (
    <div
      className="p-4 rounded border mb-3"
      style={{ backgroundColor: '#fafafa' }}
    >
      <div>
        <h5 className="fw-bold text-center" style={{ color: '#198754' }}>
          TripLog
        </h5>

        <h1 className="fw-bold text-center">RECEIPT</h1>

        <hr className="solid" style={{ borderTopWidth: '2px' }}></hr>
      </div>

      <div>
        <Row className="text-start">
          <Col className="fw-bold col-3 fs-5">Day</Col>
          <Col className="fw-bold col-4 fs-5">ITEM</Col>
          <Col className="fw-bold col-3 fs-5">Price</Col>
          <Col className="fw-bold col-2 fs-5 text-end">Del</Col>
        </Row>
        <hr className="solid"></hr>
      </div>
      {ledger.length === 0 ? (
        <Row>
          <Col className="text-center">작성된 금액이 없습니다.</Col>
        </Row>
      ) : (
        ledger.map((v) => {
          return (
            <Row className="text-start mb-2" key={v.id}>
              <Col className="col-3">{v.date.slice(5, 10)}</Col>
              <Col className="col-4">{v.title}</Col>
              <Col className="col-3">{v.price.toLocaleString()}원</Col>
              <Col className="col-2 text-end">
                <Cursor
                  onClick={() => {
                    onSubmitDelete(v.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Cursor>
              </Col>
            </Row>
          );
        })
      )}

      <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>

      <Row className="fs-6 mb-2">
        <Col>ITEM COUNT</Col>
        <Col className="text-end">{ledger.length}개</Col>
      </Row>

      <Row className="fs-6 mb-2">
        <Col>총 합계</Col>
        <Col className="text-end text-primary">
          {totalPrice.toLocaleString()}원
        </Col>
      </Row>

      <Row className="fs-6 mb-2">
        <Col>
          <div style={{ display: 'inline-block', width: '80px' }}>
            인원수 {person}명
          </div>{' '}
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={increasePerson}
            className="bg-warning me-1 ps-1 pe-1"
          />{' '}
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={decreasePerson}
            className="bg-warning ps-1 pe-1"
          />
        </Col>
        <Col className="text-end text-danger">
          {formattedAmount.toLocaleString()}원
        </Col>
      </Row>

      <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>

      <Col className="text-end">
        {ledger.length === 0 ? (
          <Button variant="success" type="button" disabled={true}>
            초기화
          </Button>
        ) : (
          <Button variant="success" type="button" onClick={modalHandler}>
            초기화
          </Button>
        )}
      </Col>

      <CheckModal
        show={show}
        setShow={setShow}
        message1="데이터를 전체 삭제합니다"
        message2="삭제된 데이터는 복구되지 않습니다."
        onSubmit={onSubmitDeleteAll}
      />
    </div>
  );
}

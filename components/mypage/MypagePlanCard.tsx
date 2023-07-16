import { regionNames } from '@/data/region';
import React, { useCallback, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CheckModal from '../modal/CheckModal';
import { ExtendedDateObject, useUserPlanData } from '@/usequery/useUserPlan';
import { useQuery } from '@tanstack/react-query';
import { userInfo } from '@/pages/api/sign';
import PlanDetailModal from '../plan/PlanDetailModal';

export default function MypagePlanCard({ data }: { data: ExtendedDateObject }) {
  const { data: user } = useQuery(['user'], userInfo);

  const firstDay = data.plan[0].date;
  const lastDay = data.plan[data.plan.length - 1].date;

  const [modalShow, setModalShow] = useState(false);
  const [detailShow, setDatailShow] = useState(false);

  const { handleDeletePlan } = useUserPlanData();

  const modalHandler = useCallback(() => {
    setModalShow(true);
  }, []);

  const detialHandler = useCallback(() => {
    setDatailShow(true);
  }, []);

  const onSubmitPlanDelete = useCallback(() => {
    handleDeletePlan({ _id: data._id, user });
  }, [data._id, handleDeletePlan, user]);

  return (
    <>
      <Card className="rounded-1 mt-2 mb-2">
        <Card.Body className="p-2">
          <Card.Title className="mb-2">여행 : {data.title}</Card.Title>

          <Card.Text className="text-muted mb-2">
            지역 : {regionNames[data.region]}
          </Card.Text>

          <Card.Text className="text-muted mb-2">
            {firstDay} ~ {lastDay}
          </Card.Text>

          <div className="d-flex justify-content-end">
            <Button
              size="sm"
              variant="outline-danger"
              className="me-2"
              onClick={modalHandler}
            >
              삭제
            </Button>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={detialHandler}
            >
              자세히보기
            </Button>
          </div>
        </Card.Body>
      </Card>

      <CheckModal
        show={modalShow}
        setShow={setModalShow}
        message1="해당 계획을 삭제 하실건가요?"
        onSubmit={onSubmitPlanDelete}
      />

      <PlanDetailModal show={detailShow} setShow={setDatailShow} data={data} />
    </>
  );
}

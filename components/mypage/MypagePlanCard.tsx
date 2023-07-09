import { DateObject } from '@/atom/planSelector';
import { regionNames } from '@/data/region';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function MypagePlanCard({ data }: { data: DateObject }) {
  const firstDay = data.plan[0].date;
  const lastDay = data.plan[data.plan.length - 1].date;

  return (
    <Card className="rounded-2 mt-2 mb-2">
      <Card.Body className="p-2">
        <Card.Title className="mb-2">여행 : {data.title}</Card.Title>

        <Card.Text className="text-muted mb-2">
          지역 : {regionNames[data.region]}
        </Card.Text>

        <Card.Text className="text-muted mb-2">
          {firstDay} ~ {lastDay}
        </Card.Text>

        <div className="d-flex justify-content-end">
          <Button size="sm" variant="outline-danger" className="me-2">
            삭제
          </Button>
          <Button size="sm" variant="outline-secondary" className="">
            자세히보기
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

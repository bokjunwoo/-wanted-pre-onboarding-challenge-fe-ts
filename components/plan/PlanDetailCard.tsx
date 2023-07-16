import { DateItem } from '@/atom/planSelector';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PlanDetailList from './PlanDetailList';

interface IPlanDetailCardProps {
  data: DateItem;
  number: number;
}

export default function PlanDetailCard({ data, number }: IPlanDetailCardProps) {
  return (
    <ListGroup.Item className="ps-2 pe-2">
      <div className="d-flex">
        <div>
          <div className="d-flex align-items-center">
            <h5>
              {number}일차 : {data.date}
            </h5>
          </div>

          <div>
            {data.list.length === 0 ? (
              <span>등록한 리스트가 없습니다.</span>
            ) : (
              data.list.map((v, i) => (
                <PlanDetailList key={i} data={v} number={i + 1} />
              ))
            )}
          </div>
        </div>
      </div>
    </ListGroup.Item>
  );
}

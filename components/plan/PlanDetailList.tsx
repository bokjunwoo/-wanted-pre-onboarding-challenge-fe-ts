import { ISearchDataInfo } from '@/pages/api/api';
import { NumberBox } from '@/styles/styled';
import React from 'react';

interface IPlanDetailCardProps {
  data: ISearchDataInfo;
  number: number;
}

export default function PlanDetailList({ data, number }: IPlanDetailCardProps) {
  return (
    <div className="d-flex">
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <NumberBox>{number}</NumberBox>
        </div>

        <div className="ms-2">
          <span className="fs-5">{data.title}</span>{' '}
          <span className="text-muted">({data.addr1})</span>
        </div>
      </div>
    </div>
  );
}

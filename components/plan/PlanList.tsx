import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap';
import { NumberBox } from '@/styles/styled';
import { getAverageStar } from '@/utils/detailHelper';

interface IPlanList {
  number?: number;
  title: string;
  star: {
    star: number;
  }[];
  addr1: string;
  like: number;
}

export default function PlanList({
  number,
  title,
  star,
  addr1,
  like,
}: IPlanList) {
  const averageStar = getAverageStar(star);

  return (
    <ListGroup.Item className="ps-2 pe-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            {number && <NumberBox>{number}</NumberBox>}
          </div>

          <div className="ms-2">
            <span className="fs-5">{title}</span>{' '}
            <span className="text-muted">({addr1})</span>
            <br />
            <span style={{ color: '#ffd400' }}>★</span>{' '}
            <span className="text-muted">({averageStar})</span> <span>❤️</span>{' '}
            <span className="text-muted">({like})</span>
          </div>
        </div>

        {number && (
          <div className="d-flex align-items-center">
            <CloseButton />
          </div>
        )}
      </div>
    </ListGroup.Item>
  );
}

import { IItemInfo } from '@/pages/api/api';
import { getAverageStar } from '@/utils/detailHelper';
import Link from 'next/link';
import React from 'react';
import { Col, Card } from 'react-bootstrap';

interface IListCardProps {
  data: IItemInfo;
  region: string;
}

export default function ListCard({ data, region }: IListCardProps) {
  const averageStar = getAverageStar(data.star);

  return (
    <Col className="pt-3 ps-3 pe-3 pb-2">
      <Link href={`/detail/${region}/${data.contentid}`}>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src={
              data.firstimage1 === ''
                ? '/images/defaultImage.png'
                : data.firstimage1
            }
            height="230px"
            className="border"
          />

          <Card.Body className="p-2">
            <Card.Title>{data.title}</Card.Title>

            <Card.Text className="text-muted mb-2">{data.addr1}</Card.Text>

            <Card.Text className="text-muted">
              <span className="text-muted me-2">조회수 {data.view}</span>
              <span className="me-2">
                ⭐️ {averageStar}({data.star.length})
              </span>
              <span className="me-2">❤ {data.like}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

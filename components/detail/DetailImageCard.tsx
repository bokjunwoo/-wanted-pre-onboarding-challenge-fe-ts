import { Cursor } from '@/styles/styled';
import React from 'react';
import { Card } from 'react-bootstrap';

interface IDetailImageCardProps {
  image: string;
  like: number;
  star: string;
  likeClickUser: string;
}

export default function DetailImageCard({
  image,
  like,
  star,
  likeClickUser,
}: IDetailImageCardProps) {
  return (
    <Card style={{ height: '500px' }}>
      <Card.Img
        variant="top"
        src={image === '' ? '/images/defaultImage.png' : image}
        height="420px"
        className="fluid border"
      />
      <Card.Body className="d-flex justify-content-center align-items-center text-center pt-2 pb-2 fs-6">
        <div className="col-3">
          <Cursor>{likeClickUser}</Cursor>
          <div>{like}</div>
        </div>

        <div className="col-3">
          <Cursor>⭐</Cursor>
          <div>{star}</div>
        </div>

        <div className="col-3">
          <Cursor>🛠️</Cursor>
          <div>카카오 공유</div>
        </div>

        <div className="col-3">
          <Cursor>🛠️</Cursor>
          <div>URL 복사</div>
        </div>
      </Card.Body>
    </Card>
  );
}

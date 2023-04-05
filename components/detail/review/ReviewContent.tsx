import { IReviewInfo } from '@/pages/api/api';
import React, { useCallback, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ReviewWrite from './ReviewWrite';
import moment from 'moment';

moment.locale('ko');

export default function ReviewContent({ review }: { review: IReviewInfo }) {
  const [edit, setEdit] = useState<boolean>(false);
  const onClickEdit = useCallback(() => {
    setEdit((prev) => !prev);
  }, []);

  const stars = [0, 0, 0, 0, 0];

  for (let i = 0; i < review.star; i++) {
    stars[i] = 1;
  }

  return (
    <ListGroup.Item className="ps-0 pe-0">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <UserIamge src="/images/main/card0.jpg" alt="" />
          </div>

          <div className="ms-2">
            <span>{review.nickName}</span>
            <br />
            {stars.map((star, i) => (
              <span key={i} style={{ color: star === 0 ? 'gray' : '#ffd400' }}>
                ★
              </span>
            ))}
            <span className="text-muted ms-1">
              {moment(review.writeTime).format('YYYY.MM.DD')}
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center">
          {edit ? (
            <Button variant="outline-success" size="sm" onClick={onClickEdit}>
              확인
            </Button>
          ) : (
            <Button variant="outline-success" size="sm" onClick={onClickEdit}>
              수정
            </Button>
          )}

          {edit ? (
            <Button
              variant="outline-danger"
              className="ms-2"
              size="sm"
              onClick={onClickEdit}
            >
              취소
            </Button>
          ) : (
            <Button variant="outline-danger" className="ms-2" size="sm">
              삭제
            </Button>
          )}
        </div>
      </div>

      <div>
        {edit ? (
          <ReviewWrite value={review.content} autoFocus={true} />
        ) : (
          <span>{review.content}</span>
        )}
      </div>
    </ListGroup.Item>
  );
}

export const UserIamge = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid black;
  border-radius: 50%;
`;

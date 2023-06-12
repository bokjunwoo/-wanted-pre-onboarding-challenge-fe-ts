import { IReviewInfo } from '@/pages/api/api';
import React, { useCallback, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import moment from 'moment';
import { userInfo } from '@/pages/api/sign';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ReviewEdit from './ReviewEdit';
import { reviewDelete } from '@/pages/api/review';
import { useRouter } from 'next/router';
import CheckModal from '@/components/modal/CheckModal';

moment.locale('ko');

export default function ReviewContent({ review }: { review: IReviewInfo }) {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { region, id } = router.query as { region: string; id: string };

  const { data: user } = useQuery(['user'], userInfo);

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState<boolean>(false);
  const onClickEdit = useCallback(() => {
    setEdit((prev) => !prev);
  }, []);

  const stars = [0, 0, 0, 0, 0];

  for (let i = 0; i < review.star; i++) {
    stars[i] = 1;
  }

  const mutationDelete = useMutation(['fetchReview', id], reviewDelete, {
    onMutate(review) {
      if (!user) return;
      queryClient.setQueryData<IReviewInfo[]>(['fetchReview', id], (data) => {
        const updatedData = data?.filter((data) => data._id !== review._id);
        return updatedData;
      });
    },
    onSuccess() {
      queryClient.refetchQueries(['fetchReview', id]);
    },
  });

  const modalHandler = useCallback(() => {
    setShow(true);
  }, []);

  const onSubmitReviewDelete = useCallback(() => {
    mutationDelete.mutate({ _id: review._id, user, region, time: review.time });
  }, [region, mutationDelete, review._id, review.time, user]);

  return (
    <>
      <ListGroup.Item className="ps-0 pe-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <UserIamge src="/images/main/card0.jpg" alt="" />
            </div>

            <div className="ms-2">
              <span>{review.nickname}</span>
              <br />
              {stars.map((star, i) => (
                <span
                  key={i}
                  style={{ color: star === 0 ? 'gray' : '#ffd400' }}
                >
                  ★
                </span>
              ))}
              <span className="text-muted ms-1">
                {moment(review.time).format('YYYY.MM.DD')}
              </span>
            </div>
          </div>

          {review.nickname === user ? (
            <div className="d-flex align-items-center">
              {edit ? (
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={onClickEdit}
                >
                  확인
                </Button>
              ) : (
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={onClickEdit}
                >
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
                <Button
                  variant="outline-danger"
                  className="ms-2"
                  size="sm"
                  onClick={modalHandler}
                >
                  삭제
                </Button>
              )}
            </div>
          ) : null}
        </div>

        <div>
          {edit ? (
            <ReviewEdit
              value={review.content}
              autoFocus={true}
              _id={review._id}
              setEdit={setEdit}
            />
          ) : (
            <span>{review.content}</span>
          )}
        </div>
      </ListGroup.Item>

      <CheckModal
        show={show}
        setShow={setShow}
        message1="리뷰를 삭제 하실건가요?"
        onSubmit={onSubmitReviewDelete}
      />
    </>
  );
}

export const UserIamge = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid black;
  border-radius: 50%;
`;

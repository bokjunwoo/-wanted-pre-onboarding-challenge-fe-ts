import { IDetailLike } from '@/pages/api/api';
import { detailLike } from '@/pages/api/detail';
import { userInfo } from '@/pages/api/sign';
import { Cursor } from '@/styles/styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { Card } from 'react-bootstrap';

interface IDetailImageCardProps {
  image: string;
  like: number;
  star: string;
  likeClickUser: '🤍' | '❤️';
  onButtonClick: () => void;
}

export default function DetailImageCard({
  image,
  like,
  star,
  likeClickUser,
  onButtonClick,
}: IDetailImageCardProps) {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { region, id } = router.query as { region: string; id: string };

  const { data: user } = useQuery(['user'], userInfo);

  const mutationLike = useMutation(['fetchDetailLike', id], detailLike, {
    onMutate() {
      if (!user) return;

      queryClient.setQueryData<IDetailLike>(['fetchDetailLike', id], (data) => {
        const newLike = data?.like || 0;
        const newLikeuser = data?.likeuser || [];

        const updateLike = newLike + 1;
        const updateLikeUser = [...newLikeuser, user];

        return {
          like: updateLike,
          likeuser: updateLikeUser,
        };
      });
    },

    onSuccess() {
      queryClient.refetchQueries(['fetchDetailLike']);
    },
  });

  const onSubmitLike = useCallback(() => {
    mutationLike.mutate({ id, region, user });
  }, [mutationLike, id, region, user]);

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
          <Cursor onClick={onSubmitLike}>{likeClickUser}</Cursor>
          <div>{like}</div>
        </div>

        <div className="col-3">
          <Cursor onClick={onButtonClick}>⭐</Cursor>
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

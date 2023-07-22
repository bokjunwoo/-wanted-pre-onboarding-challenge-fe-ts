import { userErrorState } from '@/atom/userErrorSelector';
import { userImageState } from '@/atom/userImageSelector';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import UserImage from './UserImage';

export default function UserImageUpload() {
  const [userImage, setuserImage] = useRecoilState(userImageState);
  const userError = useRecoilValue(userErrorState);

  const { data: user } = useQuery(['user'], userInfo);

  const onClcikCancel = useCallback(() => {
    setuserImage('');
  }, [setuserImage]);

  return (
    <div className="d-flex flex-column align-items-center">
      <UserImage width="150px" height="150px" />

      {userImage !== '' && (
        <div className="d-flex justify-content-center mt-2 mb-2">
          <Button size="sm" className="ms-2 me-2" variant="outline-primary">
            저장
          </Button>
          <Button
            size="sm"
            className="ms-2 me-2"
            variant="outline-danger"
            onClick={onClcikCancel}
          >
            취소
          </Button>
        </div>
      )}

      {userError !== '' && <div className="text-danger mt-2">{userError}</div>}

      <p className="fs-3 text-center text-success fw-bold m-2">{user}</p>
    </div>
  );
}

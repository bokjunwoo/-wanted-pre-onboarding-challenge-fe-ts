import { userImageState } from '@/atom/userImageSelector';
import { userImageData, userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

export default function UserImage() {
  const [userImage, setuserImage] = useRecoilState(userImageState);

  const { data: user } = useQuery(['user'], userInfo);
  const { data: userImageInfo } = useQuery(['userImage'], userImageData);

  const onClcikCancel = useCallback(() => {
    setuserImage('');
  }, [setuserImage]);

  return (
    <div className="d-flex flex-column align-items-center">
      {userImage !== '' && userImageInfo === '' ? (
        <UserImageSize
          src={`http://localhost:4000/${userImage}`}
          alt="회원 이미지"
          className="m-4 mb-2"
        />
      ) : (
        <UserImageSize
          src={
            userImage === ''
              ? '/images/noneUserImage.png'
              : `http://localhost:4000/${userImage}`
          }
          alt="회원 이미지"
          className="mt-4"
        />
      )}

      {userImage !== '' && (
        <div className="d-flex justify-content-center mb-2">
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
      <p className="fs-3 text-center text-success fw-bold m-2">{user}</p>
    </div>
  );
}

export const UserImageSize = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

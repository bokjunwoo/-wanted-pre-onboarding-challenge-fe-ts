import { userImageState } from '@/atom/userImageSelector';
import { userImageData, userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

export default function UserImage() {
  const [userImage, setuserImage] = useRecoilState(userImageState);

  const { data: user } = useQuery(['user'], userInfo);
  const { data: userImageInfo } = useQuery(['userImage'], userImageData);

  return (
    <div className="d-flex flex-column align-items-center">
      <UserImageSize
        src={
          userImage === ''
            ? '/images/defaultImage.png'
            : `http://localhost:4000/${userImage}`
        }
        alt="회원 이미지"
        className="m-4"
      />
      {userImage !== '' ? (
        <div className="d-flex justify-content-center">
          <Button size="sm" className="ms-2 me-2" variant="outline-primary">
            저장
          </Button>
          <Button size="sm" className="ms-2 me-2" variant="outline-danger">
            취소
          </Button>
        </div>
      ) : null}
      <p className="fs-3 text-center text-success fw-bold m-2">{user}</p>
    </div>
  );
}

export const UserImageSize = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: solid 1px black;
`;

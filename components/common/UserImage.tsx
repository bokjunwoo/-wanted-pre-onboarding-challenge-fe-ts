import { userImageState } from '@/atom/userImageSelector';
import { userImageData } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

interface IUserImageProps {
  width: string;
  height: string;
}

export default function UserImage({ width, height }: IUserImageProps) {
  const userImage = useRecoilValue(userImageState);
  const { data: userImageInfo } = useQuery(['userImage'], userImageData);

  return (
    <span>
      {userImage !== '' && userImageInfo === '' ? (
        <UserImageSize
          src={`http://localhost:4000/${userImage}`}
          alt="회원 이미지"
          width={width}
          height={height}
        />
      ) : (
        <UserImageSize
          src={
            userImage === ''
              ? '/images/noneUserImage.png'
              : `http://localhost:4000/${userImage}`
          }
          alt="회원 이미지"
          width={width}
          height={height}
        />
      )}
    </span>
  );
}

const UserImageSize = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  background-color: #d9d9d9;
`;

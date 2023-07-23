import { userErrorState } from '@/atom/userErrorSelector';
import { userImageState } from '@/atom/userImageSelector';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import UserImage from './UserImage';
import { userImageSave } from '@/pages/api/image';
import ToastMessage from '../toast/ToastMessage';

export default function UserImageUpload() {
  const [userImage, setuserImage] = useRecoilState(userImageState);
  const userError = useRecoilValue(userErrorState);

  const { data: user } = useQuery(['user'], userInfo);

  const [uploadSave, setUploadSave] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  const onClcikCancel = useCallback(() => {
    setuserImage('');
  }, [setuserImage]);

  const onSubmitImage = useCallback(() => {
    userImageSave({ user: user, image: userImage }).then((res) => {
      setUploadSave(res);
      setToastShow(res);
    });
  }, [user, userImage]);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <UserImage width="150px" height="150px" />

        {userImage !== '' && !uploadSave && (
          <div className="d-flex justify-content-center mt-2 mb-2">
            <Button
              size="sm"
              className="ms-2 me-2"
              variant="outline-danger"
              onClick={onClcikCancel}
            >
              취소
            </Button>
            <Button
              size="sm"
              className="ms-2 me-2"
              variant="outline-primary"
              onClick={onSubmitImage}
            >
              저장
            </Button>
          </div>
        )}

        {userError !== '' && (
          <div className="text-danger mt-2">{userError}</div>
        )}

        <p className="fs-3 text-center text-success fw-bold m-2">{user}</p>
      </div>

      <ToastMessage
        show={toastShow}
        setShow={setToastShow}
        message="이미지 저장이 완료되었어요."
        variant="primary"
      />
    </>
  );
}

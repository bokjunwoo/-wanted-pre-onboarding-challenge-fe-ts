import { reviewImageState } from '@/atom/reviewImageSelector';
import { userErrorState } from '@/atom/userErrorSelector';
import ToastMessage from '@/components/toast/ToastMessage';
import { reviewImagesUpload } from '@/pages/api/image';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSetRecoilState } from 'recoil';

export default function ReviewUploadButton() {
  const { data: user } = useQuery(['user'], userInfo);

  const setReviewImage = useSetRecoilState(reviewImageState);
  const setUserError = useSetRecoilState(userErrorState);

  const imageInput = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const onClickImageUpload = useCallback(() => {
    if (!user) {
      setToastMessage('로그인이 필요한 기능입니다.');
      setIsLogin(true);
      return;
    }
    if (imageInput.current) {
      imageInput.current.click();
    }
  }, [user]);

  const onChangeImages = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const MAX_IMAGES = 3; // 최대 등록 가능한 이미지 수
      const selectedFiles = e.target.files;

      if (selectedFiles && selectedFiles.length > MAX_IMAGES) {
        setToastMessage('사진은 최대 3장까지 등록가능합니다.');
        setIsLogin(true);
        return;
      }

      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
      });

      reviewImagesUpload(imageFormData)
        .then((res) => {
          setReviewImage(res);
        })
        .catch((error) => {
          console.error('Image upload failed:', error);
          setUserError(
            '이미지 등록이 실패했습니다. 새로고침 후 다시 시도해 주세요.',
          );
        });
    },
    [setReviewImage, setUserError],
  );

  return (
    <>
      <Form
        className="d-flex justify-content-end"
        encType="multipart/form-data"
      >
        <Button
          size="sm"
          className="mt-2"
          variant="outline-secondary"
          onClick={onClickImageUpload}
        >
          이미지 업로드
        </Button>

        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
      </Form>

      <ToastMessage
        variant="danger"
        show={isLogin}
        setShow={setIsLogin}
        message={toastMessage}
      />
    </>
  );
}

import { userErrorState } from '@/atom/userErrorSelector';
import { userImageState } from '@/atom/userImageSelector';
import { userImageUpload } from '@/pages/api/image';
import React, { useCallback, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSetRecoilState } from 'recoil';

export default function MypageImageForm() {
  const setUserImage = useSetRecoilState(userImageState);
  const setUserError = useSetRecoilState(userErrorState);

  const imageInput = useRef<HTMLInputElement>(null);

  const onClickImageUpload = useCallback(() => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }, []);

  const onChangeImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        const imageFormData = new FormData();
        imageFormData.append('image', selectedFile); // 선택한 이미지 추가

        userImageUpload(imageFormData)
          .then((uploadedImageUrl) => {
            setUserImage(uploadedImageUrl); // 받아온 이미지 주소로 Recoil 상태를 업데이트
          })
          .catch((error) => {
            console.error('Image upload failed:', error);
            setUserError(
              '이미지 등록이 실패했습니다. 새로고침 후 다시 시도해 주세요.',
            );
          });
      }
    },
    [setUserImage, setUserError],
  );

  return (
    <Form encType="multipart/form-data">
      <div className="d-flex justify-content-center mb-4">
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={onClickImageUpload}
        >
          내 이미지 등록
        </Button>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImage}
        />
      </div>
    </Form>
  );
}

import { reviewImageState } from '@/atom/reviewImageSelector';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FlexBox, ReviewImageSize, ImageDelete } from '@/styles/styled';

export default function ReviewUploadImage() {
  const [reviewImage, setReviewImage] = useRecoilState(reviewImageState);

  const deleteImage = useCallback(
    (imageName: string) => {
      setReviewImage((prevReviewImage) =>
        prevReviewImage.filter((v) => v !== imageName),
      );
    },
    [setReviewImage],
  );

  return (
    <div className="d-flex">
      {reviewImage.map((v) => {
        return (
          <FlexBox key={v}>
            <ReviewImageSize src={v} alt={v} />
            <ImageDelete onClick={() => deleteImage(v)}>
              <FontAwesomeIcon icon={faX} />
            </ImageDelete>
          </FlexBox>
        );
      })}
    </div>
  );
}

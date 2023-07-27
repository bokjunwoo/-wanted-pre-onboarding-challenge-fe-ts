import { reviewImageState } from '@/atom/reviewImageSelector';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

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
            <ReviewImageSize src={`http://localhost:4000/${v}`} alt={v} />
            <ImageDelete onClick={() => deleteImage(v)}>
              <FontAwesomeIcon icon={faX} />
            </ImageDelete>
          </FlexBox>
        );
      })}
    </div>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  margin: 10px 10px 0px 0px;
`;

const ReviewImageSize = styled.img`
  width: 100px;
  height: 100px;
`;

const ImageDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-top: 1px solid #cccccc;
  cursor: pointer;
`;

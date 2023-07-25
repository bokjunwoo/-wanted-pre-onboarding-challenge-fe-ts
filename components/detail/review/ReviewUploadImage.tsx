import { reviewImageState } from '@/atom/reviewImageSelector';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function ReviewUploadImage() {
  const reviewImage = useRecoilValue(reviewImageState);

  return (
    <div className="d-flex">
      {reviewImage.map((v) => {
        return (
          <ReviewImageSize src={`http://localhost:4000/${v}`} alt={v} key={v} />
        );
      })}
    </div>
  );
}

const ReviewImageSize = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
  margin: 10px 10px 0px 0px;
`;

import { useUserReviewData } from '@/usequery/useUserReview';
import React from 'react';
import ParentLoading from '../common/ParentLoading';
import MypageReviewCard from './MypageReviewCard';

export default function MypageReviewSection() {
  const { userReview, userReviewLoading } = useUserReviewData();

  if (userReviewLoading) {
    return <ParentLoading />;
  }

  if (userReview?.length === 0) {
    return <div>작성한 리뷰가 없습니다.</div>;
  }

  return (
    <>
      {userReview?.map((v) => (
        <MypageReviewCard key={v._id} review={v} />
      ))}
    </>
  );
}

import { IReviewInfo } from '@/pages/api/api';
import React from 'react';

export default function MypageReviewCard({ review }: { review: IReviewInfo }) {
  return <div>{review.content}</div>;
}

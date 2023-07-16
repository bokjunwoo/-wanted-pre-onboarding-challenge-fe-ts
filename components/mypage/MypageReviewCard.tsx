import { IReviewInfo } from '@/pages/api/api';
import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function MypageReviewCard({ review }: { review: IReviewInfo }) {
  const stars = [0, 0, 0, 0, 0];

  for (let i = 0; i < review.star; i++) {
    stars[i] = 1;
  }

  return (
    <Link href={`/detail/${review.region}/${review.contentid}`}>
      <Card border="" className="m-2 rounded-1">
        <Card.Header>
          {review.title}{' '}
          {stars.map((star, i) => (
            <span key={i} style={{ color: star === 0 ? 'gray' : '#ffd400' }}>
              ★
            </span>
          ))}
        </Card.Header>
        <Card.Body>
          <Card.Text>{review.content}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

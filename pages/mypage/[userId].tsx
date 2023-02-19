import { useRouter } from 'next/router';
import React from 'react';

export default function MypageUserId() {
  const router = useRouter();
  const { userId } = router.query;

  return <div>{userId}</div>;
}

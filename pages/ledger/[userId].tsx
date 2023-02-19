import { useRouter } from 'next/router';
import React from 'react';

export default function LedgerUserId() {
  const router = useRouter();
  const { userId } = router.query;

  return <div>{userId}</div>;
}

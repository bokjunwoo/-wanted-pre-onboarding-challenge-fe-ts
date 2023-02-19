import { useRouter } from 'next/router';
import React from 'react';

export default function PlanUserId() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
}

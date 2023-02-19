import { useRouter } from 'next/router';
import React from 'react';

export default function Type() {
  const router = useRouter();
  const { type } = router.query;

  return <div>{type}</div>;
}

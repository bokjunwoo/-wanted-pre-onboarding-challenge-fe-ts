import { useRouter } from 'next/router';
import React from 'react';

export default function Region() {
  const router = useRouter();
  const { region } = router.query;

  return <div>{region}</div>;
}

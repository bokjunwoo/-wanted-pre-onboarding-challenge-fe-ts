import PlanListCard from '@/components/plan/PlanListCard';
import PlanMap from '@/components/plan/PlanMap';
import PlanUserInfo from '@/components/plan/PlanUserInfo';
import { useRouter } from 'next/router';
import React from 'react';

export default function PlanUserId() {
  const router = useRouter();
  const { region, userId } = router.query as { region: string; userId: string };

  return (
    <>
      <PlanUserInfo userId={userId} />

      <PlanMap region={region} />

      <PlanListCard />
    </>
  );
}

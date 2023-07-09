import React from 'react';
import ParentLoading from '../common/ParentLoading';
import { useUserPlanData } from '@/usequery/useUserPlan';
import MypagePlanCard from './MypagePlanCard';

export default function MypagePlanSection() {
  const { userPlan, userPlanLoading } = useUserPlanData();
  console.log(userPlan);

  if (userPlanLoading) {
    return <ParentLoading />;
  }

  if (userPlan?.length === 0) {
    return <div>작성한 리뷰가 없습니다.</div>;
  }

  return (
    <>
      {userPlan?.map((v, i) => (
        <MypagePlanCard key={i} data={v} />
      ))}
    </>
  );
}

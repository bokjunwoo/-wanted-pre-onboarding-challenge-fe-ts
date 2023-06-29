import LoadingSpinner from '@/components/common/LoadingSpinner';
import UserInfo from '@/components/common/UserInfo';
import PlanKakaoMap from '@/components/kakao/PlanKakaoMap';
import PlanList from '@/components/plan/PlanList';
import PlanListForm from '@/components/plan/PlanListForm';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

export default function PlanUserId() {
  const router = useRouter();
  const { region } = router.query as { region: string };

  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  if (userLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="mt-5">
        <UserInfo user={user} message="여행계획 세우기 ✏️" />
      </div>

      <div className="mt-2">
        <h2 className="mb-2">📆 여행 기간</h2>
        <h6>2023년 03월 04일 ~ 2023년 03월 05일</h6>
      </div>

      <Accordion defaultActiveKey="0" alwaysOpen className="mt-3">
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>
                <h4 className="m-0">{i + 1}일차</h4>
              </Accordion.Header>
              <Accordion.Body>
                <PlanKakaoMap region={region} idx={i} />

                <PlanListForm />

                <ListGroup variant="flush" className="mt-3">
                  {Array.from({ length: 3 }).map((_, i) => {
                    return <PlanList key={i} />;
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

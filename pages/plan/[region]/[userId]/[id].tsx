import { planListState } from '@/atom/planSelector';
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
import { useRecoilValue } from 'recoil';

export default function PlanUserId() {
  const router = useRouter();
  const { region } = router.query as { region: string };

  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  const planList = useRecoilValue(planListState);
  const dateLength = planList.plan.length;

  if (userLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="mt-5">
        <UserInfo user={user} message="여행계획 세우기 ✏️" />
      </div>

      <div className="mt-2">
        <h2 className="mb-2">
          📆 여행 기간{' '}
          {dateLength > 1
            ? `(${dateLength - 1}박 ${dateLength}일)`
            : `(${dateLength}일)`}
        </h2>
        <h6>
          {dateLength > 1
            ? `${planList.plan[0].date} ~ ${planList.plan[dateLength - 1].date}`
            : planList.plan[0].date}
        </h6>
      </div>

      <Accordion defaultActiveKey="0" alwaysOpen className="mt-3">
        {planList.plan.map((v, i) => {
          return (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>
                <span className="m-0 fs-4 me-1 text-success fw-semibold">
                  {i + 1}일차
                </span>
                <span className="text-dark">({v.date})</span>
              </Accordion.Header>
              <Accordion.Body className="pb-0">
                <PlanKakaoMap region={region} idx={i} listItem={v} />

                <div className="mt-3 mb-3">
                  <PlanListForm date={v.date} />
                </div>

                <ListGroup variant="flush">
                  {v.list.map((listItem, listIndex) => {
                    return (
                      <PlanList
                        number={listIndex + 1}
                        key={listIndex}
                        listItem={listItem}
                        date={v.date}
                      />
                    );
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

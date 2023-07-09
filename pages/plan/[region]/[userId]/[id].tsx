import { planListState } from '@/atom/planSelector';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import UserInfo from '@/components/common/UserInfo';
import PlanKakaoMap from '@/components/kakao/PlanKakaoMap';
import PlanList from '@/components/plan/PlanList';
import PlanListForm from '@/components/plan/PlanListForm';
import PlanTitleForm from '@/components/plan/PlanTitleForm';
import ToastMessage from '@/components/toast/ToastMessage';
import { planAdd } from '@/pages/api/plan';
import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { Accordion, Button, ListGroup } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';

export default function PlanUserId() {
  const router = useRouter();
  const { region } = router.query as { region: string };

  const { data: user, isLoading: userLoading } = useQuery(['user'], userInfo);

  const planList = useRecoilValue(planListState);
  const dateLength = planList.plan.length;

  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const onSubmitPlanData = useCallback(() => {
    if (planList.title === undefined || planList.title === '') {
      setToastMessage('여행 타이틀을 작성해주세요.');
      setToastVariant('danger');
      setToastShow(true);
      return;
    }

    planAdd(planList);
    setToastMessage('여행 계획이 작성되었습니다.');
    setToastVariant('primary');
    setToastShow(true);
    router.replace(`/submain/${region}`);
  }, [planList, region, router]);

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

      <PlanTitleForm />

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

      <div className="d-grid gap-2 mt-3">
        <Button variant="outline-success" size="lg" onClick={onSubmitPlanData}>
          계획저장하기
        </Button>
      </div>

      <ToastMessage
        show={toastShow}
        setShow={setToastShow}
        message={toastMessage}
        variant={toastVariant}
      />
    </>
  );
}

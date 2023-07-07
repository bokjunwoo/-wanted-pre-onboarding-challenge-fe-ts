import React, { useState } from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap';
import { NumberBox } from '@/styles/styled';
import { getAverageStar } from '@/utils/detailHelper';
import { useRecoilState } from 'recoil';
import { DateObject, planListState } from '@/atom/planSelector';
import { ISearchDataInfo } from '@/pages/api/api';
import ToastMessage from '../toast/ToastMessage';

interface IPlanList {
  number?: number;
  listItem: ISearchDataInfo;
  date: string;
}

export default function PlanList({ number, listItem, date }: IPlanList) {
  const averageStar = getAverageStar(listItem.star);

  const [planList, setPlanList] = useRecoilState(planListState);

  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const addLocation = () => {
    const addItem: ISearchDataInfo = {
      id: new Date(),
      title: listItem.title,
      addr1: listItem.addr1,
      like: listItem.like,
      star: listItem.star,
      mapx: listItem.mapx,
      mapy: listItem.mapy,
    };

    const addDates = planList.plan.map((dateItem) => {
      if (dateItem.date === date) {
        const updatedList = [...dateItem.list, { ...addItem }];
        return {
          ...dateItem,
          list: updatedList,
        };
      }
      return dateItem;
    });

    const updatedSelectedDates: DateObject = {
      ...planList,
      plan: addDates,
    };

    setPlanList(updatedSelectedDates);
    setToastShow(true);
    setToastMessage('새로운 일정이 생성되었습니다.');
    setToastVariant('primary');
  };

  const deleteLocation = () => {
    const deleteDates = planList.plan.map((dateItem) => {
      if (dateItem.date === date) {
        const updatedList = dateItem.list.filter(
          (item) => item.id !== listItem.id,
        );
        return {
          ...dateItem,
          list: updatedList,
        };
      }
      return dateItem;
    });

    const updatedSelectedDates: DateObject = {
      ...planList,
      plan: deleteDates,
    };

    setPlanList(updatedSelectedDates);
    setToastShow(true);
    setToastMessage('선택하신 일정이 삭제되었습니다.');
    setToastVariant('danger');
  };

  return (
    <>
      <ListGroup.Item className="ps-2 pe-2" onClick={addLocation}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              {number && <NumberBox>{number}</NumberBox>}
            </div>

            <div className="ms-2">
              <span className="fs-5">{listItem.title}</span>{' '}
              <span className="text-muted">({listItem.addr1})</span>
              <br />
              <span style={{ color: '#ffd400' }}>★</span>{' '}
              <span className="text-muted">({averageStar})</span>{' '}
              <span>❤️</span>{' '}
              <span className="text-muted">({listItem.like})</span>
            </div>
          </div>

          {number && <div className="d-flex align-items-center"></div>}
        </div>
      </ListGroup.Item>

      <ToastMessage
        show={toastShow}
        setShow={setToastShow}
        message={toastMessage}
        variant={toastVariant}
      />

      <CloseButton onClick={deleteLocation} />
    </>
  );
}

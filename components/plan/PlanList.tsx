import React from 'react';
import { CloseButton, ListGroup } from 'react-bootstrap';
import { NumberBox } from '@/styles/styled';
import { getAverageStar } from '@/utils/detailHelper';
import { useRecoilState } from 'recoil';
import { DateObject, planListState } from '@/atom/planSelector';
import { ISearchDataInfo } from '@/pages/api/api';

interface IPlanList {
  number?: number;
  listItem: ISearchDataInfo;
  date: string;
}

export default function PlanList({ number, listItem, date }: IPlanList) {
  const averageStar = getAverageStar(listItem.star);

  const [planList, setPlanList] = useRecoilState(planListState);

  const addLocation = () => {
    const addItem: ISearchDataInfo = {
      title: listItem.title,
      addr1: listItem.addr1,
      like: listItem.like,
      star: listItem.star,
      mapX: listItem.mapX,
      mapY: listItem.mapY,
    };

    const addDates = planList.plan.map((dateItem) => {
      console.log('확인', dateItem.date);
      if (dateItem.date === date) {
        const updatedList = [...dateItem.list, addItem];
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
  };

  return (
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
            <span className="text-muted">({averageStar})</span> <span>❤️</span>{' '}
            <span className="text-muted">({listItem.like})</span>
          </div>
        </div>

        {number && (
          <div className="d-flex align-items-center">
            <CloseButton />
          </div>
        )}
      </div>
    </ListGroup.Item>
  );
}

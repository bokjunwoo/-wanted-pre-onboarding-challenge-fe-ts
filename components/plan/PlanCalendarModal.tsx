import { userInfo } from '@/pages/api/sign';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSetRecoilState } from 'recoil';
import 'moment/locale/ko';
import { planListState } from '@/atom/planSelector';

type PlanCalendarModalProps = {
  show: boolean;
  onHide: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PlanCalendarModal({
  show,
  onHide,
}: PlanCalendarModalProps) {
  const router = useRouter();
  const { region } = router.query as { region: string };

  const { data: user } = useQuery(['user'], userInfo);

  const setSelectedDates = useSetRecoilState(planListState);

  const [value, onChange] = useState<Date[]>([new Date()]);

  // 모달창이 닫힐 때 value 상태값을 초기화
  const handleClose = () => {
    onChange([new Date()]);
    onHide(false);
  };

  const handleSelect = () => {
    const start = moment(value[0]);
    const end = moment(value[1]);

    const dates = [];
    const currentDate = start.clone();
    while (currentDate <= end) {
      const dateStr = `${currentDate.format(
        'YYYY년 M월 D일',
      )} ${currentDate.format('dd')}`;
      const planData = {
        date: dateStr,
        list: [],
      };
      dates.push(planData);
      currentDate.add(1, 'day');
    }

    setSelectedDates({ nickname: user, region: region, plan: dates });

    router.push(`/plan/${region}/${user}/1`);
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          <img
            src="/images/Logo.png"
            style={{ width: '30px' }}
            alt="로고"
          ></img>
          TripLog
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center mb-3">🛫 여행 날짜를 선택해주세요</h4>
        {value.length > 1 ? (
          <div className="bold text-center mb-3 text-success">
            <span>{moment(value[0]).format('YYYY년 MM월 DD일')}</span>
            <span> ~ </span>
            <span>{moment(value[1]).format('YYYY년 MM월 DD일')}</span>
          </div>
        ) : (
          <div className="bold text-center mb-3 text-success">
            <span>Today : {moment(value[0]).format('YYYY년 MM월 DD일')}</span>
          </div>
        )}
        <Calendar
          className="w-100"
          onChange={(newValue) => onChange(newValue as Date[])}
          minDate={new Date()}
          selectRange={true}
          formatDay={(_, date) => moment(date).format('DD')}
          calendarType="US"
        ></Calendar>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
        <Button variant="success" onClick={handleSelect}>
          선택완료
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

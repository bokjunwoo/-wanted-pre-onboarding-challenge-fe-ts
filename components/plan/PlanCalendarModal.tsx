import moment from 'moment';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type PlanCalendarModalProps = {
  show: boolean;
  onHide: () => void;
};

export default function PlanCalendarModal({ show, onHide }: PlanCalendarModalProps) {
  const [value, onChange] = useState<Date[]>([new Date()]);

  // 모달창이 닫힐 때 value 상태값을 초기화
  const handleClose = () => {
    onChange([new Date()]);
    onHide();
  };

  const handleSelect = () => {
    if (value.length > 1) {
      const start = moment(value[0]);
      const end = moment(value[1]);
      const duration = moment.duration(end.diff(start));
      const nights = Math.floor(duration.asDays()); // 체크인/체크아웃 모두 포함한 박수 계산
      const days = duration.hours() > 0 ? duration.days() + 1 : duration.days(); // 일수 계산
      console.log(`${nights}박 ${days}일`);
    } else {
      console.log('1일')
    }
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">TripLog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center mb-3">🛫 여행 날짜를 선택해주세요</h4>
        {value.length > 1 ? (
          <div className="bold text-center mb-3">
            <span>{moment(value[0]).format('YYYY년 MM월 DD일')}</span>
            <span> ~ </span>
            <span>{moment(value[1]).format('YYYY년 MM월 DD일')}</span>
          </div>
        ) : (
          <div className="bold text-center mb-3">
            <span>오늘 : {moment(value[0]).format('YYYY년 MM월 DD일')}</span>
          </div>
        )}
        <Calendar
          className="w-100"
          onChange={handleClose}
          minDate={new Date()}
          selectRange={true}
          formatDay={(locale, date) => moment(date).format('DD')}
          calendarType="US"
        ></Calendar>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>닫기</Button>
        <Button variant='success' onClick={handleSelect}>선택완료</Button>
      </Modal.Footer>
    </Modal>
  );
}

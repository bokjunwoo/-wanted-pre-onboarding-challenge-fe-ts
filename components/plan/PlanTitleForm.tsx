import { DateObject, planListState } from '@/atom/planSelector';
import { InputTitle } from '@/styles/styled';
import React, { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRecoilState } from 'recoil';

export default function PlanTitleForm() {
  const [value, setValue] = useState('');

  const [planList, setPlanList] = useRecoilState(planListState);

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedValue = e.target.value;
      setValue(updatedValue);

      const updatedSelectedDates: DateObject = {
        ...planList,
        title: updatedValue,
      };

      setPlanList(updatedSelectedDates);
    },
    [planList, setPlanList],
  );

  return (
    <Form>
      <InputTitle
        placeholder="여행 타이틀을 작성해주세요."
        value={value}
        onChange={onChangeValue}
      />
    </Form>
  );
}

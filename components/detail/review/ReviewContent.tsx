import React, { useCallback, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ReviewWrite from './ReviewWrite';

export default function ReviewContent() {
  const [edit, setEdit] = useState<boolean>(false);
  const onClickEdit = useCallback(() => {
    setEdit((prev) => !prev);
  }, []);

  const value =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique earum, mollitia quis laudantium esse expedita, porro sequiundeoditiusto quidem voluptas harum alias nostrum. Eaque officiis quo delenitioptio.';

  return (
    <ListGroup.Item className='ps-0 pe-0'>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <UserIamge src="/images/main/card0.jpg" alt="" />
          </div>

          <div className="ms-2">
            <span>닉네임</span>
            <br />
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-muted ms-1">23.03.03</span>
          </div>
        </div>

        <div className="d-flex align-items-center">
          {edit ? (
            <Button variant="outline-success" size="sm" onClick={onClickEdit}>
              확인
            </Button>
          ) : (
            <Button variant="outline-success" size="sm" onClick={onClickEdit}>
              수정
            </Button>
          )}

          {edit ? (
            <Button
              variant="outline-danger"
              className="ms-2"
              size="sm"
              onClick={onClickEdit}
            >
              취소
            </Button>
          ) : (
            <Button variant="outline-danger" className="ms-2" size="sm">
              삭제
            </Button>
          )}
        </div>
      </div>

      <div>
        {edit ? (
          <ReviewWrite value={value} autoFocus={true} />
        ) : (
          <span>{value}</span>
        )}
      </div>
    </ListGroup.Item>
  );
}

export const UserIamge = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid black;
  border-radius: 50%;
`;

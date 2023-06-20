import { userImageInfo, userInfo } from '@/pages/api/sign';
import { TabContainer, UserImage } from '@/styles/styled';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Row, Tab, Nav } from 'react-bootstrap';

interface IMypageNavProps {
  activeKey: string;
  handleTabSelect: (eventKey: string | null) => void;
}

export default function MypageNav({
  activeKey,
  handleTabSelect,
}: IMypageNavProps) {
  const { data: user } = useQuery(['user'], userInfo);
  const { data: userImage } = useQuery(['userImage'], userImageInfo);

  return (
    <Row xs={1} sm={1} md={1}>
      <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
        <TabContainer>
          <div className="d-flex flex-column align-items-center">
            <UserImage
              src={userImage === '' ? '/images/defaultImage.png' : userImage}
              alt="회원 이미지"
              className="bg-dark rounded"
            />
            <p className="fs-3 text-center text-success fw-bold m-2">{user}</p>
          </div>
          <Nav
            variant="pills"
            className="flex-column mt-4 text-center"
            style={{ color: '#333' }}
          >
            <Nav.Item>
              <Nav.Link eventKey="plan">여행 조회</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="checklist">체크리스트</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ledger">가계부</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="review">리뷰</Nav.Link>
            </Nav.Item>
          </Nav>
        </TabContainer>
      </Tab.Container>
    </Row>
  );
}

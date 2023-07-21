import { TabContainer } from '@/styles/styled';
import React from 'react';
import { Row, Tab, Nav } from 'react-bootstrap';
import MypageImageForm from './MypageImageForm';
import UserImage from '../common/UserImage';

interface IMypageNavProps {
  activeKey: string;
  handleTabSelect: (eventKey: string | null) => void;
}

export default function MypageNav({
  activeKey,
  handleTabSelect,
}: IMypageNavProps) {
  return (
    <Row xs={1} sm={1} md={1} className="light rounded mb-5">
      <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
        <UserImage />

        <TabContainer>
          <Nav
            variant="pills"
            className="flex-column mt-4 text-center mb-4"
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

        <MypageImageForm />
      </Tab.Container>
    </Row>
  );
}

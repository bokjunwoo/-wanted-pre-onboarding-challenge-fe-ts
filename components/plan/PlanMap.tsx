import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import PlanKakaoMap from '../kakao/PlanKakaoMap';

type PlanMapProps = {
  region: string;
}

export default function PlanMap({ region }: PlanMapProps) {
  return (
    <MapContainer>
      <Card.Body className="p-0">
        <PlanKakaoMap width="100%" height="100%" region={region}/>
      </Card.Body>
    </MapContainer>
  );
}

const MapContainer = styled(Card)`
  height: 450px;
  @media screen and (max-width: 530px) {
    height: 400px;
  }
  @media screen and (max-width: 480px) {
    height: 370px;
  }
  @media screen and (max-width: 420px) {
    height: 350px;
  }
`;

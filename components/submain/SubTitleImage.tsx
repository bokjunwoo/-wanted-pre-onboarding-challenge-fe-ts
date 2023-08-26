import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export interface SubMainProps {
  region: string;
}

export default function SubTitleImage({ region }: SubMainProps) {
  return (
    <Card className="card mt-5 rounded-0">
      {region && (
        <img alt="지역대표이미지" src={`/images/submain/${region}.jpg`} />
      )}
      <Card.ImgOverlay>
        <AreaName>{region.toLocaleUpperCase()}</AreaName>
        <Areatext>
          온전히 내 취향대로, 나만의 감성을 그대로 담은 나만의 여행로그
        </Areatext>
      </Card.ImgOverlay>
    </Card>
  );
}

const AreaName = styled.p`
  color: #fff;
  font: 8rem/1 'ChosunBg';
  font-weight: bold;
  margin: 30% 2% 0 2%;

  @media screen and (max-width: 1200px) {
    font: 8rem/1 'ChosunBg';
    font-weight: bold;
    margin: 28% 2% 0 2%;
  }
  @media screen and (max-width: 1080px) {
    font: 7rem/1 'ChosunBg';
    font-weight: bold;
    margin: 30% 2% 0 2%;
  }
  @media screen and (max-width: 991px) {
    font: 6rem/1 'ChosunBg';
    font-weight: bold;
    margin: 30% 2% 0 2%;
  }
  @media screen and (max-width: 767px) {
    font: 4rem/1 'ChosunBg';
    font-weight: bold;
    margin: 31% 2% 0 2%;
  }
  @media screen and (max-width: 575px) {
    font: 4rem/1 'ChosunBg';
    font-weight: bold;
    margin: 29% 2% 0 2%;
  }
  @media screen and (max-width: 480px) {
    font: 3.5rem/1 'ChosunBg';
    font-weight: bold;
    margin: 28% 2% 0 2%;
  }
  @media screen and (max-width: 390px) {
    font: 3rem/1 'ChosunBg';
    font-weight: bold;
    margin: 28% 2% 0 2%;
  }
`;

const Areatext = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-family: Inter;
  margin: -2% 2% 0 2%;

  @media screen and (max-width: 1200px) {
    font: 1.4rem/1.5 ‘Inter’;
    margin: -2% 2% 0 2%;
  }
  @media screen and (max-width: 991px) {
    font: 1.2rem/1.5 ‘Inter’;
    margin: -2% 2% 0 2%;
  }
  @media screen and (max-width: 767px) {
    font: 1rem/1.5 ‘Inter’;
    margin: -2% 2% 0 2%;
  }
  @media screen and (max-width: 575px) {
    font: 0.9rem/1.5 ‘Inter’;
    margin: -2% 2% 0 2%;
  }
  @media screen and (max-width: 480px) {
    font: 0.8rem/1 'ChosunBg';
    margin: -2% 2% 0 2%;
  }
  @media screen and (max-width: 440px) {
    font: 0.7rem/1 'ChosunBg';
    margin: -2% 2% 0 2%;
  }
  @media screen and (max-width: 390px) {
    font: 0.7rem/1 'ChosunBg';
    margin: -2% 2% 0 2%;
  }
`;

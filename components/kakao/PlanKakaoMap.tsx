import { DateItem } from '@/atom/planSelector';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

type RegionCoordinates = {
  mapX: string;
  mapY: string;
}[];

type CoordsIndexSignature = {
  [key: string]: RegionCoordinates;
};

const regionCoordinates: CoordsIndexSignature = {
  seoul: [{ mapX: '126.97', mapY: '37.55' }],
  busan: [{ mapX: '129.11', mapY: '35.15' }],
  gangneung: [{ mapX: '128.89', mapY: '37.79' }],
  gyeongju: [{ mapX: '129.21', mapY: '35.83' }],
  jeonju: [{ mapX: '127.15', mapY: '35.81' }],
  jeju: [{ mapX: '126.54', mapY: '33.368' }],
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface KakaoMapSize {
  region: string;
  idx: number;
  listItem: DateItem;
}

export default function PlanKakaoMap({ region, idx, listItem }: KakaoMapSize) {
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=e79b288ebffab6c35ea1c3d7624e2f3a&libraries=services&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        setKakaoLoaded(true);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (kakaoLoaded) {
      const container = document.getElementById(`map${idx}`);
      const options = {
        center: new window.kakao.maps.LatLng(
          regionCoordinates[region][0].mapY,
          regionCoordinates[region][0].mapX,
        ),
        level: 9,
      };

      const map = new window.kakao.maps.Map(container, options);
      map.setZoomable(false);

      const pathArr: string[] = [];

      listItem.list.map((v) => {
        new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(v.mapy, v.mapx),
        });

        pathArr.push(new window.kakao.maps.LatLng(v.mapy, v.mapx));
      });

      new window.kakao.maps.Polyline({
        // 지도생성
        map: map,
        // path의 배열
        path: pathArr,
        // 선을 굵기
        strokeWeight: 5,
        // 선의 색
        strokeColor: '#db4040',
        // 선의 불투명도
        strokeOpacity: 1,
        // 선의 스타일
        strokeStyle: 'solid',
      });
    }
  }, [kakaoLoaded, region, idx, listItem.list]);

  return (
    <MapContainer>
      <Map id={`map${idx}`}></Map>
    </MapContainer>
  );
}

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const MapContainer = styled(Card.Body)`
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

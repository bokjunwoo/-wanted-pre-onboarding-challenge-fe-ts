import { useEffect, useState } from 'react';
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
    kakao: any;
  }
}

interface KakaoMapSize {
  width: string;
  height: string;
  region: string;
}

export default function PlanKakaoMap({ width, height, region }: KakaoMapSize) {
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
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(
          regionCoordinates[region][0].mapY,
          regionCoordinates[region][0].mapX,
        ),
        level: 9,
      };

      const map = new window.kakao.maps.Map(container, options);
      map.setZoomable(false);

      // new window.kakao.maps.Marker({
      //   map: map,
      //   position: new window.kakao.maps.LatLng(coordinates[0].mapY, coordinates[0].mapX),
      // });
    }
  }, [kakaoLoaded]);

  return (
    <>
      <Map id="map" width={width} height={height}></Map>
    </>
  );
}

const Map = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

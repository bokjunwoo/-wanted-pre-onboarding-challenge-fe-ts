import { useEffect, useState } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapSize {
  width: string;
  height: string;
  mapy: string;
  mapx: string;
}

export default function KakaoMap({ width, height, mapy, mapx }: KakaoMapSize) {
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
        center: new window.kakao.maps.LatLng(mapy, mapx),
        level: 7,
      };

      const map = new window.kakao.maps.Map(container, options);
      map.setDraggable(false);
      map.setZoomable(false);

      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(mapy, mapx),
      });
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

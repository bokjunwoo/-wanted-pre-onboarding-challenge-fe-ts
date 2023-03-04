import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

interface SubNavProps {
  region?: string;
  type?: string;
  margin?: string;
}

export default function CommonNav({ region, type, margin }: SubNavProps) {
  const [activeKey, setActiveKey] = useState<string | undefined>(type);

  useEffect(() => {
    setActiveKey(type);
  }, [type, region]);

  const router = useRouter();

  const routerHandle = useCallback(
    (type: string | null) => {
      if (type !== undefined) {
        router.push(`/list/${region}/${type}`);
      }
    },
    [router],
  );

  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey={activeKey}
      activeKey={activeKey}
      onSelect={routerHandle}
      className={margin}
    >
      <Nav.Item>
        <Nav.Link eventKey="sightseeing">
          <h2>🌴</h2>
          <p>관광</p>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="culture">
          <h2>🗿</h2>
          <p>문화</p>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="food">
          <h2>🍽</h2>
          <p>음식</p>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="lodgment">
          <h2>🏠</h2>
          <p>숙소</p>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="shopping">
          <h2>💵</h2>
          <p>쇼핑</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

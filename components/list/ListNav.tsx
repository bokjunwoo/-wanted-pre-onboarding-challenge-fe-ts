import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

interface SubNavProps {
  region: string;
  type?: string;
  margin?: string;
}

export default function ListNav({ region, type, margin }: SubNavProps) {
  const router = useRouter();

  const [activeKey, setActiveKey] = useState<string | undefined>(type);

  const routerHandle = useCallback(
    (type: string | null) => {
      if (type !== undefined) {
        router.push(`/list/${region}/${type}?page=1`);
      }
    },
    [router],
  );

  useEffect(() => {
    setActiveKey(type);
  }, [type, region]);

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

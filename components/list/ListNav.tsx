import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

interface SubNavProps {
  region: string;
  type?: string;
  margin?: string;
}

const navItems = [
  { key: 'sightseeing', icon: '🌴', label: '관광' },
  { key: 'culture', icon: '🗿', label: '문화' },
  { key: 'food', icon: '🍽', label: '음식' },
  { key: 'lodgment', icon: '🏠', label: '숙소' },
  { key: 'shopping', icon: '💵', label: '쇼핑' },
];

export default function ListNav({ region, type, margin }: SubNavProps) {
  const router = useRouter();

  const [activeKey, setActiveKey] = useState<string | undefined>(type);

  const handleNavSelect = (selectedKey: string | null) => {
    if (selectedKey !== null) {
      router.push(`/list/${region}/${selectedKey}?page=1`);
    }
  };

  useEffect(() => {
    setActiveKey(type);
  }, [type, region]);

  return (
    <Nav
      fill
      variant="tabs"
      activeKey={activeKey}
      onSelect={handleNavSelect}
      className={margin}
    >
      {navItems.map((navItem) => (
        <Nav.Item key={navItem.key}>
          <Nav.Link eventKey={navItem.key}>
            <h2>{navItem.icon}</h2>
            <p className="fw-bold">{navItem.label}</p>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

export default function SearchRegionButton() {
  const searchParams = useSearchParams();

  const regionParam = searchParams.get('region');
  const searchTitle = searchParams.get('title') as string;

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const buttonData = useMemo(
    () => [
      { id: 1, label: '서울', name: 'seoul' },
      { id: 2, label: '부산', name: 'busan' },
      { id: 3, label: '강릉', name: 'gangneung' },
      { id: 4, label: '경주', name: 'gyeongju' },
      { id: 5, label: '전주', name: 'jeonju' },
      { id: 6, label: '제주', name: 'jeju' },
    ],
    [],
  );

  useEffect(() => {
    if (regionParam) {
      const activeButtonId = buttonData.find(
        (button) => button.name === regionParam,
      )?.id;
      setActiveButton(activeButtonId || null);
    } else {
      setActiveButton(null);
    }
  }, [regionParam, buttonData]);

  return (
    <>
      {buttonData.map((button) => (
        <Link
          key={button.id}
          href={
            searchTitle
              ? `/search?region=${button.name}&title=${searchTitle}`
              : `/search?region=${button.name}`
          }
        >
          <button className={activeButton === button.id ? 'active' : ''}>
            {button.label}
          </button>
        </Link>
      ))}
    </>
  );
}

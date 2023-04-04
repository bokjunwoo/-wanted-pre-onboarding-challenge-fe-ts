export interface IconData {
  id: number;
  image: string;
  region: string;
  name: string;
}

interface MainCardData {
  id: number;
  image: string;
  text: string;
  region: string;
}

type RegionNames = {
  [key: string]: string;
};

export const regionNames: RegionNames = {
  seoul: '서울',
  busan: '부산',
  gangneung: '강릉',
  gyeongju: '경주',
  jeonju: '전주',
  jeju: '제주',
};

type TypeNames = {
  [key: string]: string;
};

export const typesNames: TypeNames = {
  sightseeing: '관광',
  culture: '문화',
  food: '음식',
  lodgment: '숙소',
  shopping: '쇼핑',
};

export const iconData: IconData[] = [
  { id: 0, image: '/images/icons/seoul.png', region: 'seoul', name: '서울' },
  { id: 1, image: '/images/icons/busan.png', region: 'busan', name: '부산' },
  {
    id: 2,
    image: '/images/icons/gangneung.png',
    region: 'gangneung',
    name: '강릉',
  },
  {
    id: 3,
    image: '/images/icons/gyeongju.png',
    region: 'gyeongju',
    name: '경주',
  },
  {
    id: 4,
    image: '/images/icons/jeonju.png',
    region: 'jeonju',
    name: '전주',
  },
  { id: 5, image: '/images/icons/jeju.png', region: 'jeju', name: '제주' },
];

export const mainCardData: MainCardData[] = [
  {
    id: 0,
    image: '/images/main/card0.jpg',
    text: '오랜만의 서울여행! 여행 포인트',
    region: 'seoul',
  },
  {
    id: 1,
    image: '/images/main/card1.jpg',
    text: '고즈넉한 가을 감성 강릉의 대표 명소',
    region: 'gangneung',
  },
  {
    id: 2,
    image: '/images/main/card2.jpg',
    text: "요즘 부산 가면 '이곳'에 꼭 들린대요",
    region: 'busan',
  },
  {
    id: 3,
    image: '/images/main/card3.jpg',
    text: '잘 몰랐던 경주 지금이 떠날 기회!',
    region: 'gyeongju',
  },
];

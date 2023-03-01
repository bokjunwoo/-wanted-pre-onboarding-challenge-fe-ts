export interface IconData {
  id: number;
  image: string;
  region: string;
  name: string;
}

export interface MainCardData {
  id: number;
  image: string;
  text: string;
  region: string;
}

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

export interface PickData {
  id: number;
  title: string;
  image: string;
}

export const pickData: PickData[] = [
  {
    id: 1,
    title: '산과 바다',
    image: 'https://picsum.photos/id/237/200/300',
  },
  {
    id: 2,
    title: '도심 속 휴식',
    image: 'https://picsum.photos/id/238/200/300',
  },
  {
    id: 3,
    title: '자연과 함께하는 여행',
    image: 'https://picsum.photos/id/239/200/300',
  },
  {
    id: 4,
    title: '역사와 문화',
    image: 'https://picsum.photos/id/240/200/300',
  },
  {
    id: 5,
    title: '여유로운 시간',
    image: 'https://picsum.photos/id/241/200/300',
  },
];

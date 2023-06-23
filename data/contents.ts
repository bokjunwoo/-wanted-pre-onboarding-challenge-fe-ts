export interface IContents {
  id: number;
  contentid: string;
  firstimage: string;
  title: string;
}

const seoulStay = [
  {
    id: 1,
    contentid: '142790',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/90/2014990_image2_1.jpg',
    title: 'The-K호텔서울',
  },
  {
    id: 2,
    contentid: '142733',
    firstimage: '/images/seoul/stay/grandhyattseoul.jpg',
    title: '그랜드 하얏트 서울',
  },
  {
    id: 3,
    contentid: '1045657',
    firstimage: '/images/seoul/stay/banyantree_seoul.jpg',
    title: '반얀트리 클럽 앤 스파 서울',
  },
  {
    id: 4,
    contentid: '142730',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/21/2820921_image2_1.jpg',
    title: '웨스틴 조선 서울',
  },
  {
    id: 5,
    contentid: '142726',
    firstimage: '/images/seoul/stay/millennium_hilton.jpg',
    title: '밀레니엄 힐튼 서울',
  },
  {
    id: 6,
    contentid: '143033',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/24/2564524_image2_1.png',
    title: 'JW 메리어트 호텔',
  },
  {
    id: 7,
    contentid: '142729',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/56/2607356_image2_1.png',
    title: '롯데호텔서울',
  },
  {
    id: 8,
    contentid: '2721755',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/98/2721798_image2_1.jpg',
    title: '페어몬트 앰배서더',
  },
];

const seoulTour = [
  {
    id: 1,
    contentid: '126508',
    firstimage: '/images/seoul/tour/경복궁.jpg',
    title: '경복궁',
  },
  {
    id: 2,
    contentid: '729167',
    firstimage: '/images/seoul/tour/반포무지개분수.png',
    title: '반포대교 달빛무지개분수',
  },
  {
    id: 3,
    contentid: '126701',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/03/2493203_image2_1.JPG',
    title: '이랜드크루즈 (한강유람선)',
  },
  {
    id: 4,
    contentid: '1364932',
    firstimage: '/images/seoul/tour/세종대왕동상.png',
    title: '세종대왕 동상',
  },
  {
    id: 5,
    contentid: '127642',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/46/1994246_image2_1.jpg',
    title: '창덕궁과 후원',
  },
  {
    id: 6,
    contentid: '126535',
    firstimage: '/images/seoul/tour/서울남산.jpg',
    title: '남산서울타워',
  },
  {
    id: 7,
    contentid: '128553',
    firstimage: '/images/seoul/tour/인사동쌈지길.jpeg',
    title: '쌈지길',
  },
];

const busanStay = [
  {
    id: 1,
    contentid: '142851',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/12/2821212_image2_1.jpg',
    title: '웨스틴 조선 부산',
  },
  {
    id: 2,
    contentid: '142852',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/49/2722649_image2_1.JPG',
    title: '코모도 호텔 부산',
  },
  {
    id: 3,
    contentid: '2736088',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/74/2736074_image2_1.png',
    title: '시그니엘 부산',
  },
  {
    id: 4,
    contentid: '2378912',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/08/2378908_image2_1.jpg',
    title: '호텔포레 부산역점',
  },
  {
    id: 5,
    contentid: '2714406',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/10/2714410_image2_1.jpg',
    title: '신라스테이 서부산',
  },
];

const busanTour = [
  {
    id: 1,
    contentid: '126848',
    firstimage: '/images/busan/tour/용궁사.jpeg',
    title: '해동 용궁사(부산)',
  },
  {
    id: 2,
    contentid: '2614721',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/95/2675495_image2_1.jpg',
    title: '몰운대 (부산 국가지질공원)',
  },
  {
    id: 3,
    contentid: '2668973',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/72/2668972_image2_1.bmp',
    title: '부산엑스더스카이',
  },
  {
    id: 4,
    contentid: '2456837',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/35/2716235_image2_1.jpg',
    title: '부산 영화의 전당',
  },
  {
    id: 5,
    contentid: '2815627',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/19/2815719_image2_1.jpg',
    title: '부산롯데월드',
  },
  {
    id: 6,
    contentid: '2784333',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/27/2787727_image2_1.jpg',
    title: '부산남항',
  },
  {
    id: 7,
    contentid: '2504464',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/27/2661227_image2_1.jpg',
    title: '부산 송도해상케이블카',
  },
  {
    id: 8,
    contentid: '1277679',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/50/566250_image2_1.jpg',
    title: '부산다이아몬드타워',
  },
];

const gangneungStay = [
  {
    id: 1,
    contentid: '2531222',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/95/2529795_image2_1.jpg',
    title: '오죽한옥마을',
  },
  {
    id: 2,
    contentid: '1989501',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/25/2578925_image2_1.jpg',
    title: '선교장',
  },
  {
    id: 3,
    contentid: '2626916',
    firstimage: '/images/gangneung/stay/지중해펜션.png',
    title: '지중해펜션',
  },
  {
    id: 4,
    contentid: '2038173',
    firstimage: '/images/gangneung/stay/게스트하우스.png',
    title: '게스트하우스 중앙점',
  },
];

const gangneungTour = [
  {
    id: 1,
    contentid: '125748',
    firstimage: '/images/gangneung/tour/남대천 짚라인.png',
    title: '남대천짚라인',
  },
  {
    id: 2,
    contentid: '125790',
    firstimage: '/images/gangneung/tour/경포대.jpeg',
    title: '강릉 경포대',
  },
  {
    id: 3,
    contentid: '125695',
    firstimage: '/images/gangneung/tour/등명해변패러글라이딩.jpg',
    title: '등명 패러글라이딩',
  },
  {
    id: 4,
    contentid: '125790',
    firstimage: '/images/gangneung/tour/경포대해수욕장.jpeg',
    title: '경포대해수욕장',
  },
  {
    id: 5,
    contentid: '125789',
    firstimage: '/images/gangneung/tour/오죽헌.png',
    title: '오죽헌',
  },
];

const gyeongjuStay = [
  {
    id: 1,
    contentid: '136215',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/95/1338095_image2_1.jpg',
    title: '한국콘도 경주',
  },
  {
    id: 2,
    contentid: '142892',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/81/2433981_image2_1.jpg',
    title: '힐튼 경주',
  },
  {
    id: 3,
    contentid: '912647',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/00/2499400_image2_1.jpg',
    title: '경주애견펜션 노비오스',
  },
  {
    id: 4,
    contentid: '1972448',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/40/2691040_image2_1.jpg',
    title: '경주휴원[한국관광 품질인증]',
  },
  {
    id: 5,
    contentid: '2047199',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/27/2635527_image2_1.jpg',
    title: '경주천년한옥펜션[한국관광 품질인증]',
  },
  {
    id: 6,
    contentid: '397640',
    firstimage: '/images/gyeongju/stay/포시즌.png',
    title: '경주 포시즌 유스호스텔',
  },
  {
    id: 7,
    contentid: '136641',
    createdtime: '20040420090000',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/61/1924761_image2_1.JPG',
    title: '켄싱턴리조트 경주보문',
  },
  {
    id: 8,
    contentid: '2446529',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/11/2635611_image2_1.jpg',
    title: '경주수호정 [한국관광 품질인증]',
  },
];

const gyeongjuTour = [
  {
    id: 1,
    contentid: '128638',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/04/219704_image2_1.jpg',
    title: '경주 원성왕릉',
  },
  {
    id: 2,
    contentid: '126228',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/24/2648924_image2_1.jpg',
    title: '경주월드 어뮤즈먼트',
  },
  {
    id: 3,
    contentid: '126216',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/21/2616821_image2_1.jpg',
    title: '경주 석굴암',
  },
  {
    id: 4,
    contentid: '2756611',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/59/2757059_image2_1.jpg',
    title: '경주읍성',
  },
  {
    id: 5,
    contentid: '1963773',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/75/1963775_image2_1.jpg',
    title: '경주 마우나오션 관광단지',
  },
  {
    id: 6,
    contentid: '2603463',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/86/2625386_image2_1.jpg',
    title: '경주 동궁원',
  },
  {
    id: 7,
    contentid: '126166',
    firstimage: '/images/gyeongju/tour/불국사.png',
    title: '경주 불국사',
  },
];

const jeonjuFood = [
  {
    id: 1,
    contentid: '1014394',
    firstimage: '/images/jeonju/food/전주비빔밥.png',
    title: '전주비빔밥 고궁',
  },
  {
    id: 2,
    contentid: '1597434',
    firstimage: '/images/jeonju/food/쌈밥.png',
    title: '쌈가',
  },
  {
    id: 3,
    contentid: '1597886',
    firstimage: '/images/jeonju/food/솥밥.png',
    title: '하숙영 가마솥비빔밥',
  },
  {
    id: 4,
    contentid: '2840557',
    firstimage: '/images/jeonju/food/갈비.png',
    title: '솔가숯불갈비 신시가지점',
  },
  {
    id: 5,
    contentid: '1597873',
    firstimage: '/images/jeonju/food/콩나물국밥.png',
    title: '전주 왱이콩나물국밥전문점',
  },
  {
    id: 6,
    contentid: '2870984',
    firstimage: '/images/jeonju/food/우족탕.png',
    title: '김판쇠전주우족탕 본점',
  },
  {
    id: 7,
    contentid: '667442',
    firstimage: '/images/jeonju/food/팥죽.png',
    title: '옛날팥죽집',
  },
  {
    id: 8,
    contentid: '2870875',
    firstimage: '/images/jeonju/food/해장국.png',
    title: '엄가네시골집24시얼큰한뼈해장국',
  },
];

const jeonjuTour = [
  {
    id: 1,
    contentid: '147684',
    firstimage: '/images/jeonju/tour/전주향교.jpeg',
    title: '전주향교',
  },
  {
    id: 2,
    contentid: '264284',
    firstimage: '/images/jeonju/tour/전주한옥마을.jpg',
    title: '전북 전주 한옥마을 [슬로시티]',
  },
  {
    id: 3,
    contentid: '250331',
    firstimage: '/images/jeonju/tour/전주성당.jpeg',
    title: '전주전동성당',
  },
  {
    id: 4,
    contentid: '2790515',
    firstimage: '/images/jeonju/tour/전주드림랜드.jpeg',
    title: '전주드림랜드',
  },
  {
    id: 5,
    contentid: '126626',
    firstimage: '/images/jeonju/tour/전주동물원.jpeg',
    title: '전주동물원',
  },
  {
    id: 6,
    contentid: '479910',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/12/1976112_image2_1.jpg',
    title: '정혜사(전주)',
  },
  {
    id: 7,
    contentid: '2606240',
    firstimage: '/images/jeonju/tour/전주벽화마을.png',
    title: '전주 산성벽화마을',
  },
];

const jejuFood = [
  {
    id: 1,
    contentid: '2778461',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/89/2795089_image2_1.jpg',
    title: '다운타우너제주애월',
  },
  {
    id: 2,
    contentid: '2790487',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/02/2792102_image2_1.jpg',
    title: '제주돌창고',
  },
  {
    id: 3,
    contentid: '2858612',
    firstimage: '/images/jeju/food/문쏘협재점.jpeg',
    title: '문쏘 제주협재점',
  },
  {
    id: 4,
    contentid: '2847753',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/46/2847746_image2_1.jpg',
    title: '제주그림카페',
  },
  {
    id: 5,
    contentid: '2785301',
    firstimage: '/images/jeju/food/제주순메밀막국수.png',
    title: '제주순메밀막국수',
  },
  {
    id: 6,
    contentid: '2708338',
    firstimage: '/images/jeju/food/더클리프.jpeg',
    title: '더클리프',
  },
  {
    id: 7,
    contentid: '2561777',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/77/2561977_image2_1.jpg',
    title: '제주선',
  },
  {
    id: 8,
    contentid: '2854231',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/17/2854217_image2_1.jpg',
    title: '제주 정직한돈 한림협재점',
  },
];

const jejuTour = [
  {
    id: 1,
    contentid: '127635',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/99/2870099_image2_1.jpg',
    title: '한라산 (제주도 국가지질공원)',
  },
  {
    id: 2,
    contentid: '2045014',
    firstimage: '/images/jeju/tour/유수암마을_귤.png',
    title: '제주 유수암마을',
  },
  {
    id: 3,
    contentid: '2638441',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/95/2676395_image2_1.JPG',
    title: '제주탐나라공화국',
  },
  {
    id: 4,
    contentid: '126438',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/96/2612496_image2_1.jpg',
    title: '천지연폭포 (제주도 국가지질공원)',
  },
  {
    id: 5,
    contentid: '2714241',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/41/2867941_image2_1.jpg',
    title: '아르떼뮤지엄 제주',
  },
  {
    id: 6,
    contentid: '1993734',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/08/2617808_image2_1.jpg',
    title: '서귀포 가시리마을',
  },
  {
    id: 7,
    contentid: '322836',
    firstimage:
      'https://tong.visitkorea.or.kr/cms/resource/47/2615547_image2_1.bmp',
    title: '휴애리자연생활공원',
  },
];

export const regionContents = {
  seoul: {
    stay: seoulStay,
    tour: seoulTour,
  },
  busan: {
    stay: busanStay,
    tour: busanTour,
  },
  gangneung: {
    stay: gangneungStay,
    tour: gangneungTour,
  },
  gyeongju: {
    stay: gyeongjuStay,
    tour: gyeongjuTour,
  },
  jeonju: {
    stay: jeonjuFood,
    tour: jeonjuTour,
  },
  jeju: {
    stay: jejuFood,
    tour: jejuTour,
  },
};

type RegionNames = {
  [key: string]: string;
};

export const activeKeyList: RegionNames = {
  plan: '여행 일정 🛫',
  checklist: '여행 체크리스트 📝',
  ledger: '정산 내역 💶',
  review: '작성한 리뷰 ✏️',
};

## **🔗 [배포 링크](https://triplogs.netlify.app/)**

## ✨ 기술 스택

- Next.js
- Typescript
- Axios
- React-router-dom
- React-Query
- React Bootstrap

## ⚙️ 리팩토링 목적

기존의 프로젝트의 구현 기간이 제한되어 있어 예상치 못한 오류, 코드의 가독성과 유지보수의 어려움, 초기 로딩 속도 문제 등이 발생했습니다. 이러한 문제들을 해결하기 위해 검색 엔진 최적화(SEO)를 위해 React 코드를 서버사이드 렌더링(SSR)할 수 있도록 변환하고, JavaScript로 작성된 코드를 TypeScript로 변환하며 학습하며, Next.js를 이용한 페이지 구성에 대한 고민을 진행하고 있습니다. 또한 React-Query를 이용한 데이터의 가공과 axios의 인터셉터 기능을 익히는 것이 추가적인 목표입니다.

## 🚀 지금까지 구현된 기능

### 2023.02.16 ~ 2023.03.27 (배포)

React CRA로 프로젝트를 진행한 프로젝트를 Next.js로 리빌딩작업
- 기본적인 페이지 구성이 완료, 반응형 웹페이지를 지원
- 코드 상수화, 유효성 검사 함수를 분리

### 03.28 ~ 04.03

React-Query를 이용해 서브페이지(getStaticProps), 디테일페이지(getServerSideProps)구현
- 서브페이지는 getStaticProps를 이용해 구현
  - 서브페이지는 페이지 변경이 잃어나지 않기 때문에 빌드 될 시 정적페이지를 생성해주는 getStaticProps를 사용
- 디테일페이지의 경우는 getServerSideProps를 이용해 구현
  - 디테일페이지는 사용자의 리뷰, 별점, 조회수등 다양한 정보를 서버에서 제공받아 페이지를 보여줘야 하기때문에 getServerSideProps를 이용해 사용
  - React-Query의 fetchQuery를 이용해 서버에서 받아온 데이터를 캐싱해 성능개선
  
### 다음 구현 예정

리스트페이지의 데이터 요청, 페이지 네이션, 필터링기능

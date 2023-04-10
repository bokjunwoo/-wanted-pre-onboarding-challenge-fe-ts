## **🔗 [배포 링크](https://triplogs.netlify.app/)**
⭐️ 백엔드 API를 HTTPS로 설정하여 배포 환경에서 동작하지 않는 문제가 발생하고 있어, 현재 수정 중에 있습니다.

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
  
### 04.04 ~ 04.08
React-Query를 이용해 리스트페이지(getStaticProps) 및 페이지네이션 구현
- 리스트페이지는 getStaticProps를 이용해 구현
  - 모두가 똑같이 보는 공통 페이지로 미리 렌더링하며 개인 별로 페이지가 변경될 경우 새로운 api를 요청
- Next.js 13버전에서 제공하는 useSearchParams를 이용하여 현재 URL의 쿼리 문자열을 받아와 페이지네이션을 구현
  - 쿼리스트링(ex. ?page=1)을 활용하여 현재 URL에 따라 사용자가 모두 동일한 페이지를 볼 수 있도록 하여, 뒤로 가기나 공유 시 같은 페이지를 보여주어 사용자 경험을 향상

### 다음 구현 예정
로그인, 회원가입

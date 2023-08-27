# **🔗 [배포 링크](https://triplogs.netlify.app/)**

## **🔗 [기존 프로젝트 보러가기(FE)](https://github.com/bokjunwoo/TripLog_FE)**
## **🔗 [기존 프로젝트 보러가기(BE)](https://github.com/bokjunwoo/TripLog_BE)**

## ✨ 기술 스택

- Next.js
- Typescript
- Axios
- React-router-dom
- React-Query
- React Bootstrap

## 💡CRA To Next.js 마이그레이션 이유

- 서버 사이드 렌더링 (Server-Side Rendering, SSR) : 페이지를 서버에서 사전 렌더링하여 초기 로드 속도와 검색 엔진 최적화(SEO)가 가능하기 때문
- 정적 사이트 생성 (Static Site Generation, SSG) : 빌드시 사전에 페이지를 렌더링하여 정적인 HTML 파일을 생성해, 데이터가 필요하지 않은 경우 성능과 보안을 개선하는 데 도움이 되기 때문
- 페이지 기반 라우팅 : 각 페이지를 개별적인 파일로 생성하고 관리하기 때문에 코드 구조가 단순해지고 유지 보수가 용이하기 때문
- JavaScript로 → TypeScript : 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거해 생산성을 높이기 위해


## 📍 변경 된 구현기능

- CRA로 구성된 기능을 크게 변경하지 않고 유지하면서, UI / UX를 개선하여 모바일 반응형 및 다양한 데스크탑 해상도에 대응할 수 있도록 개선
- 기존의 axios를 사용한 데이터 통신을 react-query로 대체하여 데이터 요청과 캐싱을 통해 성능을 향상. 
또한 비동기 데이터 관리를 위해 상태를 추적하고, 로딩 상태, 성공 상태, 오류 상태를 자동으로 관리하며, 이를 통해 간단하게 UI를 업데이트하고 오류 처리를 수행할 수 있도록 변경
- 쿼리 스트링을 통해 URL을 공유함으로써 사용자들이 동일한 화면을 볼 수 있도록 하며, 새로고침이나 페이지 이동 시에도 쿼리 스트링을 활용하여 이전 상태를 유지하고 필요한 데이터를 다시 요청하여 일관성을 유지할 수 있도록 해 사용자 경험을 향상

## 🚀 지금까지 구현된 기능

### 08.24 ~ 08.27
⭐️ 배포 기능 중 오류 수정 및 디자인 개선

- 기존 데이터 로딩 기능을 세분화하여 해당 컴포넌트에서 로딩 중임을 시각적으로 표시함으로써 사용자 경험을 향상
    - 이제 데이터를 불러오는 컴포넌트에서는 {isLoading ? <로딩 중에 보여줄 컴포넌트> : <로딩 후에 보여줄 컴포넌트>}와 같이 리팩토링
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/ac7c0c43-9a20-4658-98bd-94a609465387' width='400px'>
- 폰트 스타일을 변경하여 디자인을 개선
- 체크리스트 입력 창의 크기 수정
- 공공데이터 포털에서 사라진 정보(지역)에 대한 데이터가 없을 경우에 대한 오류 수정(BE)


### 08.06 ~ 08.21
⭐️ 검색 기능 구현(무한 스크롤)

- /search 라우터에서 useSearchParams를 활용하여 검색 기능을 추가하고 검색 결과를 무한 스크롤 (infinite scroll) 방식으로 구현
    - 지역 버튼을 클릭하면 region 쿼리스트링을 통해 해당 지역의 데이터를 요청
    - 입력창에 검색하고 싶은 지역을 입력하면 title 쿼리스트링을 활용하여 해당 지역의 데이터를 요청
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/8159ecd9-1ed5-4001-8d87-19a0e619445c' width='400px'>

### 07.18 ~ 08.01
⭐️ 이미지 등록 기능 구현

- 이미지 저장을 위해 S3를 활용하는 기능 추가
    - 마이페이지에서 사용자의 이미지를 등록
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/215c081b-fd37-4c88-9d03-2a0421a3ab1a' width='400px'>

    - 리뷰 작성 시 이미지를 등록및 취소
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/d6b6098f-cf40-4588-b12d-7607b038ce49' width='400px'>

### 06.18 ~ 07.16

⭐️ 마이페이지 구현(getServerSideProps)

- getServerSideProps를 사용하여 사용자의 로그인 상태에 따라 리디렉션 설정
- 마이페이지의 네비게이션 키 구현을 위한 sessionStorage 활용
    - sessionStorage를 활용하여 마이페이지를 요청했을 때, useEffect를 사용하여 페이지가 로드되기 전에 해당 키 값을 받아와 이후 해당 키 값에 따라 리뷰, 가계부, 체크리스트, 여행계획 등 사용자 정보를 가져와서 렌더
- useQuery 커스텀 훅을 활용한 데이터 요청
    - useQuery 커스텀 훅을 활용하여 sessionStorage 키 값을 기반으로 데이터를 요청해 useQuery를 사용하여 해당 키 값을 기반으로 필요한 데이터를 서버로부터 가져와 사용자에게 제공합니다.
- <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/0a5138fb-55d0-4234-8bbf-87892c3c74f9' width='400px'>

⭐️ 여행계획 작성 구현

- react-calendar를 통해 여행 계획 일정 선택
    - react-calendar를 활용하여 여행 계획의 일정을 선택하면 recoil을 업데이트하고, 이를 통해 여행 계획 페이지로 이동
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/6160913a-f391-4845-88fd-600d01bb83e7' width='400px'>

    
- recoil를 이용하여 여행계획 정보를 전역관리
    - recoil을 이용하여 여행 계획 정보를 전역적으로 관리하여 props drilling을 방지하고, 자식 컴포넌트에서 부모 컴포넌트로 데이터 전송을 통해 페이지를 렌더
- Kakao Map을 통해 위치 확인
    - 여행지를 선택하면 지도에 마커를 표시하여 위치를 확인할 수 있습니다. 여러 곳을 선택하면 해당 동선을 볼 수 있도록 지원

### 06.01 ~ 06.13

⭐️ react-query를 이용해 디테일 페이지 리뷰 작성, 수정, 삭제, 좋아요의 기능 구현

- 로그인 여부에 따른 Toast 알림
    - react-query의 useQuery 훅을 사용하여 사용자의 로그인 상태를 확인해 로그인이 필요한 기능에 접근할 때, 로그인 상태를 체크하고 비로그인 상태인 경우 Toast를 사용하여 사용자에게 알림
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/3cd2a750-2927-4f2e-bdfa-44624d2a3f0b' width='400px'>

- 리뷰 작성, 수정, 삭제, 좋아요
    - react-query의 useMutation 훅을 사용하여 리뷰 작성 기능을 구현
    - API 요청을 수행하는 함수를 useMutation으로 감싸고, 요청 결과를 처리
    - API 요청이 성공적으로 이루어지면 UI를 업데이트하고, 실패한 경우 에러를 처리

### 05.04 ~ 05.25

⭐️ 체크리스트 페이지 구현(getServerSideProps)

- getServerSideProps를 사용하여 사용자의 로그인 상태에 따라 리디렉션 설정
    - 클라이언트에서 해당 페이지를 요청하면 서버 측에서 사용자의 로그인 상태를 확인해 로그인되어 있지 않은 경우, redirect 옵션을 통해 로그인 페이지로 리디렉션하도록 구현
- react-query를 사용하여 체크표시 및 아이템 추가와 같은 액션에 대한 UI 업데이트와 서버 통신 구현
(기존 : 저장 버튼을 통해 사용자의 액션에 대한 비동기 통신)
    - 체크표시 또는 아이템 추가와 같은 액션이 발생했을 때, onMutate 함수를 사용하여 UI를 업데이트하며 이와 동시에 서버와의 통신을 수행하여 해당 정보를 업데이트

⭐️ 가계부 페이지 구현(getServerSideProps)

- getServerSideProps를 사용하여 사용자의 로그인 상태에 따라 리디렉션 설정
    - 클라이언트에서 해당 페이지를 요청하면 서버 측에서 사용자의 로그인 상태를 확인해 로그인되어 있지 않은 경우, redirect 옵션을 통해 로그인 페이지로 리디렉션하도록 구현
- react-query를 사용하여 가계부 등록 액션에 대한 UI 업데이트와 서버 통신 구현
    - 체크표시 또는 아이템 추가와 같은 액션이 발생했을 때, onMutate 함수를 사용하여 UI를 업데이트하며 이와 동시에 서버와의 통신을 수행하여 해당 정보를 업데이트
- 가계부 페이지의 인원 수 계산 기능 추가(최소 1명, 최대 10명)
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/3c3e2fcb-6aa9-4f44-a61e-9d6b3cfa5a06' width='400px'>

⭐️ 로그이웃 구현

- 헤더의 로그인 상태에 따른 아이콘 변경과 서버에 로그아웃 요청

### 04.18 ~ 04.25

⭐️ 카카오 회원가입, 로그인 구현

- 회원가입
    - 카카오 API를 이용해 사용자의 정보를 받아 트립로그에 사용을 원하는 닉네임을 설정해 가입을 완료
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/4266c662-3908-4c9d-86ca-a9bee798e386' width='200px'>

- 로그인
    - 카카오 가입 유무를 확인해 입력한 닉네임을 통해 트립로그의 서비스 이용가능

### 04.10 ~ 04.17

⭐️ 로컬 회원가입, 로그인 구현

- 회원가입
    - 아이디, 비밀번호, 닉네임 등 회원 정보를 입력받고, 입력값 유효성 검사
    - <img src='https://github.com/bokjunwoo/TripLog-Next.js-refactoring/assets/106523012/8728adc0-0f0d-47ef-bbd5-ece75d6a8f85' width='200px'>

    - 서버에 데이터 요청을 통해 중복 아이디 및 닉네임 검사
- 로그인
    - 아이디, 비밀번호를 서버에 데이터요청을 통한 메세지 전달

⭐️ 디테일 페이지 Data Fetching 리팩토링

- getStaticProps를 사용하여 미리 빌드된 정적 파일을 제공하므로써, 매번 서버에 새로운 요청을 보내지 않고도 페이지를 생성하고 성능과 속도를 향상시킴
- React-Query의 prefetchQuery를 사용하여 데이터를 캐싱하여 성능과 속도를 향상시킴

### 04.04 ~ 04.08

⭐️ React-Query를 이용해 리스트페이지(getStaticProps) 및 페이지네이션 구현

- 리스트페이지는 getStaticProps를 이용해 구현
    - 모두가 똑같이 보는 공통 페이지로 미리 렌더링하며 개인 별로 페이지가 변경될 경우 새로운 api를 요청
- Next.js 13버전에서 제공하는 useSearchParams를 이용하여 현재 URL의 쿼리 문자열을 받아와 페이지네이션을 구현
    - 쿼리스트링(ex. ?page=1)을 활용하여 현재 URL에 따라 사용자가 모두 동일한 페이지를 볼 수 있도록 하여, 뒤로 가기나 공유 시 같은 페이지를 보여주어 사용자 경험을 향상

### 03.28 ~ 04.03

⭐️ React-Query를 이용해 서브페이지(getStaticProps), 디테일페이지(getServerSideProps)구현

- 서브페이지는 getStaticProps를 이용해 구현
    - 서브페이지는 페이지 변경이 잃어나지 않기 때문에 빌드 될 시 정적페이지를 생성해주는 getStaticProps를 사용
- 디테일페이지의 경우는 getServerSideProps를 이용해 구현
    - React-Query의 fetchQuery를 이용해 서버에서 받아온 데이터를 요청

### 2023.02.16 ~ 2023.03.27 (배포)

⭐️ React CRA로 프로젝트를 진행한 프로젝트를 Next.js로 리빌딩작업

- 기본적인 페이지 구성이 완료, 반응형 웹페이지를 지원

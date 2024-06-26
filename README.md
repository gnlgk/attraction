# youtube API를 이용한 커피 유튜브 사이트

- 본 프로젝트는 YouTube API를 이용하여 커피와 관련된 다양한 영상을 제공하는 웹 사이트입니다. 사용자는 커피와 관련된 다양한 키워드로 구성된 메뉴를 통해 관련 영상을 쉽게 찾을 수 있으며, 채널 페이지와 영상 상세 페이지를 통해 더욱 깊이 있는 콘텐츠를 즐길 수 있습니다.

## function

* YouTube API: YouTube Data API를 사용하여 커피 관련 키워드로 영상을 검색하고 표시합니다.
* 메뉴 구성: 커피와 관련된 여러 키워드로 메뉴를 구성하여 각 키워드에 맞는 영상을 보여줍니다.
* 채널 페이지: 선택한 유튜브 채널의 정보를 확인하고 해당 채널의 영상을 볼 수 있습니다.
* 영상 상세 페이지: 선택한 영상의 세부 정보를 확인하고 영상을 재생할 수 있습니다.
* 검색 기능: 사용자가 원하는 키워드로 유튜브 영상을 검색할 수 있습니다.

## design

![image](https://github.com/gnlgk/attraction/assets/161431748/0960c7c0-0fd9-449f-beb7-c5638ebf252a)

## 트러블슈팅

1. YouTube API 호출 오류
* 문제: YouTube API를 호출하는 과정에서 오류가 발생하는 경우.
* 해결방법:
  - API 키 확인: Google Cloud 콘솔에서 API 키가 올바르게 설정되어 있는지 확인합니다.
  - 할당량 확인: YouTube API의 할당량이 초과되지 않았는지 확인합니다.
  - 네트워크 요청 확인: 개발자 도구의 Network 탭에서 요청과 응답을 확인하여 문제를 파악합니다.

2. 레이아웃 및 스타일링 문제
* 문제: 다양한 기기에서 레이아웃이 깨지거나 스타일링이 제대로 적용되지 않는 경우.
* 해결방법:
  - 반응형 디자인: CSS 미디어 쿼리를 사용하여 반응형 디자인을 구현합니다.
  - CSS 프레임워크 사용: Tailwind CSS와 같은 프레임워크를 사용하여 일관된 스타일링을 적용합니다.
  - 브라우저 호환성: 다양한 브라우저에서 테스트하여 호환성을 확인합니다.

## 작업 순서

1. node.js 설치 / 버전 확인 (설치 확인)
2. 기본 적인 작업 폴더 설정 -- npx create-react-app . react 설치
3. 라이브러리 설치
4. 폴더 셋팅
5. header 설정
6. Suspense 설정

## 실행하기

'npm start' : 리액트 시작하기

## 필요한 라이브러리 설치

- react를 설치 `npm create-react-app 폴더이름` : 폴더 생략시 '.'으로 대체
- react-router-dom 설치 `npm install react-router-dom` : 주소 설정 라이브러리
- axios 설치 `npm install axios` : api 라이브러리 설치
- react icon 설치 : `npm install react-icons` : 리엑트에 필요한 아이콘
- react-player 설치 : `npm install react-player` : 유튜브 영상 재생
- sass 설치 : `npm install sass` : css 라이브러리
- react-helmet-asyne 설치 `npm install react-helmet-async` : Node.js 환경에서 HTTP 헤더를 설정
- swiper 설치 `npm install swiper` : 이미지 슬라이드

```bash
npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper
```

## 사용 스택

"react": "^18.3.1",  
"react-dom": "^18.3.1",  
"react-helmet-async": "^2.0.5",  
"react-icons": "^5.2.1",  
"react-player": "^2.16.0",  
"react-router-dom": "^6.23.1",  
"react-scripts": "5.0.1",  
"sass": "^1.77.2",  
"swiper": "^11.1.3",  
"web-vitals": "^2.1.4"

## 프로젝트 실행

`import { BrowserRouter, Route, Routes } from 'react-router-dom'` :  
설치한 라이브러리를 import하여 Home.jsx를 연동함.  
`BrowserRouter` : 클라이언트 측 라우팅  
`Routes ,Route` : 컴포넌트 렌더링

<br/>

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
```

해당 코드를 통해 `Home` 컴포넌트를 설정하였음.  
`/` paht는 사이트의 `main` 혹은 홈화면을 뜻함.

## 트러블 슈팅

-- npx create-react-app . 명령어 실행 시 에러발생 :  
검색 결과 npm 폴더가 자동으로 생성되지 않아 에러가 발생함.  
local folder에서 직접 npm 폴더 생성하여 해결.

- Rapid API를 이용했었는데 데이터를 불러오지 못해서 youtube API로 변경

### 다른사람 리액트 확인

git clone "깃헙주소"

- 파일이름  
  git install  
  버전확인

npm run build

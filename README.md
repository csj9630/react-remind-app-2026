# 🧠 React 핵심 개념 복습 및 실습 프로젝트

리액트의 핵심 기능인 **라우팅(Routing), 컴포넌트 아키텍처(State/Props), 그리고 API 통신(Fetch/Axios)**의 기본기를 다지고 실무형 아키텍처를 학습하기 위한 정리 공간입니다.

---

## 🏗️ 1. Project Architecture & Directory (폴더 구조 및 용도)

```text
src/
├── api/                  # API 통신 관련 모듈 관리
│   ├── axiosInstance.js  # 공통 Axios 설정
│   ├── chatApi.js        # 채팅 관련 API 요청 정의
│   └── documentApi.js    # 문서 관련 API 요청 정의
├── components/           # 공통 및 재사용 가능 UI 컴포넌트
│   ├── Button.jsx        # 공통 버튼 컴포넌트
│   ├── ChatHistory.jsx   # 채팅 기록 출력 컴포넌트
│   ├── ChatInput.jsx     # 채팅 입력 및 전송 컴포넌트
│   ├── Header.jsx        # 공통 상단 헤더
│   ├── Sidebar.jsx       # 네비게이션 메뉴 바
│   └── Footer.jsx        # 공통 하단 푸터
├── layouts/              # 레이아웃 컴포넌트
│   └── MainLayout.jsx    # 전체 페이지 기본 골격 정의
├── pages/                # 각 라우트별 독립적인 페이지 화면
│   ├── HomePage.jsx      # 기본 State 활용 복습 페이지
│   ├── ChatPage.jsx      # AI 채팅 페이지 (Axios / Fetch)
│   ├── DocumentPage.jsx  # 문서 목록 조회 페이지 (Axios / Fetch)
│   └── PracticePage.jsx  # 컴포넌트 간 데이터 전달 실습 페이지
├── App.jsx               # 라우팅 경로 설정 및 루트 컴포넌트
└── main.jsx              # 애플리케이션 진입점 (Context 주입)
```

---

# 🧠 React 기능별 연관 파일 및 용도 정리

---

## 🚦 1. 라우팅 및 전역 레이아웃 설정

사용자가 접속한 URL 주소에 따라 알맞은 화면을 보여주고, 공통 UI를 유지해 주는 기능입니다.

### 📁 연관 파일

- `main.jsx`
- `src/App.jsx`

- `src/layouts/MainLayout.jsx`

- `src/components/Sidebar.jsx`

### 📝 기능 설명 및 용도

- **전역 라우터 환경 주입 (`main.jsx`)**
- `<BrowserRouter>`로 최상위 컴포넌트를 감싸 프로젝트 전체에서 페이지 이동(라우팅) 기능을 사용할 수 있도록 기본 환경을 조성합니다.

- **라우팅 경로 정의 (`src/App.jsx`)**
- `<Routes>`와 `<Route>` 태그를 사용해 실제 브라우저 주소(URL)와 컴포넌트(`HomePage`, `ChatPage` 등)를 1:1로 매핑하고 총괄합니다.

- **공통 레이아웃 아키텍처 (`src/layouts/MainLayout.jsx`)**
- 모든 페이지에서 공통으로 보여줄 전체적인 뼈대 구조를 정의합니다. 부모 라우트 속성으로 쓰이며, 주소가 바뀔 때마다 교체되어 들어올 자식 컴포넌트들의 위치를 `<Outlet/>`으로 지정해 줍니다.

- **네비게이션 링크 구현 (`src/components/Sidebar.jsx`)**
- `<nav>`와 `<NavLink>`를 사용하여 유저가 클릭해 페이지를 이동할 수 있는 메뉴판을 만듭니다. 실제 라우팅 정의는 `App.jsx`에서 하고, 여기서는 이동할 주소(`to="/chat"`)만 연결합니다.

---

## 🔄 2. 컴포넌트 기초 상태 관리 및 Props 전달

리액트의 가장 기본 데이터 흐름인 '상태(State)'를 선언하고, 데이터를 하위 컴포넌트로 전달하는 기능입니다.

### 📁 연관 파일

- `src/pages/HomePage.jsx`

- `src/components/Button.jsx`

### 📝 기능 설명 및 용도

- **컴포넌트 독립 상태 관리 (`src/pages/HomePage.jsx`)**
- `useState`를 활용해 화면에서 동적으로 변하는 데이터(`count`)를 선언하고 제어합니다. 내부 함수를 통해 상태가 업데이트되면 리액트가 화면을 자동으로 다시 그려줍니다(리렌더링).

- **UI 컴포넌트 재사용 및 데이터 수신 (`src/components/Button.jsx`)**
- 부모 컴포넌트가 넘겨준 문자열(`text`)과 이벤트 함수(`onClick`)를 **Props**로 받아와 화면에 띄우고 실행하는 순수 UI 컴포넌트입니다.

---

## 📥 3. 컴포넌트 간 상향식 데이터 전달 (Callback)

자식 컴포넌트에서 일어난 이벤트나 입력된 데이터를 부모 컴포넌트의 상태로 끌어올리는 기능입니다.

### 📁 연관 파일

- `src/pages/PracticePage.jsx`
- `src/components/ChatInput.jsx`
- `src/components/ChatHistory.jsx`

### 📝 기능 설명 및 용도

- **상태 컨트롤 타워 (`src/pages/PracticePage.jsx`)**
- 하위 컴포넌트들이 공유할 메인 데이터(예: 대화 기록 배열)를 소유하고 총괄하는 부모 페이지입니다.

- **하향식 데이터 출력 (`src/components/ChatHistory.jsx`)**
- 부모 컴포넌트로부터 데이터 배열을 Props로 단순 전달받아, `map()` 함수를 돌려 화면에 리스트 형태로 뿌려주는 출력 전용 자식 컴포넌트입니다.

- **상향식 콜백 함수 실행 (`src/components/ChatInput.jsx`)**
- 유저가 입력창에 타이핑한 값을 자체 상태로 가지고 있다가, 전송 버튼을 누르는 순간 부모가 Props로 내려준 콜백 함수(`onSend`)를 호출하여 데이터를 부모에게 역으로 던져주는(상태 끌어올리기) 입력 전용 자식 컴포넌트입니다.

---

## 📡 4. Axios 인스턴스를 활용한 구조적 API 통신

외부 라이브러리인 Axios를 사용해 공통 설정을 규격화하고, 비즈니스 로직을 분리하여 서버와 데이터를 주고받는 기능입니다.

### 📁 연관 파일

- `src/api/axiosInstance.js`
- `src/api/chatApi.js`
- `src/api/documentApi.js`
- `src/pages/ChatPage.jsx`

- `src/pages/DocumentPage.jsx`

### 📝 기능 설명 및 용도

- **공통 네트워크 설정 (`src/api/axiosInstance.js`)**
- 서버의 기본 주소(`baseURL`), 타임아웃 제한 시간, 공통 헤더 설정 등을 한곳에 모아 인스턴스로 정의합니다. 반복되는 통신 설정 코드를 제거해 줍니다.

- **도메인별 API 함수 모듈화 (`src/api/chatApi.js`, `src/api/documentApi.js`)**
- 생성된 `axiosInstance`를 사용해 각각 채팅 전송(`POST`), 문서 목록 요청(`GET`) 등 실제 서버 통신을 담당할 비동기 함수들을 컴포넌트 외부로 분리해 정의합니다.

- **라이프사이클 기반 초기 데이터 조회 (`src/pages/DocumentPage.jsx` + `useEffect`)**
- 컴포넌트가 처음 화면에 켜지는 시점(**Mount**)에 딱 한 번만 `documentApi` 함수를 호출하도록 `useEffect`의 의존성 배열을 빈 배열(`[]`)로 설정하여 데이터를 안전하게 가져옵니다.

- **사용자 비즈니스 로직 처리 (`src/pages/ChatPage.jsx`)**
- 유저가 메시지를 보냈을 때 `chatApi` 함수를 호출하여 비동기 응답을 받아오고, 통신 상태에 따라 로딩 스피너 작동이나 에러 예외 처리를 화면에 반영합니다.

---

## 🌐 5. 브라우저 내장 Fetch API 기반 순수 통신

외부 라이브러리 설치 없이 브라우저에 내장된 순수 `fetch()` 함수만을 사용해 서버와 통신하는 기초 기능입니다.

### 📁 연관 파일

- `src/pages/ChatPage_nonAxios.jsx` (혹은 파일 내 fetch 예제 로직)

- `src/pages/DocumentPage_nonAxios.jsx` (혹은 파일 내 fetch 예제 로직)

### 📝 기능 설명 및 용도

- **순수 HTTP GET 요청 처리 (`DocumentPage_nonAxios.jsx`)**
- `useEffect` 안에서 별도 옵션 없이 `fetch(url)`를 호출하여 서버의 데이터를 가져옵니다. 날것의 데이터가 오기 때문에 반드시 **`await response.json()`** 단계를 거쳐 자바스크립트 객체로 수동 변환한 뒤 상태에 저장합니다.

- **순수 HTTP POST 요청 처리 (`ChatPage_nonAxios.jsx`)**
- 서버에 데이터를 보낼 때 `fetch(url, { method: 'POST', headers: { ... }, body: JSON.stringify(...) })`와 같이 HTTP 메서드, 헤더 정보, 직렬화된 문자열 본문을 컴포넌트 내부에 직접 명시하여 통신을 수행합니다.

---

## 🌐 6. 환경변수(Environment Variables) 관리

API 서버 주소나 보안이 필요한 키(Key) 등 변경 가능성이 있거나 민감한 설정을 소스코드와 분리하여 관리하는 기능입니다.

### 📁 연관 파일

- `.env` (또는 `.env.local`)
- `src/api/axiosInstance.js`

### 📝 기능 설명 및 용도

- **환경변수 정의 및 은닉 (`.env`)**
- 프로젝트 최상단(Root)에 위치하며, `VITE_API_URL=http://localhost:5173`과 같이 전역 설정을 키-값(Key-Value) 형태로 저장합니다.
- Vite 빌드 도구를 사용하는 경우, 변수명 앞에 반드시 **`VITE_`** 접두사를 붙여야 리액트 앱 내부에서 안전하게 인식할 수 있습니다.

- **환경변수 참조 및 동적 적용 (`src/api/axiosInstance.js`)**
- 코드 내부에서 `import.meta.env.VITE_API_URL` 문법을 사용해 `.env`에 등록된 서버 주소를 동적으로 불러옵니다.
- 기존에 하드코딩되어 있던 `baseURL` 자리를 이 환경변수로 대체함으로써, 개발 환경과 운영 환경의 서버 주소가 달라지더라도 코드를 일일이 수정할 필요 없이 유연하게 대응할 수 있도록 만듭니다.

---

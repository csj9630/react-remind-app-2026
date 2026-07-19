import axios from "axios";

//Axios는 JavaScript에서 HTTP 요청을 보내기 위한 라이브러리이다.
//axios.create()를 사용하여 Axios 인스턴스를 생성하고, 기본 URL과 헤더를 설정한다.
const apiClient = axios.create({
  // API 서버의 URL : env 파일에서 가져온 환경 변수 사용
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json", // 요청 헤더 설정
  },
});
export default apiClient;

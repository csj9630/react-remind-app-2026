/*
import apiClient from "./axiosInstance";

export async function fetchDocuments() {
  const response = await apiClient.get("/documents");
  return response.data;
}

export async function fetchDocumentDetail(documentId) {
  const response = await apiClient.get(`/documents/${documentId}`);
  return response.data;
}
*/
//api 테스트를 위해 fetchDocuments, fetchDocumentDetail 함수를 임시로 수정하여 실제 서버와 통신하지 않고, 0.5초 후에 가짜 데이터를 반환하도록 구현
export async function fetchDocuments() {
  // 0.5초 대기하여 로딩 상태(loading === true)가 화면에 잠깐 보이도록 만듭니다.
  await new Promise((resolve) => setTimeout(resolve, 500));

  // DocumentPage.jsx에서 'document.id', 'document.title'을 쓰고 있으므로 규격을 맞춥니다.
  return [
    { id: 1, title: "📄 Unit 18: React Component Architecture 실습 가이드" },
    { id: 2, title: "📄 Unit 19: State Lifting & Callback 함수 활용 기법" },
    { id: 3, title: "📄 Unit 20: Axios Instance를 활용한 API 모듈화" },
    { id: 4, title: "📄 Unit 21: useEffect 기초와 Component Lifecycle" },
    { id: 5, title: "📄 부록: .env 환경변수 설정 및 Vite 빌드 도구 활용" },
  ];
}

export async function fetchDocumentDetail(documentId) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    id: documentId,
    title: `선택한 문서 ${documentId}의 세부 내용입니다.`,
    content: "실습 환경 조성을 위한 가짜 데이터 본문입니다.",
  };
}

// API 요청 코드 정의를 분리하여 관리.
// 필요한 jsx 에서 import 받아서 사용한다.
/*
import apiClient from "./axiosInstance.js";

export async function requestChat(message) {
  //Axios 인스턴스를 사용하여 POST 요청을 보낸다.
  const response = await apiClient.post("/chat", { message });

  if (!response.ok) {
    throw new Error("채팅 API 요청에 실패했습니다.");
  } //if

  return response.json();
} //async function
*/
//api 테스트를 위해 requestChat 함수를 임시로 수정하여 실제 서버와 통신하지 않고, 1초 후에 가짜 데이터를 반환하도록 구현
export async function requestChat(message) {
  // 1초(1000ms) 동안 대기하여 실제 서버와 통신하는 듯한 타임아웃 연출
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // ChatPage.jsx에서 'data.answer' 구조로 사용하고 있으므로 규격을 맞춰줍니다.
  return {
    answer: `🤖 [AI 리마인드 답변]\n입력하신 "${message}"에 대한 복습 내용입니다. 리액트에서 상태(State)와 비동기 통신 흐름을 한 번 더 점검해 보세요!`,
  };
}

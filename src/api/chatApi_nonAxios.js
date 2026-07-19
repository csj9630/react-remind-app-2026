// API 요청 코드 정의를 분리하여 관리.
// 필요한 jsx 에서 import 받아서 사용한다.
export async function requestChat(message) {
  const ApiAddress = "http://localhost:5173/chat";
  const response = await fetch(ApiAddress, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  }); //response

  if (!response.ok) {
    throw new Error("채팅 API 요청에 실패했습니다.");
  } //if

  return response.json();
} //async function

import { useState } from "react";
import { requestChat } from "../api/chatApi";

//Axios 인스턴스를 사용한 API 통신 예제
function ChatPage() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //[비동기 처리] API 서버와 통신하는 함수
  //(대기시간이 필요하므로 async 사용)
  async function handleSend() {
    if (!message.trim()) {
      return;
    }

    setLoading(true); //요청 시작하고 로딩 온
    setError(null); // 이전 에러 제거

    try {
      //Axios 인스턴스를 사용하여 POST 요청을 보낸다.
      const data = await requestChat(message);

      //Answer State에 저장하고 화면 리렌더링.
      setAnswer(data.answer);
    } catch (err) {
      //에러 메시지 저장
      setError("AI 응답 생성에 실패했습니다. : " + err.message);
    } finally {
      //결과 상관 없이 로딩 종료
      setLoading(false);
    } //finally
  } //async

  //--------------return---------------
  return (
    <>
      <h1>AI Chat</h1>
      {/* 양방향 바인딩: value는 state에 묶고, 글자 입력 시마다 onChange로 state 업데이트 */}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      {/* 로딩 중(loading === true)일 때는 버튼을 disabled(비활성화)하여 따닥 연타를 원천 차단 */}
      <button onClick={handleSend} disabled={loading}>
        {loading ? "응답 생성 중..." : "send"}
      </button>

      {/*에러나 답변이 존재할 때만 출력 */}
      {error && <p>{error}</p>}
      {answer && <p>{answer}</p>}
    </>
  );
}

export default ChatPage;

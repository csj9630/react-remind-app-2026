import { useState } from "react";

//실무형 fetch 예제
function ChatPage() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //[비동기 처리] API 서버와 통신하는 함수
  //(대기시간이 필요하므로 async 사용)
  async function sendMessage() {
    setLoading(true); //요청 시작하고 로딩 온
    setError(null); // 이전 에러 제거
    try {
      //fetch로 서버에 post 요청
      //응답 받을 때까지 대기(await)
      const response = await fetch("http://localhost:5173/chat", {
        method: "POST", //Method 설정
        //보내는 데이터 타입
        headers: {
          "Content-Type": "application/json",
        },
        //json을 문자열 데이터로 직렬화
        body: JSON.stringify({
          message,
        }),
      });
      //실패 뜨면 에러 처리
      if (!response.ok) {
        throw new Error("API 요청에 실패했습니다.");
      }

      //서버에서 응답 받을 때까지 대기
      //받으면 json으로 변환
      const data = await response.json();

      //Answer State에 저장하고 화면 리렌더링.
      setAnswer(data.answer);
    } catch (err) {
      //에러 메시지 저장
      setError(err.message);
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
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "응답 생성 중..." : "send"}
      </button>

      {/*에러나 답변이 존재할 때만 출력 */}
      {error && <p>{error}</p>}
      {answer && <p>{answer}</p>}
    </>
  );
}

export default ChatPage;

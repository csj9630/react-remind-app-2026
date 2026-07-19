import { useState } from "react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  function handleSubmit() {
    onSend(text); //메시지 전송
    setText(""); //입력창 비우기
  }

  return (
    <div>
      <input
        type="text"
        placeholder="질문을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>전송</button>
    </div>
  );
}
export default ChatInput; //ChatInput을 다른 곳에서 쓰도록 허가

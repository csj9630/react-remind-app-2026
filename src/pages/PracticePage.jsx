//컴포넌트 간 데이터 전달(부모 컴포넌트 -> 자식 컴포넌트)
//Callback 함수를 연습한다.
import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatHistory from "../components/ChatHistory";
function PracticePage(params) {
  const [messages, setMessages] = useState([]);

  function addMessage(text) {
    setMessages((prev) => [...prev, text]);
  }

  return (
    <>
      <h1>Callback 함수 연습</h1>
      <h3>컴포넌트 간 데이터 전달(부모 컴포넌트 ➡️ 자식 컴포넌트)</h3>
      <p>1. 자식 컴포넌트의 입력값을 부모컴포넌트로 전달. </p>
      <ChatInput onSend={addMessage} />
      <p>2. 부모 컴포넌트에서 전달한 state를 자식 컴포넌트에서 출력</p>
      <ChatHistory messages={messages} />
    </>
  );
}

export default PracticePage;

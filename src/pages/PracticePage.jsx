//컴포넌트 간 데이터 전달(부모 컴포넌트 -> 자식 컴포넌트)
//Callback 함수를 연습한다.
import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatHistory from "../components/ChatHistory";
import Button from "../components/Button";
function PracticePage(params) {
    const [messages, setMessages] = useState([]);

    // 1. 상태(State) 선언하기
    const [count, setCount] = useState(0);

    // 2. 버튼이 클릭되었을 때 실행할 함수
    const handleIncrement = () => {
        setCount(count + 1);
    };

    function handleDecrement() {
        setCount(count - 1);
    }

    function addMessage(text) {
        setMessages((prev) => [...prev, text]);
    }

    return (
        <>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>🚀 리액트 복습 시동 걸기</h1>
                <p>
                    현재 카운트: <strong>{count}</strong>
                </p>

                {/* 3. 컴포넌트에 Props 넘겨주기 */}
                <Button text="숫자 올리기" onClick={handleIncrement} />
                <Button text="숫자 내리기" onClick={handleDecrement} />
                <Button text="초기화" onClick={() => setCount(0)} />
            </div>
            <hr></hr>
            {/* ---------------------------------------------------- */}
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

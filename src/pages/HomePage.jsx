import React, { useState } from "react";
import Button from "../components/Button";
function HomePage() {
  // 1. 상태(State) 선언하기
  const [count, setCount] = useState(0);

  // 2. 버튼이 클릭되었을 때 실행할 함수
  const handleIncrement = () => {
    setCount(count + 1);
  };

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Home</h1>
      <h3>
        현재 가데이터 api로 되어 있으니 chatApi.js, documentApi.js 파일을 확인해
        보세요.
      </h3>
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
    </>
  );
}

export default HomePage;
